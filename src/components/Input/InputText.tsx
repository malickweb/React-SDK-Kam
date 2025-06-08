import React from 'react';
import styled from 'styled-components';

import { InputProps } from './../../interfaces/Interfaces';

const ContainerInput = styled.div<InputProps>`
    width: ${({ sizeInPercent }) => sizeInPercent || 100}%;
    min-width: 200px;
    margin: 10px 0;
`;
const Div = styled.div`
    border: 1px solid #3c3c3c;
`;
const Input = styled.input`
    width: 100%;
    padding: 5px;
    border: none;
    outline: none;
`;

export const InputText = ({ changeHandler, sizeInPercent, placeHolder, value }: InputProps) => {
    return (
        <ContainerInput sizeInPercent={sizeInPercent}>
            <Div>
                <Input type="text" onChange={changeHandler} placeholder={placeHolder} />
                <Input type="hidden" value={value} />
            </Div>
            <div>{value}</div>
        </ContainerInput>
    );
};

// export default InputText;
