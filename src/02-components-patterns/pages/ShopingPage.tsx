import { products } from "../../data/products";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import '../styles/styles-custom.css';


const product = products[0]

export const ShopingPage = () => {


    return (
        <div>

        <h1>ShopingPage</h1>
        <hr />

        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>


       
                <ProductCard
                    key={ product.id }
                    product={product}
                    className="bg-dark"
                    initialValue={{
                        count:5,
                        maxCount:10
                    }}
                >

                    {
                        ( { reset, increaseBy, count, isMaxReached } ) => (
                            <>
                                <ProductImage className="custom-image"/>
                                <ProductTitle title={ product.title } className="text-white" />
                                <ProductButtons  className="custom-buttons"/>
                                <button onClick={ reset }>Reset</button>
                                <button onClick={ () => increaseBy(-2) }>-2</button>
                                <button onClick={ () => increaseBy(2) } style={{ display:`${ isMaxReached ?'none' :'' }` }} >+2</button>
                                <span>{ count }</span>
                            </>
                        )
                    }

                    

                </ ProductCard >
    

        </div>
        </div>
    )
}

