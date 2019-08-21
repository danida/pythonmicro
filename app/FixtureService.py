from app import db
from .models import Fixture

class FixtureService(object):
    def __init__(self):
        pass

    def read_fixtures(self) -> tuple:
        return Fixture.query.all(), 200

    def createFixture(self, f: Fixture):
        db.session.add(f)
        db.session.commit()
        return 200