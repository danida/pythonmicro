import Axios from "axios"
import config from "../../config"
import store from "../store/Store"
import teamType from "../types/Team"

export function loadTeams() {

    Axios.get(config.apiendpoint + "teams/").then((res) => {

        store.dispatch(
            {
                type: "SET_TEAMS",
                data: res.data
            }
        )
    }).catch((e) => {
        console.log(e)
    })

}

export function saveTeam(team: teamType) {

    Axios.post(config.apiendpoint + "team", {
        team
    }).then((res) => {
        store.dispatch(
            {
                type: "CREATE_TEAM",
                data: res.data
            }
        )

    }).catch((e) => {
        console.log(e)
    })

}

export function deleteTeam(team_id: number) {

    Axios.delete(config.apiendpoint + "/" + team_id).then((res) => {
            store.dispatch(
                {
                    type: "DELETE_TEAM",
                    data: res.data
                }
            )
        }).catch((e)=>{
            console.log(e)
        })
    
}

export function editTeam(team_id: number, team: teamType) {

  Axios.put(config.apiendpoint + "/" + team_id, {
            team
        }).then((res) => {
            store.dispatch(
                {
                    type: "EDIT_TEAM",
                    data: res.data
                }
            )
        }).catch((e)=>{
            console.log(e)
        })
    
}