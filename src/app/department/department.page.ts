import { Component, OnInit } from '@angular/core';
import { Data } from '../Data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
})
export class DepartmentPage implements OnInit {
  data: any;
  index: any;
  department: any;
  done: boolean;

  constructor(private router: Router) {
    this.data = Data.getData().sort((a, b) => a['department'] > b['department'] ? 1 : a['department'] === b['department'] ? 0 : -1);
  }

  ngOnInit() {
    this.index = this.router.url.split(/[//]/)[2];
    this.department = this.data[this.index];
    this.done = true;
  }
  filterBy(prop: string) {
    return this.department.data.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
