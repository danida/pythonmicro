import { TeamType } from '../types/Team'
import { ActionType } from '../types/Action'
import DefaultTeamState from '../store/defaultTeamState'

const TeamStoreReducers = (state: TeamType[] = DefaultTeamState, action: ActionType) => {
    let data = action.data

    switch (action.type) {
        case 'SET_TEAMS':
            return {
                ...state,
                teams: {
                    data
                }
            }
        case 'DELETE_TEAM':
            return {
                ...state,
                teams: {
                    data

                }
            }
        case 'CREATE_TEAM':
            return {
                ...state,
                teams: {
                    data
                }
            }
        case 'EDIT_TEAM':
            return {
                ...state,
                teams: {
                    data
                }
            }
        default:
            return {...state} 
    }


}
export default TeamStoreReducers