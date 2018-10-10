import React, {Component} from 'react';
import {QRCode} from 'react-qr-svg';

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donate_public_key: "xrb_1x4r356aqwojhsmp17xw4yexawzapacmh9kz5o46617rnn45yne37g8zaby3",
        };
    }

    render() {
        return (
            <div className="bg-nano-blue color-white responsive-text bg-logo-dark" style={{padding: 32}}>
                <h6>
                    <b>Donate Nano and help us to improve the paper wallet!</b>
                </h6>
                <br/>
                <div style={{padding: 10, background: "white", width: 128, margin: "auto"}}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.state.donate_public_key }
                    />
                </div>
                <h6>
                    { this.state.donate_public_key }
                </h6>
            </div>
        );
    }
}

export default Donate;
