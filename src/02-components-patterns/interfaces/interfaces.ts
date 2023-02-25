import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductCardTitle } from '../components/ProductTitle';
import { Props as ProductCardImage } from '../components/ProductImage';
import { Props as ProductCardButtons } from '../components/ProductButtons';


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
    counter: number;
    increaseBy:( value:number ) => void;
    product:Product;
    maxCount?:number;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ( Props: ProductCardTitle ) => JSX.Element;
    Image: ( Props: ProductCardImage ) => JSX.Element;
    Buttons: ( Props: ProductCardButtons ) => JSX.Element;
};

export interface OnchangeArgs {
    product:Product;
    count:number;
};

export interface ProductInCart extends Product {
    count:number;
};

export interface InitialValue {
    count?:number;
    maxCount?:number;
};

export interface ProductArgsChildren {
    count:number;
    maxCount?:number;
    isMaxReached:boolean;
    product: Product;

    increaseBy:( value:number ) => void;
    reset:() => void;
}