import Image from "next/legacy/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { removeBasket } from "../slices/basketSlice"
import { useDispatch } from 'react-redux'



function CheckoutProduct({id,image,title,count,rate,category,price,desc}) {
    const dispatch =useDispatch()

    const removeitem=()=>{
      dispatch(removeBasket({title}))}
  return (
    <div className="grid grid-cols-5 space-x-2 items-center space-y-2 pt-4">
      <div className="relative">
        <Image src={image}  height={200} width={200} objectFit="contain"  priority />
      </div>
      <div className=" relative col-span-3 space-y-1">
        <h1 className="font-bold text-md line-clamp-1">{title}</h1>
        <div className="flex link items-center">{Array(Math.round(rate)).fill().map((_,i)=>(
          <StarIcon key={id} className="h-5 text-yellow-500" />
        ))}
        <p className="link flex-grow">({count})</p>
        <div className={Math.round(rate) >= 4 ?"flex items-center":"hidden"}>
          <img src="https://links.papareact.com/fdw" className="w-12"  alt="/" />
            <p className="text-xs">free delivery</p>
          </div>
        </div>
        <p className="line-clamp-2">{desc}</p>
        <h3 className="font-bold">{price}$</h3>
      </div>
      <div className="px-1">
      <button className=" button-color w-5/6 py-2 mx-auto my-4 link" onClick={removeitem}>remove item</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
