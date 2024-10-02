from ultralytics import YOLO
from PIL import Image
import numpy as np

"""
ObjectDetectionService: service for Object Detection
"""

LCD_DIGITS_CHECKPOINT_PATH = "instance/data/models/lcd_digits.pt"

class ObjectDetectionService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(ObjectDetectionService, cls).__new__(cls)
            cls._instance.lcd_digits_model = None
        return cls._instance
    
    def get_heart_monitor_data(self, img: Image) -> tuple[int, int, int]:
        img_np = np.array(img)
        img_np = img_np[:, :, :3]

        if self.lcd_digits_model == None:
            self.lcd_digits_model = YOLO(LCD_DIGITS_CHECKPOINT_PATH)

        results = self.lcd_digits_model(img_np)[0]
        print(results.boxes)
        boxes = []
        for box in results.boxes:
            xyxy = box.xyxy.cpu().numpy()[0]
            x1, y1, x2, y2 = np.array(xyxy, dtype=np.int32)
            cls = int(box.cls.cpu().numpy()[0])
            conf = box.conf.cpu().numpy()[0]
            boxes.append((cls, conf, x1, y1, x2, y2))
            print(f"Class: {cls}, Confidence = {conf * 100 : 2f}%, Coordinates = {(x1, y1, x2, y2)}")

        data = self._extract_heart_monitor_data(boxes)
        return data
    
    def _extract_heart_monitor_data(self, boxes: list[tuple[int, float, int, int, int, int]]) -> tuple[int, int, int]:
        """
        Extract the 3 metrics of Systolic / Diastolic / Pulse 
        from the list of digits and their coordinates
        """
        sorted_vertical = sorted(boxes, key=lambda item: item[3])
        systolic = int(''.join([str(element[0]) for element in sorted(sorted_vertical[:3], key=lambda item: item[2])]))
        diastolic = int(''.join([str(element[0]) for element in sorted(sorted_vertical[3:5], key=lambda item: item[2])]))
        pulse = int(''.join([str(element[0]) for element in sorted(sorted_vertical[5:7], key=lambda item: item[2])]))

        return (systolic, diastolic, pulse)