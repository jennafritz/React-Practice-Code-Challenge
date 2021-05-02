import React, {Component} from 'react'

class Wallet extends Component {
    constructor() {
        super()
        this.state = {
            funds: 0
        }
    }
    
    render(){
        return(
            <form onSubmit={(event) => {
                event.preventDefault()
                this.props.handleWalletSubmit(this.state.funds)
                }}>
                <input onChange={(event) => this.setState({funds: event.target.value})}type="number" value={this.state.funds}/>
                <input type="submit" value="Add More Funds" />
            </form>
        )
    }
}

export default Wallet 