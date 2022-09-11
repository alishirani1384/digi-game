import create from "zustand";

export const useLoginStore = create((set) => ({
  loginModal: false,
  openModal: () =>
    set((state:any)=>({loginModal:state.loginModal?false:true})),
}));
