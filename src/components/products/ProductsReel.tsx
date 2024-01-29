"use client";

import useProductStore from "@/store/product-store";
import { Iproduct } from "@/types";
import React, { useEffect } from "react";

const ProductsReel = () => {
  const { products, getProducts, status } = useProductStore();

  // State

  //laoding
  useEffect(() => {
    getProducts();
  }, []);

  console.log("Products", products);

  return (
    <div>
      <div>
        {status === "fulffiled" &&
          products.map((item, i) => <div>{item.attributes.title}</div>)}
      </div>
    </div>
  );
};

export default ProductsReel;
