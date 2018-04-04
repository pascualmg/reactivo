import React from 'react';
import Photo from "./Photo";

import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

/**
 * Crea un observable del array 'arr' marineros.
 * @param arr | El array a observar.
 * @returns {Observable}
 */
function createObservableFromArray(arr) {
  return Observable.create(function (observer) {
      arr.map(
        (item, i) => observer.next({item: item, i: i})
      );
      observer.complete();
    }
  );
};
export default class PhotoGrid extends React.Component {


  iteraConUnMap = function iteraConUnMap() {
    const arr = ['algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo', 'algo'];

    const flujete$ = createObservableFromArray(arr).subscribe({
      next: x => console.log('got value ' + x.item + x.i),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    return arr.map(
      (item) => <span><Photo name={item}/></span>
    );
  };

  render = () => this.iteraConUnMap();
}