import { createContext, CSSProperties, ReactElement } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { InitialValue, OnchangeArgs, Product, ProductArgsChildren, ProductContextProps } from '../interfaces/interfaces';


export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args:ProductArgsChildren ) => JSX.Element;
    className?:string;
    style?: CSSProperties;
    onChange?: ( args:OnchangeArgs ) => void;
    value?:number;
    initialValue?: InitialValue
};

export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;



export const ProductCard = ( { children, product, className, style, onChange, value, initialValue }:Props ) => {

    const { counter, increaseBy, maxCount, isMaxReached, reset } = useProduct({ onChange, product, value, initialValue });
    
    
    return (
        <Provider value={{
            product,
            counter,
            increaseBy,
            maxCount
        }} >
            <div className={ `${styles.productCard} ${ className }` } style={ style }>
            
                {children({
                    count: counter,
                    product,
                    isMaxReached,
                    maxCount,
                    increaseBy,
                    reset
                })}
            
            </div>
        </Provider>
    );
};

