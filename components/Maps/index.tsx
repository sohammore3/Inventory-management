"use client";

import React from "react";
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import WarehouseMap from "../home/WarehouseMap";
import { OrderTable } from "../table/ordertable";

export const Content = () => (
  <div className="h-full lg:px-6">
    {/* Maps Section */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
      <div className="flex flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Maps</h3>
      </div>
      <WarehouseMap />
    </div>

    {/* Table Section */}
    <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0 max-w-[90rem] mx-auto gap-3">
      <div className="flex flex-wrap justify-between">
        <h3 className="text-center text-xl font-semibold">Incoming Orders</h3>
      </div>
      <OrderTable />
    </div>
  </div>
);
