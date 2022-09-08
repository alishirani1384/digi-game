import { useRouter } from 'next/router';
import React from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri';

const ClearCart = () => {
    const router=useRouter()
  return (
    <div className="text-center flex flex-col items-center justify-center space-y-3">
      <RiShoppingBag3Line size={50} className=" text-orange-500 z-50" />
      <h3 className="font-bold text-lg text-white">Your cart Is empty</h3>
      <p>
        You didn t add any item in your cart yet. Browse the website to find
        amazing deals!
      </p>
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-2 px-3 rounded-full" onClick={()=>router.push('/')}>
        Discover games
      </button>
    </div>
  );
}

export default ClearCart