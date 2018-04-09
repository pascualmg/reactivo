import React from 'react';
export default function FunctionalTank(props) {
  console.log('Con una función cualquiera te haces un componente',props );//TODO: borrame.
  const info =
    <div className="tankInfo">
      El tanke tiene:{props.material}
      le cogen : {props.maxCapacity}
      Contenido actual: {props.actualQuantity}
      Está ahora mismo al : {(props.actualQuantity / props.maxCapacity) * 100} %
    </div>;

  const bar =
    <progress className={"tankBar"} max={props.maxCapacity} value={props.actualQuantity}>
    </progress>;

  const Tank =
    <div className={"Tank"}>
      {bar}
      {info}
    </div>;

  return Tank;
};