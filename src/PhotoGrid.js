import React from 'react';
import Photo from "./Photo";

import {Observable} from 'rxjs';

export default class PhotoGrid extends React.Component {
  arr = ['uno', 'do', 'tre', 'cuatro', 'cinco', 'sei', 'siete', 'ocho', 'nueve', 'die'];
  state = {};
  props = {};

  API_URL = 'https://gist.githubusercontent.com/kutyel/8f2d287ceb0a04bf3edb2e435b07f61d/raw';

  async componentWillMount() {
    try {
      console.log('antes de montar el componente.',);//TODO: borrame.
      const res = await fetch(this.API_URL);
      const posts = await res.json();
      this.setState({posts});
      console.log('this.state', this.state);//TODO: borrame.
      
    } catch (e) {
      console.log('error', e);//TODO: borrame.
    }
  };

  componentDidMount() {

  };

  iteraConUnObservable = function iteraConUnObservable() {
    const flujete$ = this.createObservableFromArray(this.arr);

    const newArr = [];
    flujete$
      .subscribe({
        next: x => {
          console.log('llega', x);
          newArr.push(<span><Photo name={x.item}/>{x.name}</span>)
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