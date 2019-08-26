import { BetType } from '../types/Bet'
import { ActionType } from '../types/Action'
import DefaultBetState from '../store/defaultBetState'

const BetStoreReducers = (state: BetType[] = DefaultBetState, action: ActionType) => {
    let data = action.data
    switch (action.type) {
        case 'SET_BETS':
            return {...state,
                bets: {
                    data
            }
        }
        case 'DELETE_BET':
            return {...state,
                bets: {
                    data
            }
        }
        case 'CREATE_BET':
            return {...state,
                bets: {
                    data
            }
        }
        case 'EDIT_BET':
            return {...state,
                bets: {
                    data
            }
        }
    }


}
export default BetStoreReducers