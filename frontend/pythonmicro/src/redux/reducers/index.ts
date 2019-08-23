import { combineReducers } from "redux"
import teamReducer from "./teamReducer"

const combinedReducer = combineReducers({
    teams:teamReducer,
    
})
 export default combinedReducer