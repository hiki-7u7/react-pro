import { createContext } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Props } from '../interfaces/interfaces';

import { ProductImage, ProductButtons, ProductTitle } from './';



export const ProductContext = createContext( {} as ProductContextProps );
const { Provider } = ProductContext;



export const ProductCard = ( { children, product }:Props ) => {

    const { counter, increaseBy } = useProduct();
    

    return (
        <Provider value={{
            product,
            counter,
            increaseBy
        }} >
            <div className={ styles.productCard }>
            
                { children }
                {/* <ProductImage />
                <ProductTitle title={'Coffe Muge'} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            
            </div>
        </Provider>
    );
};


// ProductCard.Image = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;