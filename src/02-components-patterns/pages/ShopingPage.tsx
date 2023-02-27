import { products } from "../../data/products";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"


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
                    initialValue={{
                        count:0,
                        // maxCount:10
                    }}
                >

                    {
                        ( { reset, increaseBy, count, isMaxReached } ) => (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButtons />
                               
                            </>
                        )
                    }

                    

                </ ProductCard >
    

        </div>
        </div>
    )
}

