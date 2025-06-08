import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BntLink } from '../../interfaces/Interfaces';

// const StyledLink = styled(({ reverse, sizeInPercent, color, bgColor, ...props }) => (
//     <Link {...props} />
// ))`
// color: ${({ color }) => color};
// background-color: ${({ bgColor }) => bgColor};
// margin: 10px 0;
// padding: 6px 12px;
// /*flex: 0 1 calc(${({ sizeInPercent }) => (sizeInPercent ? sizeInPercent : 20)}% + 24px);*/
// width: ${({ sizeInPercent }) => (sizeInPercent ? sizeInPercent : 100)}%;
// border-radius: 5px;
// border: 2px solid ${({ color }) => color};
// border-style: outset;
// transition: all 0.3s linear;
// text-decoration: none;
// &:hover {
//     color: ${({ bgColor }) => bgColor};
//     background-color: ${({ color }) => color};
//     border: 2px solid ${({ bgColor }) => bgColor};
// }
// `;
const StyledLink = styled(Link)<{
    $bgColor: string;
    $color: string;
    $sizeInPercent?: number;
    $reverse?: boolean;
}>`
    color: ${({ $color }) => $color};
    background-color: ${({ $bgColor }) => $bgColor};
    margin: 10px 0;
    padding: 6px 12px;
    width: ${({ $sizeInPercent }) => ($sizeInPercent ? $sizeInPercent : 100)}%;
    border-radius: 5px;
    border: 2px solid ${({ $color }) => $color};
    border-style: outset;
    transition: all 0.3s linear;
    text-decoration: none;
    &:hover {
        color: ${({ $bgColor }) => $bgColor};
        background-color: ${({ $color }) => $color};
        border: 2px solid ${({ $bgColor }) => $bgColor};
    }
`;

export const ButtonLink = ({
    hrefTo,
    text,
    color = '#fff',
    bgColor = '#0d6efd',
    sizeInPercent,
    reverse,
}: BntLink) => {
    const currentColor = reverse ? bgColor : color;
    const currentBgColor = reverse ? color : bgColor;

    return (
        // <StyledLink
        //     as={Link}
        //     to={hrefTo}
        //     color={color}
        //     bgColor={bgColor}
        //     onClick={clickHandler}
        //     reverse={reverse}
        //     sizeInPercent={sizeInPercent}
        // >
        //     {text}
        // </StyledLink>
        <StyledLink
            to={hrefTo}
            $color={currentColor}
            $bgColor={currentBgColor}
            $reverse={reverse}
            $sizeInPercent={sizeInPercent}
        >
            {text}
        </StyledLink>
    );
};

// export default ButtonLink;
