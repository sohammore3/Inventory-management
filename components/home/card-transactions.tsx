import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";

const items = [
  {
    name: "Cristiano Ronaldo",
    picture: "https://i.pravatar.cc/150?u=cristiano",
    amount: "4500 RS",
    date: "10/08/2024",
  },
  {
    name: "Sergio Ramos",
    picture: "https://i.pravatar.cc/150?u=ramos",
    amount: "4500 RS",
    date: "10/08/2024",
  },
  {
    name: "Karim Benzema",
    picture: "https://i.pravatar.cc/150?u=benzema",
    amount: "4500 RS",
    date: "10/08/2024",
  },
  {
    name: "Casemiro",
    picture: "https://i.pravatar.cc/150?u=modric",
    amount: "4500 RS",
    date: "10/08/2024",
  },
  {
    name: "Toni Kroos",
    picture: "https://i.pravatar.cc/150?u=kroos",
    amount: "4500 RS",
    date: "10/08/2024",
  },
];

export const CardTransactions = () => {
  return (
    <Card className=" bg-default-50 rounded-xl shadow-md px-3">
      <CardBody className="py-5 gap-4">
        <div className="flex gap-2.5 justify-center">
          <div className="flex flex-col border-dashed border-2 border-divider py-2 px-6 rounded-xl">
            <span className="text-default-900 text-xl font-semibold">
              Latest Transactions
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 ">
          {items.map((item) => (
            <div key={item.name} className="grid grid-cols-4 w-full">
              <div className="w-full">
                <Avatar
                  isBordered
                  color="secondary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
              </div>

              <span className="text-default-900  font-semibold">
                {item.name}
              </span>
              <div>
                <span className="text-success text-xs">{item.amount}</span>
              </div>
              <div>
                <span className="text-default-500 text-xs">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};
