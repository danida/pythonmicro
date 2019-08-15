from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import connexion
from connexion.resolver import RestyResolver

db = SQLAlchemy()


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
 #   app.config.from_object(app_config[config_name])
    app.config.from_pyfile('../config.py')
    # db variable initialization
    app = connexion.App(__name__, 9090, specification_dir='../swagger/')
    app.add_api('rest_api.yaml', resolver=RestyResolver('api'))
    db.init_app(app)
    with app.app_context():
        from . import models
        db.create_all()
        db.session.commit()



    return app

