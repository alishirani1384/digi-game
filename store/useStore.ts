import create from "zustand";

export const useStore = create((set) => ({
    cartItems: [],
    addToCart:(item: any)=>set((state: { cartItems: any; })=>({cartItems:[...state.cartItems,item]}))
}));
