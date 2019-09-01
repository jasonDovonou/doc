import { Component, OnInit } from '@angular/core';
import { Data } from '../Data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.page.html',
})
export class DepartmentPage implements OnInit {
  index: any;
  department: any;
  done: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.index = this.router.url.split(/[//]/)[2];
    this.department = Data.getData()[this.index];
    this.done = true;
  }
  filterBy(prop: string) {
    return this.department.data.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
