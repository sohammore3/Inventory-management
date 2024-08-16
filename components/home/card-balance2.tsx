import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { Community } from "../icons/community";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBox,
  faClipboardList,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

export const CardBalance2 = () => {
  return (
    <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5">
        <div className="flex gap-2.5">
          <FontAwesomeIcon icon={faShippingFast} className="mt-1.5" />
          <div className="flex flex-col">
            <span className="text-default-900">OutGoing </span>
            <span className="text-default-900 text-xs">-500 Iphones</span>
          </div>
        </div>
        <div className="flex gap-2.5 py-2 items-center">
          <span className="text-default-900 text-xl font-semibold">
            ₹12,13,800
          </span>
          <span className="text-danger text-xs">- 4.5%</span>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <div>
              <span className="font-semibold text-success-600 text-xs">
                {"↓"}
              </span>
              <span className="text-xs">11,930</span>
            </div>
            <span className="text-default-900 text-xs">RS</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"↑"}</span>
              <span className="text-xs">54,120</span>
            </div>
            <span className="text-default-900 text-xs">RS</span>
          </div>

          <div>
            <div>
              <span className="font-semibold text-danger text-xs">{"⭐"}</span>
              <span className="text-xs">Order No </span>
            </div>
            <span className="text-default-900 text-xs">VIP</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
