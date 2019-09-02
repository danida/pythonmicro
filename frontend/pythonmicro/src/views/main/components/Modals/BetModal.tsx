import * as React from 'react'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';


export type Props = {
    visible:boolean,
    fixtures:Array<any>,
    teams:Array<any>,
}
 
export type State =  {
    
}


 
class BetModal extends React.Component<Props, State> {

    findTeam = (id:number)=>{

        let filtered = Object.keys(this.props.teams).filter((index)=>{
        
                return id==this.props.teams[index]['id']
            
        })
        return this.props.teams[filtered[0]];
    }

    render() { 

        let fixtures = Object.keys(this.props.fixtures).map((fixture)=>{
            return {label:this.findTeam(this.props.fixtures[fixture]['teamHome'])['name']+'-'+this.findTeam(this.props.fixtures[fixture]['teamAway'])['name'], value:fixture}
        })
        let className = this.props.visible?'betModal betModal--visible':'betModal--hidden'
        return ( <div className={className}>
                <input id="odds"></input>
                <Select id="fixture" options={fixtures}></Select>
                <Button>Adding bet</Button>
        </div> );
    }
}
 
export default BetModal;