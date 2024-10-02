from flask import Blueprint, request, jsonify
from PIL import Image
import base64
from io import BytesIO

from .RemoveBackgroundService import RemoveBackgroundService
from .ObjectDetectionService import ObjectDetectionService

"""
AIController: Exposing AI Service through APIs
"""
ai = Blueprint("ai", __name__)


@ai.route("/api/RemoveBackground/generate", methods=["POST"])
def remove_background():
    try:
        data = request.get_json()
        if "image" not in data:
            raise ValueError("Missing required properties: image")
        image_base64 = data.get("image")

        try:
            # Decode & verify image
            image_data = base64.b64decode(image_base64)
            img = Image.open(BytesIO(image_data))
            try:
                img.verify()
            except Exception as e:
                raise ValueError(f"Invalid image: {e}.")
            # Reopen the file after verification
            img = Image.open(BytesIO(image_data))

            result_image = RemoveBackgroundService().remove_background_img(img)

            # Encode and return image
            result = result_image
            buffered = BytesIO()
            result.save(buffered, format="PNG")
            result = base64.b64encode(buffered.getvalue()).decode("utf-8")
            return jsonify({"success": True, "result": result}), 200
        except Exception as e:
            raise ValueError(f"Error decoding image: {e}.")

    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500


@ai.route("/api/ObjectDetection/heartMonitor", methods=["POST"])
def heart_monitor():
    try:
        data = request.get_json()
        if "image" not in data:
            raise ValueError("Missing required properties: image")
        image_base64 = data.get("image")

        try:
            # Decode & verify image
            image_data = base64.b64decode(image_base64)
            img = Image.open(BytesIO(image_data))
            try:
                img.verify()
            except Exception as e:
                raise ValueError(f"Invalid image: {e}.")
            # Reopen the file after verification
            img = Image.open(BytesIO(image_data))

            result = ObjectDetectionService().get_heart_monitor_data(img)

            return (
                jsonify(
                    {
                        "success": True,
                        "result": {
                            "systolic": result[0],
                            "diastolic": result[1],
                            "pulse": result[2],
                        },
                    }
                ),
                200,
            )
        except Exception as e:
            raise ValueError(f"Error getting heart monitor data: {e}.")

    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500
