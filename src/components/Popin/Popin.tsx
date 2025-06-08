import React from 'react';
import styled from 'styled-components';
import { PopinPropsParent } from './../../interfaces/Interfaces';

// import React from 'react';
// import { PopinShow, PopinPropsParent } from './../../interfaces/Interfaces';
// interface PopinPropsParent extends PopinShow {
//     clickHandler?: (e: MouseEvent) => void;
//     statePopin?: boolean;
// }
const ContainerPopin = styled.div<PopinPropsParent>`
    transition: all 0.3s linear;
    display: ${({ show }) => (show ? '' : 'none')};
    .overlay {
        background-color: #c3c3c3;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        opacity: 0.5;
    }
`;

const PopinDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    background-color: #fff;
    position: absolute;
    width: 50%;
    min-width: 500px;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    @media screen and (max-width: 800px) {
        height: 300px;
    }
`;

const BodyDiv = styled.div`
    margin: 20px 0;
    padding: 0 10px;
    font-size: 14px;
`;

const CrossDiv = styled.div`
    position: absolute;
    top: 15px;
    right: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:before,
    &:after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: #000;
        top: 50%;
        left: 0;
        transition: all 0.3s linear;
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    &:hover {
        &:before,
        &:after {
            height: 2px;
            transform: scale(1.2) rotate(-45deg);
        }
        &:after {
            transform: scale(1.2) rotate(45deg);
        }
    }
`;

const Btn = styled.div`
    width: 50%;
    border: 1px solid #00a485;
    border-radius: 5px;
    color: #fff;
    background-color: #00a485;
    margin: 20px auto;
    padding: 0 10px;
    font-size: 16px;
    box-shadow: 5px 7px 5px 0px rgba(0, 0, 0, 0.55);
    transition: all 0.2s linear;
    cursor: pointer;
    &:hover {
        color: #00a485;
        background-color: #fff;
    }
    &:active {
        box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.6);
        transform: translateY(4px);
    }
`;
//////
// interface PopinPropsParent {
//     clickHandler?: (e: MouseEvent) => void;
//     statePopin?: boolean;
// }
//////
export const Popin = ({ clickHandler, statePopin }: PopinPropsParent) => {
    return (
        <ContainerPopin show={statePopin}>
            <div className="overlay"></div>
            <PopinDiv>
                <CrossDiv onClick={clickHandler}></CrossDiv>
                <h1>Titre</h1>
                <BodyDiv>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat animi vitae
                    facilis minima illum ad ut praesentium totam? Suscipit accusantium saepe
                    reiciendis doloremque eveniet veniam commodi sunt nam obcaecati beatae.
                </BodyDiv>
                <Btn onClick={clickHandler}>Button</Btn>
            </PopinDiv>
        </ContainerPopin>
    );
};

// export default Popin;
