import { createContext, CSSProperties, ReactElement } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { OnchangeArgs, Product, ProductContextProps } from '../interfaces/interfaces';


export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?:string;
    style?: CSSProperties;
    onChange?: ( args:OnchangeArgs ) => void;
    value?:number;
};

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;



export const ProductCard = ( { children, product, className, style, onChange, value }:Props ) => {

    const { counter, increaseBy } = useProduct({ onChange, product, value });
    
    // console.log(product);
    
    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }} >
            <div className={ `${styles.productCard} ${ className }` } style={ style }>
            
                { children }
            
            </div>
        </Provider>
    );
};

