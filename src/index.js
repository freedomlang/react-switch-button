/* eslint-disable react/no-children-prop */
import React, { Component } from "react";
import style from "./style.css";

export default class Switch extends Component {
  render() {
    const { theme: { animate='basis' } } = this.props;
    const { button, arc, checkbox, knobs, layer } = style;
    const className4button = `${button} ${style[animate]} ${arc}`;
    return (
      <div className={className4button}>
        <input type="checkbox" className={checkbox} />
        <div className={knobs} />
        <div className={layer} />
      </div>
    );
  }
}
