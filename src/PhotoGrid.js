import React from 'react';
import Photo from "./Photo";

import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';


export default class PhotoGrid extends React.Component {
  arr = ['algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo'];

  iteraConUnObservable = function iteraConUnObservable() {
    const arr = ['uno', 'do', 'tre', 'cuatro', 'cinco', 'sei', 'siete', 'ocho', 'nueve', 'die'];

    const flujete$ = this.createObservableFromArray(arr).subscribe({
      next: x => {return <span>{x.item}</span>} ,
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    return arr.map(
      (item) => <span><Photo name={item}/></span>
      );
  };

  /**
   * Crea un observable del array 'arr' marineros.
   * @param arr | El array a observar.
   * @returns {Observable}
   */
  createObservableFromArray = function createObservableFromArray(arr){
      return Observable.create(function (observer) {
          arr.map(
            (item, i) => observer.next({item: item, i: i})
          );
          observer.complete();
        }
      );
    };

  render = () => this.iteraConUnObservable();
}