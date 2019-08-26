import Axios from "axios"
import config from "../../config"


export function loadFixtures (){

    return (dispatch) =>{
        return Axios.get(config.apiendpoint+"fixtures").then((res)=>
        {
            dispatch(
                {
                    type:"SET_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    }
}

export function saveFixture (fixture){

    return (dispatch) =>{
        return Axios.post(config.apiendpoint+"/fixture/",{
            fixture
        }).then((res)=>{
            dispatch(
                {
                    type:"CREATE_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    }
}

export function deleteFixture (fixture_id){

    return (dispatch) =>{
        return Axios.delete(config.apiendpoint+"/fixture/"+fixture_id).then((res)=>{
            dispatch(
                {
                    type:"DELETE_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    }
}

export function editFixture(fixture_id,fixture){

    return (dispatch) =>{
        return Axios.put(config.apiendpoint+"/fixture/"+fixture_id,{
            fixture
        }).then((res)=>{
            dispatch(
                {
                    type:"EDIT_FIXTURES",
                    fixtures:res.data
                }
            )
        })
    }
}