import React from "react";
import Empty from "./Empty";
import TemperatureCard from "./TemperatureCard";

export default function MainRow() {
  return (
    <div className="MainRow">
      <Empty />
      <TemperatureCard />
    </div>
  );
}
