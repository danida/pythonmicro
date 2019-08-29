import * as React from 'react'
import Button from 'react-bootstrap/Button';


export type Props = {
    visible: boolean,
    onAddClick: (team: any) => void,
}

export type State = {
    name: string,
    league: string,
}



class TeamModal extends React.Component<Props, State> {
    state: State = {
        name: "",
        league: "",

    }


    addClick = () => {
        let team = {
            name: this.state.name,
            league: this.state.league,
        }
        this.props.onAddClick(team)
    }

    handleChangeName = (event: any) => {
        this.setState({ name: event.target.value });
    }

    handleChangeLeague = (event: any) => {
        this.setState({ league: event.target.value });
    }

    render() {
        let className = this.props.visible ? 'teamModal teamModal--visible' : 'teamModal--hidden'
        return (<form className={className}>
            <label id="labelForName"></label>
            <input id="name" value={this.state.name} onChange={this.handleChangeName}></input>
            <label id="labelForLeague"></label>

            <input id="league" value={this.state.league} onChange={this.handleChangeLeague}></input>

            <Button onClick={this.addClick}>Adding team</Button>
        </form>);
    }
}

export default TeamModal;