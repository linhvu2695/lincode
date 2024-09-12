from flask import json
import random
from typing import Dict

"""
CountriesService: service for countries data
"""

COUNTRIES_JSON_PATH = "instance/data/Countries.json"

class CountriesService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(CountriesService, cls).__new__(cls)
            with open(COUNTRIES_JSON_PATH, 'r') as file:
                cls._instance.repo = json.load(file)["data"]
        return cls._instance
    
    def generate_guess_flag(self) -> Dict[str, str]:
        selected_country = random.choice(self.repo)
        other_countries = [country['name'] 
                           for country in self.repo 
                           if country['name'] != selected_country["name"]]
        options = random.sample(other_countries, 3) + [selected_country["name"]]
        random.shuffle(options)

        return {
            "flag": selected_country["href"]["flag"],
            "answer": selected_country["name"],
            "options": options
        }

