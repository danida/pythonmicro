import * as React from 'react'


export type Props = {
    visible:boolean,
}
 
export type State =  {
    
}
 
class BetModal extends React.Component<Props, State> {
    render() { 
        let className = this.props.visible?'betModal--visible':'betModal--hidden'
        return ( <div className={className}>MODAL</div> );
    }
}
 
export default BetModal;