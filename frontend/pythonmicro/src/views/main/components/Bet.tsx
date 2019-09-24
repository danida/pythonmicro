import * as React from "react"


export type Props = {
    bet: any
}

export type State = {
    showDetails: boolean
}

class Bet extends React.Component<Props, State> {

    state: State = {
        showDetails: false,
    }


    constructor(props: Props) {
        super(props)
    }

    details = () => {
        if (this.state.showDetails){
        return <div className="betDetailsModal">

            Did it win?
            Yes:
            <input type="checkbox" />
            No:
            <input type="checkbox" />
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