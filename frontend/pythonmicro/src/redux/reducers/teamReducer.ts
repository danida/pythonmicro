import { TeamType } from '../types/Team'
import { ActionType } from '../types/Action'
import DefaultTeamState from '../store/defaultTeamState'

const TeamStoreReducers = (state: TeamType[] = DefaultTeamState, action: ActionType) => {

    switch (action.type) {
        case 'SET_TEAMS':
            return {...state,
                teams: {

            }
        }
        case 'DELETE_TEAM':
            return {...state,
                teams: {

            }
        }
        case 'CREATE_TEAM':
            return {...state,
                teams: {

            }
        }
        case 'EDIT_TEAM':
            return {...state,
                teams: {

            }
        }
    }


}
export default TeamStoreReducers