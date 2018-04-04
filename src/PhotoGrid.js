import React from 'react';
import Photo from "./Photo";

import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

export default class PhotoGrid extends React.Component {
  arr = ['algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo'];

  iteraConUnObservable = function iteraConUnObservable() {
    const flujete$ = this.createObservableFromArray(this.arr);

    const newArr = [];
    flujete$
      .subscribe({
      next: x => {
        newArr.push(<span><Photo name={x.item}/></span>)
      },
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    return newArr;
  };

  /**
   * Crea un observable del array 'arr' marineros.
   * @param arr | El array a observar.
   * @returns {Observable}
   */
  createObservableFromArray = function createObservableFromArray(arr) {
    return Observable.create(function (observer) {
        arr.map(
          (item, i) => observer.next({item: item, i: i})
        );
        observer.complete();
      }
    );
  };
  iteraConUnMap = function iteraconUnMap() {
    const arr = ['uno', 'do', 'tre', 'cuatro', 'cinco', 'sei', 'siete', 'ocho', 'nueve', 'die'];
    return arr.map(
      (item) => <span><Photo name={item}/></span>
    );
  };

  render = () => this.iteraConUnObservable();
}