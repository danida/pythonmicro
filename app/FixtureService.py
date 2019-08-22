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

    def editFixture(self, fixture: Fixture,fixture_id):
        res = {k: v for k, v in fixture.as_dict().items() if v is not None}
        db.session.query(Fixture).filter_by(id=fixture_id).update(res)
        db.session.commit()
        return 200

    def deleteBet (self, fixture_id):
        db.session.query(Fixture).filter_by(id=fixture_id).delete()
        db.session.commit()
        return 200