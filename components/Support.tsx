import React from "react";
import { BiSupport } from "react-icons/bi";
import { AiOutlineSafety, AiOutlineCloudDownload } from "react-icons/ai";

const Support = () => {
  return (
    <div className="bg-gray-900 w-full flex items-center justify-between p-3 mb-10">
      <div className="flex items-center">
        <BiSupport color="#FF5400" size={50} />
        <div className="flex-col items-center">
          <h3>Customer support</h3>
          <p>Human support 24/7</p>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineSafety color="#FF5400" size={50} />
        <div className="flex-col items-center">
          <h3>Reliable & safe</h3>
          <p>Over 10,000 games</p>
        </div>
      </div>
      <div className="flex items-center">
        <AiOutlineCloudDownload color="#FF5400" size={50} />
        <div className="flex-col items-center">
          <h3>Super fast</h3>
          <p>Instant digital download</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
