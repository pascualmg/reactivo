import React from 'react';
import Photo from "./Photo";


export default class PhotoGrid extends React.Component{


  iteraConUnMap = function iteraConUnMap()
  {
    const arr = ['algo','algo','algo','algo','algo','algo','algo','algo','algo','algo'];
    return arr.map(
      (item) => <span>{item}</span>
    );
  };

  render = () => this.iteraConUnMap();
}