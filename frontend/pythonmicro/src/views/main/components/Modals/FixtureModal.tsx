import * as React from 'react'
import Button from 'react-bootstrap/Button';
import Select from 'react-select';

export type Props = {
    visible: boolean,
    teams: Array<any>,
    onAddClick: (fixture: any) => void,

}

export type State = {
    homeTeam: number,
    awayTeam: number,
}



class FixtureModal extends React.Component<Props, State> {
    state: State = {
        homeTeam: 0,
        awayTeam: 0,

    }

    addClick = () => {
        let fixture = {
            teamHome: this.state.homeTeam,
            teamAway: this.state.awayTeam,
        }
        this.props.onAddClick(fixture)

    }
    handleChangeHome = (event:any)  => {
        this.setState({ homeTeam: event.value });
    }
    handleChangeAway = (event:any) => {
        this.setState({ awayTeam: event.value });
    }

    render() {
        console.log(this.props)
        let className = this.props.visible ? 'fixtureModal fixtureModal--visible' : 'fixtureModal--hidden'
        console.log(this.state)
        let teams = Object.keys(this.props.teams).map((team) => {
            return { label: this.props.teams[team]['name'], value: this.props.teams[team]['id'] }
        })

        return (<div className={className}>
            <Select id="teamHome" options={teams} onChange={this.handleChangeHome} ></Select>
            <Select id="teamAway" options={teams} onChange={this.handleChangeAway}></Select>
            <Button onClick={this.addClick}>Adding fixture</Button>
        </div>);
    }
}

export default FixtureModal;