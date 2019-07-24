import { Component } from '@angular/core';
import { Data } from '../Data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {
  data = [];
  constructor() {
    this.data = Data.getData();
  }
  filterBy(prop: string) {
    return this.data.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
