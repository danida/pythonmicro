
import * as React from 'react'
import {connect} from "react-redux";
import * as betActions from '../../redux/actions/bet'
import * as teamActions from '../../redux/actions/team'
import * as fixtureActions from '../../redux/actions/fixture'


import Lists from './components/Lists'
import "../../assets/bet.scss";
import BetModal from './components/Modals/BetModal';
import Button from 'react-bootstrap/Button';
import FixtureModal from './components/Modals/FixtureModal';
import TeamModal from './components/Modals/TeamModal';
import Store from '../../redux/store/Store';


type Props = {
    teams:Array<Object>|[],
    bets:Array<Object>|[],
    fixtures:Array<Object>|[],
}

type State = {
    modalVisible:boolean,
    modalFixtureVisibility:boolean,
    modalTeamModal:boolean,
}




class MainView extends React.Component<Props, State>{
     static defaultProps: Props = {
        teams:[],
        bets:[],
        fixtures:[],
    }

     state: State = {
       modalVisible:false,
       modalFixtureVisibility:false,
       modalTeamModal:false,
    }   

    componentDidMount() {
        //console.log(this.props)
        //actions.default.betAction.loadBets()
        betActions.loadBets()
        teamActions.loadTeams()
        fixtureActions.loadFixtures()
       // console.log(store.getState())
    }

    constructor(props:Props) {
        super(props);

    }


    ModalOpen= ()=>{
        let visibility = !this.state.modalVisible
        this.setState({
            modalVisible:visibility,
        })
    }

    ModalFixtureOpen= ()=>{
        let visibility = !this.state.modalFixtureVisibility
        this.setState({
            modalFixtureVisibility:visibility,
        })
    }

    ModalTeamOpen= ()=>{
        let visibility = !this.state.modalTeamModal
        this.setState({
            modalTeamModal:visibility,
        })
    }

    AddingTeam = (team:any)=>{
        teamActions.saveTeam(team)
        betActions.loadBets()
        teamActions.loadTeams()
        fixtureActions.loadFixtures()
    }
    AddingFixture = (fixture:any)=>{
        fixtureActions.saveFixture(fixture)
        betActions.loadBets()
        teamActions.loadTeams()
        fixtureActions.loadFixtures()
    }
    AddingBet = (bet:any)=>{
        betActions.saveBet(bet)
        betActions.loadBets()
        teamActions.loadTeams()
        fixtureActions.loadFixtures()
    }

    
    render() {
        if (this.state===null){
            return <div>NULL</div>
        }
            return (<div>
                <Lists {...{bets:this.props.bets}}></Lists>
                <Button onClick={this.ModalOpen}>Add Bet</Button>
                <Button onClick={this.ModalFixtureOpen}>Add Fixture</Button>
                <Button onClick={this.ModalTeamOpen}>Add Team</Button>

                <BetModal {...{onAddClick:this.AddingBet,visible:this.state.modalVisible,fixtures:Store.getState()['fixtures'],teams:Store.getState()['teams']}}></BetModal>
                <FixtureModal {...{onAddClick:this.AddingFixture,visible:this.state.modalFixtureVisibility, teams:Store.getState()['teams']}}></FixtureModal>
                <TeamModal  {...{visible:this.state.modalTeamModal,onAddClick:this.AddingTeam}}></TeamModal>
                </div>
            )
        
    }
}

const mapStateToProps = (storeState:any) => {
    return {
        teams:storeState['teams'],
        bets:storeState['bets'],
        fixtures:storeState['fixtures']
    }

  };



export default connect (mapStateToProps)(MainView)