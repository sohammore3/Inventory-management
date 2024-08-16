import React from "react";
import { Card, Badge } from "@nextui-org/react";

const WarehouseMap = () => {
  const compartments = [
    { id: 1, status: "filled" },
    { id: 2, status: "filled" },
    { id: 3, status: "filled" },
    { id: 4, status: "danger" },
    { id: 5, status: "filled" },
    { id: 6, status: "filled" },
    { id: 7, status: "filled" },
    { id: 8, status: "warning" },
    { id: 9, status: "filled" },
    { id: 10, status: "filled" },
    { id: 11, status: "filled" },
    { id: 12, status: "success" },
  ];

  const getColor = (status: string) => {
    switch (status) {
      case "filled":
        return "default";
      case "danger":
        return "danger";
      case "warning":
        return "warning";
      case "success":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2
        style={{
          marginBottom: "30px",
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Warehouse Map
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {compartments.map((compartment) => (
          <div
            key={compartment.id}
            style={{
              flex: "1 1 calc(25% - 20px)",
              maxWidth: "calc(25% - 20px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              isHoverable
              isPressable
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Badge
                color={getColor(compartment.status)}
                content={compartment.status.toUpperCase()}
                style={{
                  marginBottom: "15px",
                  fontSize: "1rem",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  background: `linear-gradient(45deg, ${getColor(
                    compartment.status
                  )}50%, ${getColor(compartment.status)}10%)`,
                  color: "#fff",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Compartment {compartment.id}
                </span>
              </Badge>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseMap;
