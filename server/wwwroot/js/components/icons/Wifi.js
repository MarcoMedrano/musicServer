import React, { Component, PropTypes } from 'react';

import SVGIcon from 'grommet/components/SVGIcon'

export default class Wifi extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <SVGIcon size='small' viewBox="0 0 40 40" colorIndex={this.props.colorIndex}>
                        <g transform="matrix(0.14678189,0,0,0.14496431,0.97005576,9.5726091)" id="g3561">
                        <g id="g3563">
                            <path d="m 9,113.199 c -4.971,0 -9,4.029 -9,9 0,4.971 4.029,9 9,9 3.972,0 7.203,3.231 7.203,7.203 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9 0,-13.897 -11.306,-25.203 -25.203,-25.203 z" />
                            <path d="m 9,56.158 c -4.971,0 -9,4.029 -9,9 0,4.971 4.029,9 9,9 35.425,0 64.244,28.819 64.244,64.244 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9 C 91.244,93.053 54.35,56.158 9,56.158 Z" />
                            <path d="M 9,0 C 4.029,0 0,4.03 0,9 c 0,4.97 4.029,9 9,9 66.39,0 120.402,54.012 120.402,120.401 0,4.971 4.029,9 9,9 4.971,0 9,-4.029 9,-9 C 147.402,62.087 85.315,0 9,0 Z" />
                        </g>
                        </g>
                    </SVGIcon>;
    }
}