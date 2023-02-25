import { useEffect, useState, useRef } from 'react';
import { InitialValue, OnchangeArgs, Product } from '../interfaces/interfaces';

interface Args {
    onChange?:( args:OnchangeArgs ) => void;
    product:Product;
    value?:number;
    initialValue?: InitialValue
}

export const useProduct = ( { onChange, product, value = 0, initialValue  }:Args ) => {

    const [counter, setCounter] = useState( initialValue?.count || value );


    const increaseBy = ( value:number ):void => {
        console.log('click');
        
        let newValue = Math.max( counter + value, 0 );
        if( initialValue?.maxCount ){
            newValue = Math.min( newValue, initialValue.maxCount )
        }     
        
        setCounter( newValue );
        onChange && onChange({ count:newValue, product });


    };

    const reset = ():void => {
        setCounter( initialValue?.count || value );
    }

    useEffect(() => {

        if( initialValue?.count ) return ;
        setCounter( value );

    }, [ value ]);


    return {
        //* Propiedades
        counter,
        maxCount: initialValue?.maxCount,
        isMaxReached: !!initialValue?.maxCount && initialValue.maxCount === counter,

        //* Metodos
        increaseBy,
        reset
    }
}
