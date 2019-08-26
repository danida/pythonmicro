import Axios from "axios"
import config from "../../config"

export function loadTeams (){

    return (dispatch) =>{
        return Axios.get(config.apiendpoint+"teams").then((res)=>
        {
            dispatch(
                {
                    type:"SET_TEAMS",
                    data:res.data
                }
            )
        })
    }
}

export function saveTeam (team){

    return (dispatch) =>{
        return Axios.post(config.apiendpoint+"team",{
            team
        }).then((res)=>{
            dispatch(
                {
                    type:"CREATE_TEAM",
                    data:res.data
                }
            )
        })
    }
}

export function deleteTeam (team_id){

    return (dispatch) =>{
        return Axios.delete(config.apiendpoint+"/"+team_id).then((res)=>{
            dispatch(
                {
                    type:"DELETE_TEAM",
                    data:res.data
                }
            )
        })
    }
}

export function editTeam (team_id,team){

    return (dispatch) =>{
        return Axios.put(config.apiendpoint+"/"+team_id,{
            team
        }).then((res)=>{
            dispatch(
                {
                    type:"EDIT_TEAM",
                    data:res.data
                }
            )
        })
    }
}