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
      console.log("data : ", res.data);
      const productsDes = res.data.data.map((item, i) => {
        return {
          title: item.attributes,
          description: item.description,
          price: number,
          banner: string,
          rating: number,
          category: item.category,
        };
      });
      console.log("products after des : ", productsDes);
      set({ products: res.data.data, status: "fulffiled" });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductStore;
