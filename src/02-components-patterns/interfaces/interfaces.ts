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
    counter:number;
    increaseBy:( value:number ) => void;
    product: Product;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: ( Props: ProductCardTitle ) => JSX.Element;
    Image: ( Props: ProductCardImage ) => JSX.Element;
    Buttons: ( Props: ProductCardButtons ) => JSX.Element;
};