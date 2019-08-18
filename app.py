import os

from app import create_app
from flask_injector import FlaskInjector

#config_name = os.environ('FLASK_CONFIG')
config_name='development'
app = create_app()

if __name__ == '__main__':
    app.run()