import { FixtureType } from '../types/Fixture'
import { ActionType } from '../types/Action'
import DefaultFixtureState from '../store/defaultFixtureState'
import produce from 'immer'

const FixtureStoreReducers = (state: FixtureType[] = DefaultFixtureState, action: ActionType) => {
    let data = action.data
    console.log(action)
    
    let type = action.type
     return produce(state, draft => {
        if (!draft) {
            return {...state}
        }
        switch (type) {
            case 'SET_FIXTURES':
                action.data.forEach((fixture: any) => {
                    draft[fixture['id']] = fixture
                });
                break;
            case 'DELETE_FIXTURE':
                console.log('delete')

                delete draft[action.data]
                break;


            case 'CREATE_FIXTURE':
                console.log("create")
                break;

            case 'EDIT_FIXTURE':
                console.log("edit")

                break;


            }
    })
}
export default FixtureStoreReducers