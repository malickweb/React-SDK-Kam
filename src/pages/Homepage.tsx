import React, { useState, MouseEvent, ChangeEvent } from 'react';
import logoKam from './../assets/img/homepage-header-min.png';
import { Route } from 'react-router-dom';

import { ProductSearch } from './ProductSearch';
import { Button, ButtonLink, ButtonPerso } from '../components/Buttons/ButtonInit';
import { InputText, InputSearch } from '../components/Input/InputInit';
import { Popin } from '../components/Popin/Popin';

import produits from '../json/Product';
interface ProduitsCongfig {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}
const Product: ProduitsCongfig[] = produits;

let Foo: any;
export const Homepage = () => {
    const [isBtnState, setIsBtnState] = useState<boolean>();
    const [isBtnState01, setIsBtnState01] = useState<boolean>(false);
    const [isInputSearch, setIsInputSearch] = useState<ProduitsCongfig[]>();
    const [isInputText1, setIsInputText1] = useState<{
        search: string;
        text: string;
    }>({
        search: '',
        text: '',
    });
    const Redirect = () => {
        return setTimeout(() => {
            return <Route path="/productSearch" children={<ProductSearch isInputSearch={isInputSearch} />} />;
        }, 5000);
    };
    const clickHandler = (e: MouseEvent) => {
        e.preventDefault();
        console.log('HOMEPAGE ===>');
        setIsBtnState(false);
        setIsBtnState01(true);
        console.log('CLICK =========>>isInputSearch', isInputSearch);
        Foo = isInputSearch || [];
        console.log('Foo', Foo);
        if (isBtnState01 && Foo) {
            console.log('Foo After', Foo);
            console.log('isBtnState01', isBtnState01);
            console.log('isInputSearch', isInputSearch);
            setTimeout(() => {
                console.log('setTimeout');
                Redirect();
            }, 5000);
        }
    };
    const showPopin = (e: MouseEvent) => {
        e.preventDefault();
        console.log('SHow POPIN ===> ');
        setIsBtnState(true);
    };
    const FilterSearch = (data: string) => {
        const filteredData = Product.filter((item) => item.name.toLowerCase().includes(data.toLowerCase()));
        data ? setIsInputSearch(filteredData) : setIsInputSearch([]);
    };
    const changeHandler = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
        console.log('e', e);
        console.log('key', key);
        setIsInputText1((prevState) => ({
            ...prevState,
            [key]: e.target.value,
        }));
        FilterSearch(e.target.value);
        // if (e.target.type === 'text') setIsInputText(e.target.value);
        // if (e.target.type === 'search') setIsInputSearch(e.target.value);
    };
    return (
        <div className="container">
            <div className="text-center">
                <div className="row justify-content-center">
                    <div className="col-12 mb-2">
                        <h1 className="display-4">App Kameleoon</h1>
                    </div>
                    <div className="col-4">
                        <img src={logoKam} alt="Logo Kameleoon" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ButtonLink hrefTo="/product" text={'Voir les produits LINK'} reverse={false} clickHandler={clickHandler} />
                    <Button text={'Voir les produits BTN'} color={'#0d6efd'} bgColor={'#fff'} reverse={false} clickHandler={clickHandler} />
                </div>
                <div className="row justify-content-center">
                    <ButtonPerso text={'Voir la superbe Popin'} showPopin={showPopin} statePopin={isBtnState} reverse={false} />
                </div>
                <div className="row">
                    <InputText changeHandler={changeHandler('text')} placeHolder={'placeholder InputText'} value={isInputText1.text} />
                    <InputSearch changeHandler={changeHandler('search')} clickHandler={clickHandler} sizeInPercent={25} placeHolder={'placeholder InputSearch'} value={isInputText1.search} reverseIcon={true} isInputSearch={isInputSearch} />
                </div>
                <Popin clickHandler={clickHandler} statePopin={isBtnState} />
            </div>
        </div>
    );
};

//export default Homepage;
