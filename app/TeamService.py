import requests
from app.models import Team
from app import db


class TeamService(object):

    def __init__(self):
        pass

    def read_teams(self) -> tuple:
        return [row.as_dict() for row in Team.query.all()], 200

    def createTeam(self, t: Team):
        db.session.add(t)
        db.session.commit()
        return 200
