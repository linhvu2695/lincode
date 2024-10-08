# TODO: UPDATE THIS FILE FOR DEPLOYMENT
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

def register_endpoints(app: Flask):
    from services.Quality.QualityController import quality
    from services.Countries.CountriesController import countries
    from services.AI.AIController import ai
    from services.Crypto.CryptoController import crypto

    for blueprint in [quality, countries, ai, crypto]:
        app.register_blueprint(blueprint=blueprint, url_prefix="/")

app = Flask(__name__)

# We can comment this CORS config for the production because we are running the frontend and backend on the same server
CORS(app) 

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///sql.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

frontend_folder = os.path.join(os.getcwd(),"..","frontend")
dist_folder = os.path.join(frontend_folder,"dist")

# Server static files from the "dist" folder under the "frontend" directory
@app.route("/",defaults={"filename":""})
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename = "index.html"
    return send_from_directory(dist_folder,filename)

register_endpoints(app)

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)