from flask_injector import inject
from . import Betservice
from . import TeamService
from . import FixtureService
from .models import Bet
from .models import Team
from .models import Fixture


@inject
def read_bets(data_provider: Betservice) -> list:
    return data_provider.read_bets()


@inject
def createBet(data_provider: Betservice, bet: Bet):
    bet = Bet(**bet)
    data_provider.createBet(bet)

@inject
def editBet(data_provider: Betservice, bet: Bet, bet_id):
    bet = Bet(**bet)
    data_provider.editBet(bet,bet_id)

@inject
def deleteBet(data_provider: Betservice, bet_id):
    data_provider.deleteBet(bet_id)


@inject
def read_teams(data_provider: TeamService) -> list:
    return data_provider.read_teams()

@inject
def createTeam(data_provider: TeamService, team: Team):
    team = Team(**team)
    data_provider.createTeam(team)

@inject
def editTeam(data_provider: TeamService, team: Team, team_id):
    team = Team(**team)
    data_provider.editTeam(team,team_id)

@inject
def deleteTeam(data_provider: TeamService, team_id):
    data_provider.deleteTeam(team_id)


@inject
def read_fixtures(data_provider: FixtureService) -> list:
    return data_provider.read_fixtures()

@inject
def createFixture(data_provider: TeamService, fixture: Fixture):
    fixture = Fixture(**fixture)
    data_provider.createFixture(fixture)

@inject
def editFixture(data_provider: FixtureService, fixture: Fixture, fixture_id):
    fixture = Fixture(**fixture)
    data_provider.editTeam(fixture,fixture_id)

@inject
def deleteFixture(data_provider: TeamService, fixture_id):
    data_provider.deleteFixture(fixture_id)
