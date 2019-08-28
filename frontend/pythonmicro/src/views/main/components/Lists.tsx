import * as React from "react"
import Bet from './Bet'

type Props = {
    bets: Object,

}

type State = {

}

class List extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }
    render() {
        let keysOfBets = Object.keys(this.props.bets)
        let ret = []

        while (keysOfBets.length>0) {

            ret.push(keysOfBets.splice(0,5))
        }

        let asd  = ret.map((array)=>{
              return array.map((key)=>{
                    return this.props.bets[key]

                
            })
        })
        console.log(asd)
        return asd.map((row)=>{
            return <div className={'row'}>{row.map((bet)=>{
                return <Bet {...{bet}}></Bet>
            })}</div>
        })

    }
}

export default List;