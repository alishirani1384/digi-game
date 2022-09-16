import Image from "next/image";
import React from "react";
import { useLanguage } from "../hooks/useLanguage";

const Cards = () => {
  const {t}=useLanguage()
  return (
    <>
      <div className="mt-14 flex justify-between items-center">
        <h2>Categories</h2>
        <button className="bg-gray-600 font-['Vazir'] rounded-full p-2 hover:bg-gray-700 text-white">
          {t.viewAll}
        </button>
      </div>

      <div className="my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="shadow-2xl relative flex flex-row-reverse items-center">
          <Image
            src="/fps.png"
            width="166px"
            height="175px"
            className="absolute"
          />
          <h2 className="absolute left-2">FPS</h2>
        </div>
        <div className="shadow-2xl relative flex flex-row-reverse items-center">
          <Image
            src="/fighting.png"
            width="166px"
            height="175px"
            className="absolute"
          />
          <h2 className="absolute left-2">FIGHTING</h2>
        </div>
        <div className="shadow-2xl relative flex flex-row-reverse items-center">
          <Image
            src="/vr.png"
            width="166px"
            height="175px"
            className="absolute"
          />
          <h2 className="absolute left-2">VR</h2>
        </div>
        <div className="shadow-2xl relative flex flex-row-reverse items-center">
          <Image
            src="/action.png"
            width="166px"
            height="175px"
            className="absolute"
          />
          <h2 className="absolute left-2">ACTION</h2>
        </div>
      </div>
    </>
  );
};

export default Cards;
