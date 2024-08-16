import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarehouse, faTruckLoading } from "@fortawesome/free-solid-svg-icons";

export const CardBalance3 = () => {
  return (
    <Card className="xl:max-w-sm bg-[black] rounded-xl shadow-none  px-3 w-full">
      <CardBody className="py-5">
        <div className="flex flex-col items-center">
          <div className="bg-[#2CA2DF] rounded-xl w-full py-2 px-4 text-center flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faWarehouse} className="text-white" />
            <span className="text-white font-bold text-lg">WalSmartFlow</span>
          </div>
          <div className="bg-[black] my-2 rounded-lg w-full py-2 px-4 text-center flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faTruckLoading} className="text-white" />
            <span className="text-white text-sm">
              Walmart's Integrated Warehouse Optimization and Fulfillment System
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
