import Axios from "axios"
import config from "../../config"


export function loadBets (){

    return (dispatch) =>{
        return Axios.get(config.apiendpoint+"bets").then((res)=>
        {
            dispatch(
                {
                    type:"SET_BETS",
                    bets:res.data
                }
            )
        })
    }
}

export function saveBet (bet){

    return (dispatch) =>{
        return Axios.post(config.apiendpoint+"/bet/",{
            bet
        }).then((res)=>{
            dispatch(
                {
                    type:"CREATE_BET",
                    bets:res.data
                }
            )
        })
    }
}

export function deleteBet (bet_id){

    return (dispatch) =>{
        return Axios.delete(config.apiendpoint+"/bet/"+bet_id).then((res)=>{
            dispatch(
                {
                    type:"DELETE_BET",
                    bets:res.data
                }
            )
        })
    }
}

export function editBet(bet_id,bet){

    return (dispatch) =>{
        return Axios.put(config.apiendpoint+"/bet/"+bet_id,{
            bet
        }).then((res)=>{
            dispatch(
                {
                    type:"EDIT_BET",
                    bets:res.data
                }
            )
        })
    }
}