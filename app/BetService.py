import requests
from app import db

from app.models import Bet
from sqlalchemy import update


class Betservice(object):
    def __init__(self):
        pass

    def read_bets (self) -> tuple:
        return Bet.query.all(), 200

    def createBet (self, u: Bet):
        db.session.add(u)
        db.session.commit()
        return 200

    def editBet(self, bet: Bet,bet_id):
        res = {k: v for k, v in bet.as_dict().items() if v is not None}
        db.session.query(Bet).filter_by(id=bet_id).update(res)
        db.session.commit()
        return 200

    def deleteBet (self, bet_id):
        db.session.query(Bet).filter_by(id=bet_id).delete()
        db.session.commit()
        return 200

