import { FixtureType } from '../types/Fixture'
import { ActionType } from '../types/Action'
import DefaultFixtureState from '../store/defaultFixtureState'

const FixtureStoreReducers = (state: FixtureType[] = DefaultFixtureState, action: ActionType) => {

    switch (action.type) {
        case 'SET_FIXTURES':
            return {
                ...state,
                fixtures: {

                }
            }
        case 'DELETE_FIXTURE':
            return {
                ...state,
                fixtures: {

                }
            }
        case 'CREATE_FIXTURE':
            return {
                ...state,
                fixtures: {

                }
            }
        case 'EDIT_FIXTURE':
            return {
                ...state,
                fixtures: {

                }
            }
    }


}
export default FixtureStoreReducers