import React from 'react';
import styled from 'styled-components/macro';

import { BtnPerso } from '../../interfaces/Interfaces';

const Buttons = styled.button<BtnPerso>`
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => bgColor};
    margin: 10px 0;
    padding: 6px 12px;
    /*flex: 0 1 calc(20% + 24px);*/
    border-radius: 5px;
    border: 2px solid ${({ color }) => color};
    transition: all 0.3s linear;
    &:hover {
        color: ${({ bgColor }) => bgColor};
        background-color: ${({ color }) => color};
        border: 2px solid ${({ bgColor }) => bgColor};
    }
`;
export const ButtonPerso = ({ text, color, bgColor, showPopin, reverse, statePopin }: BtnPerso) => {
    color = color ? color : '#fff';
    bgColor = bgColor ? bgColor : '#0d6efd';

    if (reverse) {
        color = bgColor;
        bgColor = color;
    }

    return (
        <Buttons color={color} bgColor={bgColor} btnColor={reverse} onClick={showPopin}>
            {text}
        </Buttons>
    );
};

// export default ButtonPerso;
