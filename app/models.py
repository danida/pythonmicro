from app import db


class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(128))
    league= db.Column(db.String(128))

class Fixture(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    teamHome =db.Column(db.Integer,db.ForeignKey('team.id'))
    teamAway =db.Column(db.Integer,db.ForeignKey('team.id'))
    date = db.Column(db.DateTime,nullable=False)

class Bet(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    odds=db.Column(db.Float,primary_key=True)
    fixture=db.Column(db.Integer,db.ForeignKey('fixture.id'))
    win=db.Column(db.Boolean)
