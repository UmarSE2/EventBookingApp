import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors } from '../Assets/Theme';

const Map = ({ height, width, color }) => {
    const defaultColor = color ? color : Colors.Grey;
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5287 1.91679C13.6945 1.92637 15.7645 2.78887 17.2787 4.30304C18.8025 5.82679 19.6554 7.8872 19.6458 10.0243V10.0722C19.5883 12.976 17.9591 15.6497 15.9275 17.7389C14.7775 18.9176 13.5029 19.9622 12.1133 20.8439C11.7395 21.1601 11.1933 21.1601 10.8195 20.8439C8.75913 19.5022 6.93829 17.8155 5.46246 15.851C4.16871 14.1451 3.43079 12.0943 3.35413 9.9572C3.37329 5.50095 7.03413 1.9072 11.5287 1.91679ZM11.5287 12.7076C12.2091 12.7076 12.8608 12.4489 13.34 11.9793C13.8383 11.4905 14.1172 10.8398 14.1172 10.1585C14.1172 8.74012 12.9566 7.5997 11.5287 7.5997C10.1008 7.5997 8.95079 8.74012 8.95079 10.1585C8.95079 11.5586 10.0816 12.6885 11.5 12.7076H11.5287Z" fill=${defaultColor}/>
            </svg>
            `}
        />
    );
};

export default Map;
