import create from "zustand";

export const useStore = create((set) => ({
    cartItems: [],
    addToCart: (item: any) => set((state: { cartItems: any; }) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (item: any) => set((state: { cartItems: any; })=>({cartItems:[...state.cartItems.filter((items: any)=>items.title!==item)]}))
}));
