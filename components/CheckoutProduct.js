import Image from "next/legacy/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { removeBasket, increaseQuantity, decreaseQuantity } from "../slices/basketSlice"
import { useDispatch } from 'react-redux'
import { useState } from "react"



function CheckoutProduct({ id, image, title, count, rate, quantity, price, desc }) {
  const dispatch = useDispatch()

  const removeitem = () => {
    dispatch(removeBasket({ title }))
  }

  const [Count, setCount] = useState(quantity);

  const countInc = () => {
    if (Count < 10) { setCount(Count + 1) }
    dispatch(increaseQuantity({ mount: Count, title, quantity }))
  }


  const countDec = () => {
    if (Count > 1) { setCount(Count - 1) }
    dispatch(decreaseQuantity({ mount: Count, title, quantity }))
  };



  return (
    <div className="grid grid-cols-5 space-x-2 items-center space-y-2 pt-4">
      <div className="relative">
        <Image src={image} height={200} width={200} objectFit="contain" priority />
      </div>
      <div className=" relative col-span-3 space-y-1">
        <h1 className="font-bold text-md line-clamp-1">{title}</h1>
        <div className="flex link items-center">{Array(Math.round(rate)).fill().map((_, i) => (
          <StarIcon key={id} className="h-5 text-yellow-500" />
        ))}
          <p className="link flex-grow">({count})</p>
          <div className={Math.round(rate) >= 4 ? "flex items-center" : "hidden"}>
            <img src="../prime.png" className="w-7 mx-2" alt="/" />
            <p className="text-xs">free delivery</p>
          </div>
        </div>
        <p className="line-clamp-2">{desc}</p>
        <h3 className="font-bold">{price}$</h3>
      </div>
      <div className="px-1">
        <div className="flex items-center space-x-1">
          <button className="bg-gray-100 text-xl border px-1" onClick={countInc} >+</button>
          <span className="text-xl">{Count}</span>
          <button className="bg-gray-100 text-xl border px-1" onClick={countDec}>-</button>
        </div>
        <button className=" button-color w-fit p-1  mx-auto my-4 link" onClick={removeitem}>remove item</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
