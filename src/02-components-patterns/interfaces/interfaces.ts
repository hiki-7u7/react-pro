import { ReactElement } from 'react';



export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
};

export interface Product {
    id:string;
    title:string;
    img?:string;
};

export interface ProductButtonProps {
    counter:number;
    increaseBy:( value:number ) => void;
};

export interface ProductContextProps {
    counter:number;
    increaseBy:( value:number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: Props): JSX.Element;
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    Buttons: () => JSX.Element;
}