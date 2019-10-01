import Axios from "axios"
import config from "../../config"
import { BetType } from "../types/Bet";
import * from 'redux/store'
import store from "../store/Store"


export function loadBets (){

   Axios.get(config.apiendpoint+"bets").then((res)=>
        {

            store.dispatch(
                {
                    type:"SET_BETS",
                    data:res.data
                }
            )
        }).catch((e)=>{
            console.log(e)
        })
    
}

export function saveBet (bet:BetType){
    let fixture : number = bet.fixture
    let odds : number = bet.odds
    Axios.post(config.apiendpoint+"bet",
            {
                odds:odds,
                fixture:fixture,
                win:bet.win,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((res)=>{
            store.dispatch(
                {
                    type:"CREATE_BET",
                    bets:res.data
                }
            )
        }).catch((e)=>{
            console.log(e)
        })
    
}

export function deleteBet (bet_id:number){

    Axios.delete(config.apiendpoint+"bet/"+bet_id).then((res)=>{
            store.dispatch(
                {
                    type:"DELETE_BET",
                    bets:res.data
                }
            )
        })
    
}

export function editBet(bet_id:number,bet:BetType){
    let fixture : number = bet.fixture

    Axios.put(config.apiendpoint+"bet/edit/"+bet_id,  {
        odds:bet.odds,
        fixture:fixture,
        win:bet.win,
    }).then((res)=>{
            store.dispatch(
                {
                    type:"EDIT_BET",
                    bets:res.data
                }
            )
        })
    
}