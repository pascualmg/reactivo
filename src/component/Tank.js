import React from 'react';


/**
 * @property this.props.maxCapacity La capacidad máxima del tanque.
 * @property this.props.actualQuantity La capacidad máxima del tanque.
 * @property this.props.material La capacidad máxima del tanque.
 */
export default class Tank extends React.Component {
  render() {
    const info =
      <div className="tankInfo">
        El tanke tiene:{this.props.material}
        le cogen : {this.props.maxCapacity}
        Contenido actual: {this.props.actualQuantity}
        Está ahora mismo al : {(this.props.actualQuantity / this.props.maxCapacity) * 100} %
      </div>;

    const bar =
      <progress className={"tankBar"} max={this.props.maxCapacity} value={this.props.actualQuantity}>
      </progress>;

    const Tank =
      <div className={"Tank"}>
        {bar}
        {info}
      </div>;

    return Tank;
  }
}
