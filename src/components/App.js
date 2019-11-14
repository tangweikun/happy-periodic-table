import React, { Fragment, useState } from "react";
import { elements } from "./_data";
import { Element } from "./Element";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [element, setElement] = useState({});

  let {
    name,
    summary,
    symbol,
    category,
    number,
    source,
    appearance,
    atomic_mass,
    molar_heat,
    density,
    melt,
    boil
  } = element;

  function showInfo(num) {
    setVisible(true);
    setElement(elements[num]);
  }

  function closeInfo() {
    setVisible(false);
  }

  return (
    <div className="wrapper">
      <h1>The Periodic Table of Elements</h1>

      <div id="table">
        {/* 1 - 57 */}
        {Array(57)
          .fill(null)
          .map((_, index) => (
            <Element showInfo={showInfo} num={index + 1} />
          ))}

        {/* 72 - 89 */}
        {Array(18)
          .fill(null)
          .map((_, index) => (
            <Element showInfo={showInfo} num={index + 72} />
          ))}

        {/* 104 - 119 */}
        {Array(16)
          .fill(null)
          .map((_, index) => (
            <Element showInfo={showInfo} num={index + 104} />
          ))}

        {/* 58 - 71 */}
        {Array(14)
          .fill(null)
          .map((_, index) => (
            <Element showInfo={showInfo} num={index + 58} />
          ))}

        {/* 90 - 103 */}
        {Array(14)
          .fill(null)
          .map((_, index) => (
            <Element showInfo={showInfo} num={index + 90} />
          ))}

        {/* Information Table */}
        {visible ? (
          <Fragment>
            <div id="element-box" className={`${category}`}>
              <div className="number">{number}</div>
              <div className="symbol">{symbol}</div>
              <div className="element-name">{name}</div>
            </div>
            <div id="information">
              <div
                onClick={closeInfo}
                className="close-button"
                title="Close Info"
              >
                Close [&times;]
              </div>
              <div>
                <h1 className="big_title">{name}</h1>
                <span className={`cat_name ${category}`}>{category}</span>
                {appearance ? (
                  <div className="appearance">
                    <strong>Appearance:</strong> {appearance}
                  </div>
                ) : (
                  ""
                )}
                <div className="atom_info">
                  <span>Atomic Mass: {atomic_mass} | </span>
                  <span>Density: {density}</span>
                  {molar_heat ? <span> | Molar Heat: {molar_heat}</span> : ""}
                  {melt ? <span> | Melt: {melt}K</span> : ""}
                  {boil ? <span> | Boil: {boil}K</span> : ""}
                </div>
                <div>
                  {summary} ...{" "}
                  <a target="_blank" href={source}>
                    Source
                  </a>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
      <p className="center">2019</p>
    </div>
  );
}
