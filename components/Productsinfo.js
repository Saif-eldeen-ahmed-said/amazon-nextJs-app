import Product from '../components/Product';

function Productsinfo({products}) {
  return (
    <div className='grid grid-flow-dense mx-auto grid-cols-1 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:-mt-20 xl:-mt-44'>
        {
    // category ,id, description,image,price,rating.rate,rating.count,title
    products?.slice(0,3).map(
      ({id,image,title,rating,category,price,description})=>(
        <Product 
        key={id}
        count={rating.count}
        rate={rating.rate}
        title={title}
        image={image}
        category={category}
        price={price}
        desc={description}
        />
      )
    )
   }
   <div className='grid col-span-full mx-auto'>
   <img src="../product banner.gif" alt='' loading='lazy'  />
   </div>
   <div className='md:col-span-1 lg:col-span-2'>
   {
    products?.slice(6,7).map(
      ({id,image,title,rating,category,price,description})=>(
        <Product 
        key={id}
        count={rating.count}
        rate={rating.rate}
        title={title}
        image={image}
        category={category}
        price={price}
        desc={description}
        />
      )
    )
   }
   </div>
   {
    
    products?.slice(7,products.length).map(
      ({id,image,title,rating,category,price,description})=>(
        <Product 
        key={id}
        count={rating.count}
        rate={rating.rate}
        title={title}
        image={image}
        category={category}
        price={price}
        desc={description}
        />
      )
    )
   }
    </div>
  )
}

export default Productsinfo
