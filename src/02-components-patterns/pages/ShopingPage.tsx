import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/"


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

        <ProductCard product={product}>

          <ProductImage />
          <ProductTitle title="Hola mundo" />
          <ProductButtons  />

        </ ProductCard >

      <ProductCard product={product}>

          <ProductCard.Image />
          <ProductCard.Title title="Coffe?" />
          <ProductCard.Buttons />

      </ ProductCard >

      </div>
    </div>
  )
}
