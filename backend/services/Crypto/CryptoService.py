from flask import json
import requests
from typing import Dict

"""
CryptoService: service for crypto data
"""

COINGECK_API_KEY = "CG-jGeo2rXSaxJJzgPvkbLJBS1n"

COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3/coins"
COINGECK_MARKETS_ENDPOINT = "markets"

COINGECKO_VS_CURRENCY = "vs_currency"
COINGECKO_IDS = "ids"
COINGECKO_SPARKLINE = "sparkline"

class CryptoService:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super(CryptoService, cls).__new__(cls)
        return cls._instance
    
    def get_crypto_data(self, ids: list) -> list[Dict]:
        result = {}
        if len(ids) == 0: return result
        
        currency = "usd"
        request_url = f"{COINGECKO_BASE_URL}/{COINGECK_MARKETS_ENDPOINT}?{COINGECKO_VS_CURRENCY}={currency}&{COINGECKO_IDS}={','.join(ids)}&{COINGECKO_SPARKLINE}=false"
        headers = {
            "x-cg-api-key": COINGECK_API_KEY
        }
        
        response = requests.get(request_url, headers=headers)
        if response.status_code == 200:
            result = json.loads(response.text)
        else:
            raise ValueError(f"Failed to fetch data: {response.text}")
        return result