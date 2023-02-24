import { products } from "../../data/products";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import '../styles/styles-custom.css';
import { useShopingCart } from '../hooks/useShopingCart';



export const ShopingPage = () => {

    const { onProductCartChange, shopingCart } = useShopingCart();

    return (
        <div>
        <h1>ShopingPage</h1>
        <hr />
        <div style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap'
        }}>


        {
            products.map( pro => {

            return <ProductCard
                key={ pro.id }
                product={pro}
                className="bg-dark"
                onChange={ onProductCartChange }
                value={ shopingCart[ pro.id ]?.count || 0 }


            >

                <ProductImage className="custom-image"/>
                <ProductTitle title={ pro.title } className="text-white" />
                <ProductButtons  className="custom-buttons"/>

            </ ProductCard >

            })
        }

        <div className="shoping-cart">
            {
                Object.values(shopingCart).map( pro => {

                    return <ProductCard
                    key={ pro.id }
                    product={pro}
                    className="bg-dark"
                    style={{ width:'150px' }}
                    onChange={ onProductCartChange }
                    value={ pro.count }
                    >

                    <ProductImage className="custom-image"/>
                    <ProductButtons  className="custom-buttons"/>

                    </ ProductCard >

                })
            }
        </div>  

        <div>
        
            <code>
            { JSON.stringify(shopingCart) }
            </code>

        </div>

        </div>
        </div>
    )
}

