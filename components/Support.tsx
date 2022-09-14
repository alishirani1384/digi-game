import React from "react";
import { BiSupport } from "react-icons/bi";
import { AiOutlineSafety, AiOutlineCloudDownload } from "react-icons/ai";
import { Divider } from "@mantine/core";
import { useLanguage } from "../hooks/useLanguage";

const Support = () => {
  const {t} = useLanguage()
  return (
    <div className="w-full flex items-center justify-between p-3 my-20">
      <div className="flex items-center flex-col text-center md:flex-row">
        <BiSupport color="#FF5400" size={50} />
        <div className="flex-col items-center">
          <h3 className="text-lg text-white">{t.customer}</h3>
          <p>{t.human}</p>
        </div>
      </div>
      <Divider orientation="vertical" />
      <div className="flex items-center flex-col text-center md:flex-row">
        <AiOutlineSafety color="#FF5400" size={50} />
        <div className="flex-col items-center">
          <h3 className="text-lg text-white">{t.safe}</h3>
          <p>{t.games}</p>
        </div>
      </div>
      <Divider orientation="vertical" />
      <div className="flex items-center flex-col text-center md:flex-row">
        <AiOutlineCloudDownload color="#FF5400" size={50} />
        <div className="flex-col items-center">
          <h3 className="text-lg text-white">{t.fast}</h3>
          <p>{t.digital}</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
