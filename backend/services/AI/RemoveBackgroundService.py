from transformers import AutoModelForImageSegmentation
from torchvision.transforms.functional import normalize
import torch
import torch.nn.functional as F
import numpy as np
from PIL import Image
from io import BytesIO

"""
RemoveBackgroundService: remove background of an image and return a PNG file
"""

REMOVE_BACKGROUND_MODEL = "briaai/RMBG-1.4"

class RemoveBackgroundService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(RemoveBackgroundService, cls).__new__(cls)
            cls._instance.model = None
        return cls._instance

    def remove_background_img(self, img: Image.Image) -> Image.Image:
        if self.model == None:
            self.model = AutoModelForImageSegmentation.from_pretrained(REMOVE_BACKGROUND_MODEL, trust_remote_code=True)

        img_size = img.size[:2]
        img = img.convert("RGB")
        img_array = np.array(img)
        preprocessed_img = self._preprocess_image(img_array, img_size)

        # inference
        result = self.model(preprocessed_img)

        # post process
        result_image = self._postprocess_image(result[0][0], img_size[::-1])

        # save result
        pil_im = Image.fromarray(result_image)
        no_bg_im = Image.new("RGBA", img.size, (255, 255, 255, 0))
        no_bg_im.paste(img, mask=pil_im)
        return no_bg_im

    def _preprocess_image(self, im: np.ndarray, model_input_size: list) -> torch.Tensor: 
        if len(im.shape) == 0:
            raise Exception("Cannot convert image to numpy array") 
        if len(im.shape) < 3:
            im = im[:, :, np.newaxis]

        im_tensor = torch.tensor(im, dtype=torch.float32).permute(2, 0, 1)
        im_tensor = F.interpolate(
            torch.unsqueeze(im_tensor, 0), size=model_input_size, mode="bilinear"
        )
        image = torch.divide(im_tensor, 255.0)
        image = normalize(image, [0.5, 0.5, 0.5], [1.0, 1.0, 1.0])
        return image

    def _postprocess_image(self, result: torch.Tensor, im_size: list) -> np.ndarray:
        result = torch.squeeze(F.interpolate(result, size=im_size, mode="bilinear"), 0)
        ma = torch.max(result)
        mi = torch.min(result)
        result = (result - mi) / (ma - mi)

        im_array = (result * 255).permute(1, 2, 0).cpu().data.numpy().astype(np.uint8)
        im_array = np.squeeze(im_array)
        return im_array
