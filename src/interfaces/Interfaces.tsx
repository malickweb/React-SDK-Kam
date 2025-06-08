import { MouseEvent, ChangeEvent } from 'react';

export interface Description {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}
export interface Number {
    variation: number;
    nbrProduct: number;
}

export interface MenuInter {
    isSousMenu: boolean;
    anchorUrl: string;
    title: string;
}

// Start InputText
export interface InputData {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}
export interface InputProps {
    changeHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
    clickHandler?: (e: MouseEvent) => void;
    sizeInPercent?: number;
    placeHolder?: string;
    value?: string;
    reverseIcon?: boolean | number;
    iconColor?: string;
    isInputSearch?: InputData[];
}
export interface ProductSearchProps {
    isInputSearch?: InputData[];
}

// End InputText

// Start BTN
export interface Btn {
    text?: string;
    sizeInPercent?: number;
    color?: string;
    bgColor?: string;
    reverse?: boolean;
    clickHandler?: (e: MouseEvent) => void;
}

export interface BntLink extends Btn {
    hrefTo: string;
}

export interface BtnPerso extends Btn {
    btnColor?: boolean | string;
    showPopin?: (e: MouseEvent) => void;
    statePopin?: boolean;
}
// End BTN

// Start Popin
export interface PopinShow {
    show?: boolean;
}

export interface PopinPropsParent extends PopinShow {
    clickHandler?: (e: MouseEvent) => void;
    statePopin?: boolean;
}
// End Popin
