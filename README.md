# IoT-Based Intelligent Inventory Management System

This project implements an IoT-enabled inventory management solution enhanced with Machine Learning (ML) to detect anomalies such as spoilage, theft, misuse, and overstocking. The system leverages real-time sensor data, cloud infrastructure, and predictive analytics to support smarter, data-driven inventory decisions.

---

## Objective

To develop a scalable, real-time inventory monitoring system that uses IoT sensors and ML algorithms to automatically detect abnormal patterns in stock behavior, reduce human intervention, and improve inventory efficiency.

---

## System Architecture

**Core Components:**

- **IoT Device:** ESP32 microcontroller for sensor integration and data transmission.
- **Sensors:** Load sensors, temperature sensors, and shelf sensors for monitoring physical inventory conditions.
- **Cloud Services:** AWS IoT Core for device communication, AWS Lambda for serverless data processing.
- **ML Model:** Trained on historical data to detect anomalies and generate alerts.
- **Database & Dashboard:** Stores processed data and provides a real-time interface for users.

---

## Data Flow

1. Sensors connected to the ESP32 collect inventory metrics.
2. Data is transmitted to AWS IoT Core via MQTT protocol.
3. AWS Lambda processes the incoming data stream.
4. Cleaned data is passed to an ML inference layer.
5. Predictions and anomaly flags are stored and visualized on the dashboard.

---

## Use Cases

- **Food and Beverage:** Real-time detection of spoilage or overstocking in restaurant and hotel inventories.
- **Pharmaceutical:** Monitoring cold-chain logistics to identify temperature fluctuations.
- **Retail and Warehousing:** Shelf-level monitoring and anomaly alerting for better stock turnover.

---

## Benefits

- Reduces losses due to spoilage and theft.
- Supports proactive inventory replenishment.
- Enables remote and automated monitoring.
- Scalable architecture suitable for multi-location deployment.

---

## Limitations

- Initial setup requires investment in hardware and cloud services.
- Dependent on reliable internet connectivity.
- ML model performance may degrade over time and require periodic retraining.

---

## Future Enhancements

- Integration of camera-based image processing for spoilage detection.
- Implementation of blockchain for immutable inventory logs.
- Multi-class anomaly classification (e.g., spoilage vs theft).
- Expansion to multi-warehouse and multi-vendor environments.

---



