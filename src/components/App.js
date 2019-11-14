import React, { Component, Fragment } from "react";
import { elements } from "./_data";
import { Element } from "./Element";

document.title = "The Periodic Table of Elements";

class App extends Component {
  state = {
    showInfo: false,
    element: {}
  };

  showInfo = num => {
    this.setState({ showInfo: true, element: elements[num] });
  };

  closeInfo = () => {
    this.setState({ showInfo: false });
  };

  render() {
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
    } = this.state.element;

    return (
      <div className="wrapper">
        <h1>The Periodic Table of Elements</h1>

        <div id="table">
          {Array(57)
            .fill(null)
            .map((_, index) => (
              <Element showInfo={this.showInfo} num={index + 1} />
            ))}

          {Array(18)
            .fill(null)
            .map((_, index) => (
              <Element showInfo={this.showInfo} num={index + 72} />
            ))}

          {Array(16)
            .fill(null)
            .map((_, index) => (
              <Element showInfo={this.showInfo} num={index + 104} />
            ))}

          {Array(14)
            .fill(null)
            .map((_, index) => (
              <Element showInfo={this.showInfo} num={index + 58} />
            ))}

          {Array(14)
            .fill(null)
            .map((_, index) => (
              <Element showInfo={this.showInfo} num={index + 90} />
            ))}

          {/* Information Table */}
          {this.state.showInfo ? (
            <Fragment>
              <div id="element-box" className={`${category}`}>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div
                  onClick={this.closeInfo}
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
        <p className="center">2018</p>
      </div>
    );
  }
}

export default App;
