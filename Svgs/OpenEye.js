import React from 'react';
import { SvgXml } from 'react-native-svg';

const Music = ({ height, width, color }) => {
    const defaultColor = color ? color : 'white';
    const defaultHeight = height ? height : 14;
    const defaultWidth = width ? width : 14;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 70 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 25.9964C3 25.9964 14.4982 3 34.62 3C54.7418 3 66.24 25.9964 66.24 25.9964" stroke="black" stroke-width="5.74909" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 25.9964C3 25.9964 14.4982 48.9927 34.62 48.9927C54.7418 48.9927 66.24 25.9964 66.24 25.9964" stroke="black" stroke-width="5.74909" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.62 34.62C39.3827 34.62 43.2436 30.7591 43.2436 25.9964C43.2436 21.2337 39.3827 17.3727 34.62 17.3727C29.8573 17.3727 25.9964 21.2337 25.9964 25.9964C25.9964 30.7591 29.8573 34.62 34.62 34.62Z" stroke="black" stroke-width="5.74909" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
            }
        />
    );
};

export default Music;
