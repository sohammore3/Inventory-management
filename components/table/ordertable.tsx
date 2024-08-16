import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Chip,
} from "@nextui-org/react";

const columns = [
  { uid: "productName", name: "Product Name" },
  { uid: "quantity", name: "Quantity" },
  { uid: "suggestedCompartment", name: "Suggested Compartment" },
  { uid: "status", name: "Status" },
];

const orders = [
  {
    productName: "Smartphone",
    quantity: 20,
    suggestedCompartment: "Compartment 3",
    status: "loaded",
  },
  {
    productName: "Laptop",
    quantity: 10,
    suggestedCompartment: "Compartment 8",
    status: "loading",
  },
  {
    productName: "Headphones",
    quantity: 15,
    suggestedCompartment: "Compartment 1",
    status: "loaded",
  },
  {
    productName: "Smartwatch",
    quantity: 30,
    suggestedCompartment: "Compartment 6",
    status: "loading",
  },
  {
    productName: "Tablet",
    quantity: 25,
    suggestedCompartment: "Compartment 10",
    status: "loaded",
  },
];

type Order = {
  productName: string;
  quantity: number;
  suggestedCompartment: string;
  status: string;
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "loaded":
      return "success";
    case "loading":
      return "danger";
    default:
      return "default";
  }
};

export const OrderTable = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Table aria-label="Order Table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "status" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={orders}>
          {(order: Order) => (
            <TableRow key={order.productName}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "status" ? (
                    <Chip
                      size="sm"
                      variant="flat"
                      color={getStatusColor(
                        order[columnKey as keyof Order] as string
                      )}
                    >
                      {order[columnKey as keyof Order]}
                    </Chip>
                  ) : (
                    order[columnKey as keyof Order]
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
