import React from "react";
import { elements } from "./_data";

export function Element(props) {
  const { num } = props;
  const element = elements[num];

  function openInfo() {
    props.handleShowInfo(props.num);
  }

  return (
    <div
      title={element.name}
      onClick={openInfo}
      className={`element element-${num} ${element.category}`}
    >
      <div className="number">{element.number}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="element-name">{element.name}</div>
    </div>
  );
}
