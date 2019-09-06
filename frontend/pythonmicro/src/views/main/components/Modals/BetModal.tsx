import * as React from 'react'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';


export type Props = {
    visible:boolean,
    fixtures:Array<any>,
    teams:Array<any>,
    onAddClick:(bet:any)=>void,
}
 
export type State =  {
    fixture:number,
    odds:number,
}


 
class BetModal extends React.Component<Props, State> {

    state: State = {
        fixture:0,
        odds:3,
    }

    findTeam = (id:number)=>{

        let filtered = Object.keys(this.props.teams).filter((index)=>{
        
                return id==this.props.teams[index]['id']
            
        })
        return this.props.teams[filtered[0]];
    }


    handleChangeFixture = (event:any)  => {


        this.setState({ fixture: parseInt(event.value) });
    }


    handleChangeOdds = (event:any)  => {


        this.setState({ odds: event.target.value });
    }

    addingBet=()=>{
        let bet = {
            fixture: this.state.fixture,
            odds: this.state.odds,
            win:false,
        }
        this.props.onAddClick(bet)
    }


    render() { 

        let fixtures = Object.keys(this.props.fixtures).map((fixture)=>{
            return {label:this.findTeam(this.props.fixtures[fixture]['teamHome'])['name']+'-'+this.findTeam(this.props.fixtures[fixture]['teamAway'])['name'], value:fixture}
        })
        let className = this.props.visible?'betModal betModal--visible':'betModal--hidden'
        return ( <div className={className}>
                <input id="odds" value={this.state.odds} onChange={this.handleChangeOdds}></input>
                <Select id="fixture" onChange={this.handleChangeFixture} options={fixtures}></Select>
                <Button onClick={this.addingBet}>Adding bet</Button>
        </div> );
    }
}
 
export default BetModal;