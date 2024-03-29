import { BetType } from '../types/Bet'
import { ActionType } from '../types/Action'
import DefaultBetState from '../store/defaultBetState'

const BetStoreReducers = (state: BetType[] = DefaultBetState, action: ActionType) => {
    let data = action.data

    switch (action.type) {
        case 'SET_BETS':
            return {...state,
            
                    ...data
            
        }
        case 'DELETE_BET':
            return {...state,
                    ...data
            
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
        default: 
            return {...state,
            } 
    }


}
export default BetStoreReducers