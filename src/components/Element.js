import React, { Component, useState } from "react";
import { elements } from "./_data";

export function Element(props) {
  const { num } = props;
  const [hover, setHover] = useState(false);
  let element = elements[num];

  function openInfo() {
    props.showInfo(props.num);
  }

  function onMouseEnter() {
    setHover(true);
  }

  function onMouseLeave() {
    setHover(false);
  }

  return (
    <div
      title={element.name}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={openInfo}
      className={`element element-${num} ${element.category} ${
        hover ? "active" : ""
      }`}
    >
      <div className="number">{element.number}</div>
      <div className="symbol">{element.symbol}</div>
      <div className="element-name">{element.name}</div>
    </div>
  );
}
