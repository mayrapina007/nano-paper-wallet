import React, {Component} from 'react';

class BlockChainLinker extends Component {
    render() {
        if (!this.props.address) {
            return null;
        }
        return (
            <div>
                <a href={'https://banano.meltingice.net/explorer/account/' + this.props.address} target="_blank">
                    Check this account balance on blockchain!
                </a>
                <br/>
                <label>{ this.props.address }</label>
            </div>
        );
    }
}

export default BlockChainLinker;
