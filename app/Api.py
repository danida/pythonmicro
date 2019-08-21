from flask_injector import inject
from . import Betservice
from . import TeamService
from .models import Bet


@inject
def read_bets(data_provider: Betservice) -> list:
    return data_provider.read_bets()


@inject
def create_bet(data_provider: Betservice, bet: Bet):
    print(bet)
    bet = Bet(**bet)
    print (bet)
    data_provider.create_bet(bet)


@inject
def read_teams(data_provider: TeamService) -> list:
    return data_provider.read_teams()