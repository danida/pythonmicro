import requests
from app import db

from app.models import Bet



class Betservice(object):
    def __init__(self):
        pass
    def read_bets(self) -> tuple:
        return Bet.query.all(), 200
    def create_bet(self, u):
        return db.add(u), 200