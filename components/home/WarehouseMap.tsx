import React from "react";
import { Card, Chip, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const WarehouseMap = () => {
  const compartments = [
    { id: 1, status: "filled" },
    { id: 2, status: "filled" },
    { id: 3, status: "empty" },
    { id: 4, status: "empty" },
    { id: 5, status: "filled" },
    { id: 6, status: "empty" },
    { id: 7, status: "filled" },
    { id: 8, status: "filled" },
    { id: 9, status: "empty" },
    { id: 10, status: "filled" },
    { id: 11, status: "filled" },
    { id: 12, status: "empty" },
  ];

  const getColor = (status: string) => {
    switch (status) {
      case "filled":
        return "rgba(255, 0, 0, 0.1)"; // Red for filled
      case "empty":
        return "rgba(0, 255, 0, 0.1)"; // Green for empty
      default:
        return "default";
    }
  };

  const getIcon = (status: string) => {
    switch (status) {
      case "filled":
        return faBox;
      case "empty":
        return faBoxOpen;
      default:
        return faBox;
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#18181B",
      }}
      className="rounded-lg"
    >
      {compartments.map((compartment) => (
        <Tooltip
          key={compartment.id}
          content={`Compartment ${compartment.id}: ${compartment.status}`}
          placement="top"
        >
          <Card
            isHoverable
            isPressable
            style={{
              textAlign: "center",
              padding: "15px",
              borderRadius: "12px",
              backgroundColor: getColor(compartment.status),
              width: "120px",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <FontAwesomeIcon
              icon={getIcon(compartment.status)}
              size="lg" // Reduced size
              style={{
                color: compartment.status === "filled" ? "#ff0000" : "#00ff00",
              }}
            />
            <Chip
              size="sm"
              variant="flat"
              color={compartment.status === "filled" ? "danger" : "success"}
              style={{ marginTop: "10px" }}
            >
              <span style={{ fontSize: "0.8rem" }}>
                {compartment.status.toUpperCase()}
              </span>
            </Chip>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginTop: "8px",
                color: "white",
              }}
            >
              {compartment.id}
            </span>
          </Card>
        </Tooltip>
      ))}
    </div>
  );
};

export default WarehouseMap;
