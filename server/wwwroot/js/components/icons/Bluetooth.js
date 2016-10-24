import React, { Component, PropTypes } from 'react';

import SVGIcon from 'grommet/components/SVGIcon'

export default class Bluetooth extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <SVGIcon size='small' viewBox="0 -5 32 32" colorIndex={this.props.colorIndex}>
                    <g stroke="#865CD6" strokeWidth="1" fill="none" >
                        <path d="M14.859 16.313l-1.875-1.922v3.797zM12.984 5.813v3.797l1.875-1.922zM17.719 7.688l-4.313 4.313 4.313 4.313-5.719 5.672h-0.984v-7.594l-4.594 4.594-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 4.594 4.594v-7.594h0.984z" />
                    </g>
              </SVGIcon>;
    }
}