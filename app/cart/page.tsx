"use client";

import React from "react";
import Cart from "@/components/addtocard";

const CartPage: React.FC = () => {
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold p-4">My Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
