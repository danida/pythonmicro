import { FixtureType } from '../types/Fixture'
import { ActionType } from '../types/Action'
import DefaultFixtureState from '../store/defaultFixtureState'

const FixtureStoreReducers = (state: FixtureType[] = DefaultFixtureState, action: ActionType) => {
    let data = action.data

    switch (action.type) {
        case 'SET_FIXTURES':
            return {
                ...state,
                ...data
                
            }
        case 'DELETE_FIXTURE':
            return {
                ...state,
                fixtures: {
                    data
                }
            }
        case 'CREATE_FIXTURE':
            return {
                ...state,
                fixtures: {
                    data
                }
            }
        case 'EDIT_FIXTURE':
            return {
                ...state,
                fixtures: {
                    data
                }
            }
        default:
            return {...state} 
    }


}
export default FixtureStoreReducers