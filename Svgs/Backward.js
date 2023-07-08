import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors } from '../Assets/Theme';

const Backward = ({ height, width, color }) => {
    const defaultColor = color ? color : Colors.Black;
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6166 11H4.58325" stroke=${defaultColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.9999 17.4167L4.58325 11L10.9999 4.58337" stroke=${defaultColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `}
        />
    );
};

export default Backward;
