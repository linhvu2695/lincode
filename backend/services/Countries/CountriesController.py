from flask import Blueprint, jsonify

from .CountriesService import CountriesService

"""
CountriesController: Exposing Countries through APIs
"""
countries = Blueprint("countries", __name__)

@countries.route("/api/Countries/guessFlag", methods=["GET"])
def guess_flag():
    """
    Get data for a random flag guessing question
    """
    try:
        result = CountriesService().generate_guess_flag()
        return jsonify({"success": True, "result": result}), 200
    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500
    
@countries.route("/api/Countries/guessCapital", methods=["GET"])
def guess_capital():
    """
    Get data for a random capital guessing question
    """
    try:
        result = CountriesService().generate_guess_capital()
        return jsonify({"success": True, "result": result}), 200
    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500
