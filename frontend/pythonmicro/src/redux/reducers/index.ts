import { combineReducers } from "redux"
import BetStoreReducers from "./betReducer";
import FixtureStoreReducers from "./fixtureReducer";
import TeamStoreReducers from "./teamReducer";

const combinedReducer = combineReducers({
    teams: TeamStoreReducers,
    bets:BetStoreReducers,
    fixtures:FixtureStoreReducers
    
})
 export default combinedReducer