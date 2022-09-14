import { useRouter } from 'next/router';
import React from 'react'
import { RiShoppingBag3Line } from 'react-icons/ri';
import { useLanguage } from '../hooks/useLanguage';

const ClearCart = () => {
  const router = useRouter()
  const {t}=useLanguage()
  return (
    <div className="text-center flex flex-col items-center justify-center my-auto space-y-3">
      <RiShoppingBag3Line size={50} className=" text-orange-500 z-50" />
      <h3 className="font-bold text-lg text-white">{t.emptyh}</h3>
      <p>
        {t.emptyp}
      </p>
      <button className="bg-orange-500 font-[Vazir] hover:bg-orange-600 text-white text-lg py-2 px-3 rounded-full" onClick={()=>router.push('/')}>
        {t.discover}
      </button>
    </div>
  );
}

export default ClearCart