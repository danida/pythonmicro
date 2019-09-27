import * as React from "react"
import Switch from "react-switch";

export type Props = {
    bet: any,
    onEditBet:(bet:any)=>void
}

export type State = {
    showDetails: boolean,
    yesOrNo:boolean,

}

class Bet extends React.Component<Props, State> {

    state: State = {
        showDetails: false,
        yesOrNo: false,
    }


    constructor(props: Props) {
        super(props)
    }

    handleChange = (checked:boolean)=>{
        this.setState({
            yesOrNo:checked,
        })
    }


    details = () => {
        if (this.state.showDetails){
        let bet = this.props.bet
        bet["win"] = this.state.yesOrNo
        return <div className="betDetailsModal">

            Did it win?
            <Switch onChange={this.handleChange} checked={this.state.yesOrNo}></Switch>
            <button onClick={(event)=>{event.stopPropagation();this.props.onEditBet(bet)}}>Ok</button>

            <button onClick={(event)=>{event.stopPropagation();this.onClickClose()}}>Close</button>
        </div>
        }
        else{
            return 
        }
    }
    onClickOpen = () =>{
        this.setState({
            showDetails:true
        })
    }
    onClickClose = () =>{
        this.setState({
            showDetails:false}
        );

    }
    onClickSave = () =>{

    }

    render() {
        return (<div className={'bet'} onClick={this.onClickOpen}>
            <span>{this.props.bet['fixture']}</span>
            <span>{this.props.bet['odds']}</span>
            <span>{this.props.bet['win'] ? 'won' : 'lose'}</span>
            {
                    this.details()
            }
            </div>
            )
    }
}

export default Bet;