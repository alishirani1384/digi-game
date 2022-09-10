import { Container, Stepper } from "@mantine/core";
import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import CartItem from "../components/CartItem";
import ClearCart from "../components/ClearCart";
import { useStore } from "../store/useStore";

const Cart = () => {
  const cartItems = useStore((state: any) => state.cartItems)
  const items:any = Array.from(new Set(cartItems))
  console.log(items);
  
  
  return (
    <div className="my-10">
      <div className="mx-auto">
        <Stepper color="orange" size="sm" active={0}>
          <Stepper.Step
            label="Shopping cart"
            className="flex-col space-y-2 md:flex-row md:space-y-0"
          />
          <Stepper.Step
            label="Payment"
            className="flex-col md:space-y-0 space-y-2 md:flex-row"
          />
          <Stepper.Step
            label="Game activation"
            className="flex-col md:space-y-0 space-y-2 md:flex-row"
          />
        </Stepper>
      </div>
      <div className="my-10">
        <h2>Cart</h2>
        <div className="bg-gray-800 w-full min-h-[40vh] h-full my-3 rounded-md flex flex-col justify-start">
          {items.length > 0 ? items.map((item:any, index:number) => <CartItem key={index} image={item.images[0].asset._ref} name={item.title} />):<ClearCart/>}
        </div>
      </div>
      <div className="mb-24">
        <h2>Summary</h2>
        <div className="bg-gray-800 w-full min-h-[20vh] h-full my-3 rounded-md flex">
          <div className="w-full p-5 flex flex-col space-y-3">
            <h3 className="flex justify-between w-full">
              Official price <span className="text-white">$167</span>
            </h3>
            <h3 className="flex justify-between w-full">
              Discount <span className="text-white">-$167</span>
            </h3>
            <h2 className="flex justify-between">
              Total <span className="text-white">$116</span>
            </h2>
            <button className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-lg text-white font-bold">
              Go to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
