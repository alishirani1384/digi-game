import { Container, Stepper } from "@mantine/core";
import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";

const Cart = () => {
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
        <div className="bg-gray-800 w-full min-h-[40vh] h-full my-3 rounded-md flex justify-center">
          <div className="text-center flex flex-col items-center justify-center space-y-3">
            <RiShoppingBag3Line size={50} className=" text-orange-500 z-50" />
            <h3 className="font-bold text-lg text-white">Your cart Is empty</h3>
            <p>
              You didn t add any item in your cart yet. Browse the website to
              find amazing deals!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-2 px-3 rounded-full">
              Discover games
            </button>
          </div>
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
            <button className="w-full bg-orange-500 p-3 rounded-lg text-white font-bold">
              Go to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
