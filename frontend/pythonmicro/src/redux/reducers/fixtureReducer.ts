import { FixtureType } from '../types/Fixture'
import { ActionType } from '../types/Action'
import DefaultFixtureState from '../store/defaultFixtureState'
import produce from 'immer'

const FixtureStoreReducers = (state: FixtureType[] = DefaultFixtureState, action: ActionType) => {
    let data = action.data
    console.log(action)
    return produce ((state, draft) => {
    switch (action.type) {
        case 'SET_FIXTURES':
            console.log('SETTINGFIXTURES')
            action.data.forEach((fixture:any) => {
                console.log("SETTINGFIXTURES"+fixture)
                draft['fixtures'][fixture['id']] = fixture
            });
            break;
        case 'DELETE_FIXTURE':
            return {
                ...state,
                fixtures: {
                    data
                }
            }
        case 'CREATE_FIXTURE':
            console.log("asdasd")
            return {
                ...state,
               
            }
        case 'EDIT_FIXTURE':
            return {
                ...state,
                fixtures: {
                    data
                }
            }
       
    }
    },state)

}
export default FixtureStoreReducers