import os

from app import create_app
from flask_injector import FlaskInjector

config_name = os.environ('FLASK_CONFIG')
app = create_app(config_name)

if __name__ == '__main__':

#    FlaskInjector(app=app.app)
    app.run()