import Image from "next/image";
import React from "react";
import { urlFor } from "../lib/sanity";
import { FaRegTrashAlt } from "react-icons/fa";
import { Divider, Select } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useStore } from "../store/useStore";
interface Icartitem{
    image: string,
    name:string
}
const CartItem = ({ image, name }: Icartitem) => {
  const { width } = useViewportSize()
  const remove = useStore((state: any) => state.removeFromCart)
  
  const handleRemove = () => {
    remove(name)
  }

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
              {width > 500 ? (
                name
              ) : name.length > 11 ? (
                <span>{name.slice(0, 11)}...</span>
              ) : (
                name
              )}
              
            </h3>
            <FaRegTrashAlt size={20} className="hover:text-orange-500 cursor-pointer" onClick={handleRemove}/>
          </div>
        </div>
        <Select
          className="w-28"
          size="sm"
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
