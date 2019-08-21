from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import connexion
from connexion.resolver import RestyResolver
from flask_injector import FlaskInjector
db = SQLAlchemy()

from app.BetService import Betservice
from app.TeamService import TeamService
from app.FixtureService import FixtureService
from injector import Binder

def configure(binder: Binder) -> Binder:
    binder.bind( Betservice,
        Betservice())
    binder.bind( TeamService,
                 TeamService())
    binder.bind(FixtureService,
                FixtureService())



def create_app():
    #app = Flask(__name__, instance_relative_config=True)

    app = connexion.FlaskApp(__name__, port=9090, specification_dir='../swagger')
    app.add_api('rest_api.yaml', resolver=RestyResolver('api'))
    #   app.config.from_object(app_config[config_name])
    app.app.config.from_pyfile('../config.py')
    FlaskInjector(app=app.app,modules=[configure])

    db.init_app(app.app)
    with app.app.app_context():
        from . import models
        db.create_all()
        db.session.commit()

    return app

