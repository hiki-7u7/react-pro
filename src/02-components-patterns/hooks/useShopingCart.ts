import { useState } from "react";
import { ProductInCart, Product } from '../interfaces/interfaces';


export const useShopingCart = () => {
  
    const [shopingCart, setShopingCart] = useState<{ [key:string]:ProductInCart }>({ });

    const onProductCartChange = ( { count, product }: { count:number, product:Product } ):void => {
      
      console.log(count);
      
      setShopingCart( oldShopingCart => {

        const productInCart:ProductInCart = oldShopingCart[product.id] || { ...product, count: 0 };

        if( Math.max( productInCart.count + count, 0 ) > 0){
            productInCart.count += count;
            return {
              ...oldShopingCart,
              [product.id]: productInCart
            };
        };

        
        const { [ product.id ]:toDelete, ...rest } = oldShopingCart;
        return rest;


        
        // if( count === 0) {
        //   const { [product.id ]:toDelete, ...rest } = oldShopingCart;
        //   return rest;
        // };
        
        // return {
        //   ...oldShopingCart,
        //   [ product.id ]: { ...product, count }
        // }

      })
    };
  
    return {

        //* Propiedades
        shopingCart,

        //* Metodos
        onProductCartChange

    }
}
