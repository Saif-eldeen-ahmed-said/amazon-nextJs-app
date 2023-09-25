import Image from 'next/legacy/image';
import logo from '../public/amazon.png';
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { signIn, signOut, useSession } from "next-auth/react"
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectitems } from '../slices/basketSlice';

function Header() {
  const { data: session } = useSession();

  const items = useSelector(selectitems)

  const router = useRouter();
  return (
    <div>
      <div className='flex items-center bg-Amazon_blue-default space-x-3 justify-center px-2'>
        <div className='relative mt-4 ' onClick={() => router.push("/")}>
          <Image
            src={logo}
            alt="/"
            width={140}
            height={45}
            className="cursor-pointer"
          />
        </div>
        <div className='flex flex-grow '>
          <input type="text" className=' w-full  outline-none rounded-l-md text-xl' />
          <MagnifyingGlassIcon className='w-10   text-gray-900 bg-yellow-500 hover:bg-yellow-600 p-1 rounded-r-md cursor-pointer' />
        </div>
        <div onClick={!session ? signIn : signOut}>
          <p className='text-white line-clamp-2 link font-semibold'>
            {session ? `hello ${session.user.name}` : "hello ,sign in"}
            <br />Accounts</p>
        </div>
        <div>
          <p className='text-white hidden md:inline-flex px-1 link font-semibold whitespace-nowrap'>Returns<br />& orders</p>
        </div>
        <div className='flex relative items-center ' onClick={() => router.push("/checkout")}>
          <ShoppingCartIcon className='text-white w-10 cursor-pointer' />
          <span className='bg-yellow-500 font-bold  absolute right-0 top-0 md:right-16 text-center px-1.5 text-sm  rounded-full'>{items.length}</span>
          <p className=' hidden text-white md:flex p-1 font-semibold text pr-3 link mt-2'>Basket</p>
        </div>
      </div>
      <div className='flex  items-center text-white bg-Amazon_blue-light space-x-3 px-3 py-2'>
        <Bars3Icon className='text-white w-6 link' />
        <p className='link font-semibold '>Today Deals</p>
        <p className='link font-semibold '>Amazon Prime</p>
        <p className='link font-semibold '>Prime Video</p>
        <p className='link font-semibold hidden lg:inline-flex '>Electronics</p>
        <p className='link font-semibold hidden lg:inline-flex '>Shopping Toolkit</p>
        <p className='link font-semibold hidden lg:inline-flex '>Buy Again</p>
        <p className='link font-semibold hidden lg:inline-flex '>Food & Grocery</p>
        <p className='link font-semibold hidden lg:inline-flex '>Health & Personal Care</p>
      </div>
    </div>
  )
}

export default Header