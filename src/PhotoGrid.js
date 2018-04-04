import React from 'react';
import Photo from "./Photo";

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

export default class PhotoGrid extends React.Component{
  iteraConUnMap = function iteraConUnMap() {
    const arr = ['algo','algo','algo','algo','algo','algo','algo','algo','algo','algo'];

    return arr.map(
      (item) => <span>{item}</span>
    );
  };

  render = () => this.iteraConUnMap();
}