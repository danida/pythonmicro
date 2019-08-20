from flask_injector import inject
from . import Betservice
from . import TeamService


@inject
def read_bets(data_provider:Betservice) -> list:
    return data_provider.read_bets()
@inject
def create_bet(data_provider:Betservice):
    return data_provider.create_bet()


@inject
def read_teams(data_provider:TeamService) -> list:
    return data_provider.read_teams()