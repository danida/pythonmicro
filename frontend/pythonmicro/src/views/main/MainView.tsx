
import * as React from 'react'
import {connect} from "react-redux";
import * as Lodash from 'lodash'
import * as teamActions from '../../redux/actions/team'

type Props = {
    //loadTeams:()=>void,
}

type State = {
    bets: any,
}




class MainView extends React.Component<Props, State>{

    componentDidMount() {
        //console.log(this.props)
        //actions.default.betAction.loadBets()
        
       // console.log(store.getState())
    }

    constructor(props:Props) {
        super(props);
    }
    render() {
        return Lodash.range(0, 1, 1).map((num:number) => {
            return (
                <button onClick={teamActions.loadTeams}>set teams</button>
            )
        })
    }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
    data,
    isLoadingData
  });



export default connect (mapStateToProps)(MainView)