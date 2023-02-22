import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"
import '../styles/styles-custom.css';

const product = {
  id:'123',
  title:'Coffe XD',
  img:'./coffee-mug.png'
}

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


      <ProductCard product={product} className="bg-dark">

          <ProductCard.Image className="custom-image"/>
          <ProductCard.Title title="Coffe?" className="text-white"/>
          <ProductCard.Buttons className="custom-buttons"/>

      </ ProductCard >


      <ProductCard 
        product={product} 
        className="bg-dark"
        
      >

          <ProductImage className="custom-image"/>
          <ProductTitle title="Hola mundo" className="text-white" />
          <ProductButtons  className="custom-buttons"/>

      </ ProductCard >

      </div>
    </div>
  )
}
