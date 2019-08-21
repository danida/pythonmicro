from app import db


class Team(db.Model):
    __tablename__ = 'team'
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(128))
    league= db.Column(db.String(128))


    def as_dict(self):
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}


class Fixture(db.Model):
    __tablename__ = 'fixture'

    id=db.Column(db.Integer,primary_key=True)
    teamHome =db.Column(db.Integer,db.ForeignKey('team.id'))
    teamAway =db.Column(db.Integer,db.ForeignKey('team.id'))
    date = db.Column(db.DateTime,nullable=False)


class Bet(db.Model):
    __tablename__ = 'bet'

    id = db.Column(db.Integer,primary_key=True,autoincrement=True)
    odds = db.Column(db.Float)
    fixture = db.Column(db.Integer,db.ForeignKey('fixture.id'), nullable=True)
    win = db.Column(db.Boolean)



