import * as React from "react"


export type Props= {
   bet:any
}

export type State= {

}

class Bet extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (<div className={'bet'}><span>{this.props.bet['fixture']}</span>
            <span>{this.props.bet['odds']}</span>
            <span>{this.props.bet['win'] ? 'won':'lose'}</span></div>);
    }
}

export default Bet;