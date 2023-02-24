import { useEffect, useRef, useState } from 'react';
import { OnchangeArgs, Product } from '../interfaces/interfaces';

interface Args {
    onChange?:( args:OnchangeArgs ) => void;
    product:Product;
    value?:number;
}

export const useProduct = ( { onChange, product, value = 0  }:Args ) => {

    const [counter, setCounter] = useState( value );
    const onChangeRef = useRef( !!onChange );

    const increaseBy = ( value:number ):void => {

        if( onChangeRef.current ){
            return onChange!({ count:value, product})
        };

        const newValue = Math.max( counter + value ,0 );
        setCounter( newValue )
        onChange && onChange({ count:newValue, product });
        // console.log(product);
        
    };
    
    useEffect(() => {
        setCounter( value )
    }, [ value ]);
  
    return {
        //* Propiedades
        counter,

        //* Metodos
        increaseBy
    }
}
