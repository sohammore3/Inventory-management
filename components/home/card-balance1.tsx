import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faClipboardList,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

export const CardBalance1 = () => {
  return (
    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex gap-2.5">
          <FontAwesomeIcon icon={faBox} className="mt-1" />

          <div className="flex flex-col">
            <span className="text-white">Receiving</span>
            <span className="text-white text-xs">1500 Iphones</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-white text-xl font-semibold">₹15,00,000</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success text-xs">{"↓"}</span>
              <span className="text-xs text-white">100,930</span>
            </div>
            <span className="text-white text-xs">Rs</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"↑"}</span>
              <span className="text-xs text-white">20000</span>
            </div>
            <span className="text-white text-xs">Rs</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"⭐"}</span>
              <span className="text-xs text-white">Order No</span>
            </div>
            <span className="text-white text-xs">VIP</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
