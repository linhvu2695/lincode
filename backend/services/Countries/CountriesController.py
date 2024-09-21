from flask import Blueprint, jsonify, request

from .CountriesService import CountriesService

"""
CountriesController: Exposing Countries through APIs
"""
countries = Blueprint("countries", __name__)

@countries.route("/api/Countries/balls", methods=["GET"])
def get_balls():
    """
    Get data to represent all contries balls: name + flagUrl
    """
    try:
        result = CountriesService().get_balls_data()
        return jsonify({"success": True, "result": result}), 200
    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500
    
@countries.route("/api/Countries/info", methods=["GET"])
def get_country_info():
    """
    Get data of a country
    """
    try:
        if "country" not in request.args:
            raise ValueError("Country name is required")
        country = request.args.get("country")

        result = CountriesService().get_country_info(country)
        return jsonify({"success": True, "result": result}), 200
    except ValueError as err:
        return jsonify({"error": str(err)}), 400
    except Exception as err:
        return jsonify({"error": str(err)}), 500
    
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
