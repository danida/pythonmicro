import requests
from app import db
from app.models import Team




class TeamService(object):
    def __init__(self):
        pass
    def read_teams(self) -> tuple:
        return Team.query.all(), 200