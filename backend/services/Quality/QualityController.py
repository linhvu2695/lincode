from flask import jsonify, Blueprint

quality = Blueprint("quality", __name__)

# Ping
@quality.route("/api/ping",methods=["GET"])
def ping():
    result = {"message": "pong"}
    return jsonify(result)