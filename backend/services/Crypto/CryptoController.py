from flask import Blueprint, jsonify, request

from .CryptoService import CryptoService

"""
CryptoController: Exposing Crypto through APIs
"""
crypto = Blueprint("crypto", __name__)

@crypto.route("/api/Crypto/data", methods=["GET"])
def get_crypto_data():
    """
    Get data for crypto currencies
    """
    try:
        if 'ids' not in request.args:
            raise ValueError("Missing required properties: ids")
        ids_arg = request.args.get('ids')
        ids = ids_arg.split(',')

        result = CryptoService().get_crypto_data(ids)
        return jsonify({"success": True, "result": result}), 200
    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500