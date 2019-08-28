
import * as React from 'react'
import {connect} from "react-redux";
import * as betActions from '../../redux/actions/bet'
import Lists from './components/Lists'
import "../../assets/bet.scss";
import BetModal from './components/Modals/BetModal';
import Button from 'react-bootstrap/Button';


type Props = {
    teams:Array<Object>|[],
    bets:Array<Object>|[],
    fixtures:Array<Object>|[],
}

type State = {
    modalVisible:boolean,
}




class MainView extends React.Component<Props, State>{
     static defaultProps: Props = {
        teams:[],
        bets:[],
        fixtures:[],
    }

     state: State = {
       modalVisible:false,
    }   

    componentDidMount() {
        //console.log(this.props)
        //actions.default.betAction.loadBets()
        betActions.loadBets()
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
    
    render() {
        console.log(this.state)
        if (this.state===null){
            return <div>NULL</div>
        }
            return (<div>
                <Lists {...{bets:this.props.bets}}></Lists>
                <Button onClick={this.ModalOpen}>Add Bet</Button>
                <BetModal {...{visible:this.state.modalVisible}}></BetModal>
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