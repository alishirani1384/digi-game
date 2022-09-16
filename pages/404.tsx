import { useRouter } from "next/router";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  
  return (
    <div className="bg-black z-[1000] fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
      <div className="relative">
        <h1 className="nofound">404</h1>
        <h2 className="absolute bottom-1/3 left-0 right-0 text-white text-2xl font-bold text-center uppercase tracking-[13px] drop-shadow-[0px_2px_0px_#8400ff]">
          page not found
        </h2>
      </div>
      <button onClick={()=>router.push('/')} className="text-xl text-white uppercase border py-4 px-10 hover:text-[#8400ff] hover:border-[#8400ff]">
        Home
      </button>
    </div>
  );
};

export default NotFound;
