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

    def editFixture(self, team: Team,team_id):
        res = {k: v for k, v in team.as_dict().items() if v is not None}
        db.session.query(Team).filter_by(id=team_id).update(res)
        db.session.commit()
        return 200

    def deleteTeam (self, team_id):
        db.session.query(Team).filter_by(id=team_id).delete()
        db.session.commit()
        return 200
