import React, { Component } from 'react';
import { PulseLoader } from 'halogenium';

export default class PulseLoaderViewPlant extends Component {
    render() {
        return (
            <PulseLoader className="centered vertically centered" color="rebeccapurple" size="12px" margin="12px"/>
        );
    }
}