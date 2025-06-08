import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { Btn } from '../../interfaces/Interfaces';

const Btns = styled.button<Btn>`
    color: ${({ color }) => color};
    background-color: ${({ bgColor }) => bgColor};
    margin: 10px 0;
    padding: 6px 12px;
    /*flex: 0 1 calc(20% + 24px);*/
    width: ${({ sizeInPercent }) => (sizeInPercent ? sizeInPercent + '%' : 100)}%;
    border-radius: 5px;
    border: 2px solid ${({ color }) => color};
    transition: all 0.3s linear;
    &:hover {
        color: ${({ bgColor }) => bgColor};
        background-color: ${({ color }) => color};
        border: 2px solid ${({ bgColor }) => bgColor};
    }
`;

export const Button = ({
    text,
    color,
    bgColor,
    sizeInPercent,
    reverse,
    clickHandler,
}: {
    text?: string;
    sizeInPercent?: number;
    color?: string;
    bgColor?: string;
    reverse?: boolean;
    clickHandler?: (e: MouseEvent) => void;
}) => {
    color = color ? color : '#fff';
    bgColor = bgColor ? bgColor : '#0d6efd';

    if (reverse) {
        color = bgColor;
        bgColor = color;
    }

    return (
        <Btns
            color={color}
            bgColor={bgColor}
            reverse={reverse}
            sizeInPercent={sizeInPercent}
            onClick={clickHandler}
        >
            {text}
        </Btns>
    );
};

// export default Button;
