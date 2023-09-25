import Image from "next/legacy/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { addToBasket } from "../slices/basketSlice"
import { useDispatch } from "react-redux"
import { useState } from "react"



function Product({ id, image, title, count, rate, category, price, desc }) {

  const dispatch = useDispatch();




  const [Quantity, setQuantity] = useState(1)

  const increase = () => {
    if (Quantity < 10) { setQuantity(Quantity + 1) }
  }

  const decrease = () => {
    if (Quantity > 1) { setQuantity(Quantity - 1) }
  }

  const additems = () => {
    const item = {
      id, image, title, count, rate, category, price, desc
      , quantity: Quantity
    }
    dispatch(addToBasket(item))
  }


  return (
    <div className="relative z-30 flex flex-col m-5 bg-white items-center">
      <p className="absolute top-3 right-4 text-gray-400 z-31 link text-sm">{category}</p>
      <div className={Math.round(rate) >= 4 ? "absolute top-2 left-2 flex items-center" : "hidden"}>
        <img src="../prime.png" className="w-7 mx-2" alt="/" />
        <p className="text-xs">free delivery</p>
      </div>
      <div className="mx-auto pt-16 pb-4">
        <Image priority src={image} height={200} width={200} objectFit="contain" />
      </div>
      <div className="flex flex-col justify-center py-3 px-4">
        <h3 className="font-bold line-clamp-1 py-1">{title}</h3>
        <div className="flex items-center py-1">
          <div className="flex link items-center justify-between">{Array(Math.round(rate)).fill().map((_, i) => (
            <StarIcon key={id} className="h-5 text-yellow-500" />
          ))}
          </div>
          <p className="link flex-grow ">({count})</p>
        </div>
        <p className="line-clamp-2">{desc}</p>
        <p className="font-semibold text-lg pt-4">{price}$</p>
        <div className="flex justify-center items-center space-x-1">
          <button className="bg-gray-100 text-xl border px-1" onClick={increase}>+</button>
          <span className="text-xl">{Quantity}</span>
          <button className="bg-gray-100 text-xl border px-1" onClick={decrease}>-</button>
        </div>
        <button onClick={additems} className=" button-color w-5/6 py-2 mx-auto my-4 link">Add to Basket</button>
      </div>
    </div>
  )
}

export default Product;