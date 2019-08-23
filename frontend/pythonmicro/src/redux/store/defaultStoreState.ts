import { Teams } from './defaultTeamState'
import { Fixtures } from './defaultFixtureState'
import { Bets } from './defaultBetState'

export default Object.assign({},
    { teams: Teams },
    { fixtures: Fixtures },
    { bets: Bets },
)