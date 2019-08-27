import Axios from "axios"
import config from "../../config"
import store from "../store/Store"
import {FixtureType} from "../types/Fixture"


export function loadFixtures (){

    Axios.get(config.apiendpoint+"fixtures").then((res)=>
        {
            store.dispatch(
                {
                    type:"SET_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    
}

export function saveFixture (fixture:FixtureType){

   Axios.post(config.apiendpoint+"/fixture/",{
            fixture
        }).then((res)=>{
            store.dispatch(
                {
                    type:"CREATE_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    
}

export function deleteFixture (fixture_id:number){

    Axios.delete(config.apiendpoint+"/fixture/"+fixture_id).then((res)=>{
        store.dispatch(
                {
                    type:"DELETE_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    
}

export function editFixture(fixture_id:number,fixture:FixtureType){

    Axios.put(config.apiendpoint+"/fixture/"+fixture_id,{
            fixture
        }).then((res)=>{
            store.dispatch(
                {
                    type:"EDIT_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    
}