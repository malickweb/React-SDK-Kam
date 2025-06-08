import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { SearchAlt } from '@styled-icons/boxicons-regular/SearchAlt';

import { InputProps } from './../../interfaces/Interfaces';

const ContainerInput = styled.div<InputProps>`
    margin: 10px 0;
`;
const Div = styled.div<InputProps>`
    display: flex;
    flex-flow: row nowrap;
    width: ${({ sizeInPercent }) => sizeInPercent || 100}%;
    border: 1px solid #3c3c3c;
    border-radius: 5px;
    box-shadow: 1px 4px 3px 1px rgb(0 0 0 / 25%);
`;
const Input = styled.input<InputProps>`
    flex: 2;
    margin: 5px 10px;
    border: none;
    outline: none;
    order: ${({ reverseIcon }) => (reverseIcon ? 1 : 0)};
`;
const Button = styled.button<InputProps>`
    flex: 1;
    max-width: 50px;
    background-color: transparent;
    padding: 0;
    border: none;
    ${({ reverseIcon }) =>
        reverseIcon ? 'border-right: 1px solid #000;' : 'border-left: 1px solid #000;'}
    transition: all 0.3s linear;
    order: ${({ reverseIcon }) => (reverseIcon ? 0 : 1)};
    outline: none;
    &:hover {
        svg {
            transform: scale(1.1);
            outline: none;
        }
    }
    &:active {
        box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 75%) inset;
        border: none;
    }
`;
const SearchIcon = styled(SearchAlt)<InputProps>`
    width: 100%;
    height: 20px;
    color: ${({ iconColor }) => (iconColor ? iconColor : 'inherit')};
`;
const Ul = styled.ul`
    list-style-type: none;
    border: 1px solid #c3c3c3;
    border-radius: 0 0 0 0;
    padding: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    li {
        border-bottom: 1px solid #c3c3c3;
        &:hover {
            box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 25%);
        }
        &:active {
            a {
                color: #fff;
                background-color: #0d6efd;
            }
        }
        &:last-child {
            border-bottom: none;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        a {
            color: #3c3c3c;
            padding: 5px 0;
        }
    }
`;
const LinkSearch = styled(Link)`
    display: block;
    text-decoration: none;
`;

const ListSearch = ({ isInputSearch }: any) => {
    if (!isInputSearch) return false;
    return isInputSearch.map((item: any, i: number) => {
        return (
            <li key={i}>
                <LinkSearch to={'/product/' + item.id}>{item.name}</LinkSearch>
            </li>
        );
    });
};
export const InputSearch = ({
    changeHandler,
    clickHandler,
    sizeInPercent,
    placeHolder,
    value,
    reverseIcon,
    iconColor,
    isInputSearch,
}: InputProps) => {
    return (
        <ContainerInput sizeInPercent={sizeInPercent} isInputSearch={isInputSearch}>
            <Div>
                <Button reverseIcon={reverseIcon} onClick={clickHandler}>
                    <Link to={'/productSearch'}>
                        <SearchIcon iconColor={iconColor} />
                    </Link>
                </Button>
                <Input
                    type="search"
                    onChange={changeHandler}
                    placeholder={placeHolder}
                    reverseIcon={reverseIcon}
                />
                <Input type="hidden" value={value} />
            </Div>
            <Ul>
                <ListSearch isInputSearch={isInputSearch} />
            </Ul>
        </ContainerInput>
    );
};

// export default InputText;
