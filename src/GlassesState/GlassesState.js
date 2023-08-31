import React, { Component } from "react";
import RenderWithMap from "../RenderWithMap/RenderWithMap";

export default class GlassesState extends Component {
  state = {
    glasses: "",
    name: "",
    desc: "",
  };
  handleChangeGlasses = (Glasses) => {
    this.setState({
      glasses: Glasses.url,
      name: Glasses.name,
      desc: Glasses.desc,
    });
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(./img/background.jpg)`,
          backgroundSize: `cover`,
          height: `100%`,
          backgroundPosition: `center`,
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="container py-5 "
        >
          <div
            style={{
              width: "400px",
            }}
            className="position-relative"
          >
            <img style={{ width: "100%" }} src="./img/model.jpg" />
            <div
              style={{
                width: "100%",
                height: "100%",
                top: "0",
              }}
              className="overlay position-absolute"
            >
              <img
                style={{
                  top: "120px",
                  width: "50%",
                  opacity: "0.7",
                  right: "50%",
                  translate: "50%",
                }}
                className="position-absolute"
                src={this.state.glasses}
              />
              <div
                style={{
                  backgroundColor: "orange",
                  opacity: "0.5",
                  bottom: "0",
                  textAlign: "start",
                  padding: "0 20px",
                }}
                className="position-absolute"
              >
                <h3 className="p-0 m-0" style={{ color: "blue" }}>
                  {this.state.name}
                </h3>
                <p className="p-0 m-0" style={{ color: "white" }}>
                  {this.state.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
        <RenderWithMap handleChange={this.handleChangeGlasses} />
      </div>
    );
  }
}
