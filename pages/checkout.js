import Image from 'next/legacy/image'
import Header from '../components/Header'
import { useSelector } from "react-redux"
import { selectitems } from "../slices/basketSlice"
import checkbanner from "../public/amazon-prime-day-beauty-2016.png"
import emptyBasket from "../public/empty basket.png"
import CheckoutProduct from '../components/CheckoutProduct'
import {signIn, useSession} from "next-auth/react"
import  {selectTotal} from "../slices/basketSlice"



function checkout() {
  const products = useSelector(selectitems);
  const {data:session} =useSession();
  const total = useSelector(selectTotal)


  return (
    <div className='bg-gray-200 overflow-x-hidden'>
      <Header />
      <main  className='max-w-screen-xl lg:grid lg:grid-cols-5 mx-auto p-2'>
        <div className='bg-white lg:col-span-4'>
            <div className='relative w-full'>
                <Image src={checkbanner} objectFit="contain"   alt="/"  />
            </div>
            <div className='space-y-4 flex flex-col p-4'>
                <h1 className='text-3xl font-semibold border-b pb-2'>{products.length < 1 ? "your basket is empty":
                  `you have ${products.length} item in the basket`
                }</h1>
                {products.length < 1 && <Image src={emptyBasket} width="400px" height="400px" objectFit='contain' />}
                
                {products.map(({id,image,title,rate,count,category,price,desc})=>(
        <CheckoutProduct
        key={id}
        count={count}
        rate={rate}
        title={title}
        image={image}
        category={category}
        price={price}
        desc={desc}
        />
      ))}
            </div>
        </div>
        <div className='flex flex-col items-center px-4 bg-white lg:mx-4 sm:w-full my-4 py-4 sm:py-4 lg:py-0 sm:mx-auto'>
          <h1 className='text-lg font-bold'>subtotal ({products.length}): {total}$</h1>
          <button onClick={!session && signIn} className={`p-1 rounded-md ${!session? "text-white bg-gradient-to-b from-slate-800 to-slate-400": "button-color"}`}>
            {!session? "sign in to checkout":"Proceed to checkout"}
          </button>
        </div>
      </main>
    </div>
  )
}

export default checkout
