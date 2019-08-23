import { BetType } from '../types/Bet'
import { ActionType } from '../types/Action'
import DefaultBetState from '../store/defaultBetState'

const BetStoreReducers = (state: BetType[] = DefaultBetState, action: ActionType) => {

    switch (action.type) {
        case 'SET_BETS':
            return {...state,
                bets: {

            }
        }
        case 'DELETE_BET':
            return {...state,
                bets: {

            }
        }
        case 'CREATE_BET':
            return {...state,
                bets: {

            }
        }
        case 'EDIT_BET':
            return {...state,
                bets: {

            }
        }
    }


}
export default BetStoreReducers