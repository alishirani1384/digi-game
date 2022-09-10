import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";
import { FaRegTrashAlt } from "react-icons/fa";
import { Divider, Select } from "@mantine/core";
interface props{
    image: any,
    name:any
}
const CartItem = ({ image, name }:props) => {
  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between">
        <div className="flex">
          <Image
            src={urlFor(image).url()}
            width="200px"
            height="100%"
            objectFit="cover"
            className="rounded-lg"
            alt={name}
          />
          <div className="flex flex-col justify-around ml-3">
            <h3>
              {name.length > 11 ? <span>{name.slice(0, 11)}...</span> : name}
            </h3>
            <FaRegTrashAlt size={20} />
          </div>
        </div>
        <Select
          defaultValue={"1"}
          data={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
          ]}
        />
      </div>
      <Divider my="md" />
    </div>
  );
};

export default CartItem;
