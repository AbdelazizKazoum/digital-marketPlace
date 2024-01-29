import Api from "@/lib/Api";
import { create } from "zustand";
import { Iproduct } from "@/types";

interface ProductStore {
  products: Iproduct[];
  status: string;

  getProducts: () => void;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  status: "idle",

  getProducts: async () => {
    try {
      const res = await Api.get("/products");
      set({ products: res.data.data, status: "fulffiled" });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductStore;
