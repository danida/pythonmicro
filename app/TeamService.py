import requests
from app.models import Team



class TeamService(object):
    def __init__(self):
        pass
    def read_teams(self) -> tuple:

        return   [row.as_dict() for row in Team.query.all()], 200