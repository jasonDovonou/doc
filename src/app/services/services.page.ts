import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../Data';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
})
export class ServicesPage implements OnInit {
  data: any;
  index: string;
  service: any;
  indexServ: string;
  department: any;

  constructor(private router: Router) {
    this.data = Data.getData().sort((a, b) => a['department'] > b['department'] ? 1 : a['department'] === b['department'] ? 0 : -1);
  }

  ngOnInit() {
    this.index = this.router.url.split(/[//]/)[2];
    this.indexServ = this.router.url.split(/[//]/)[3];
    this.department = this.data[this.index];
    this.service = this.department.data.sort((a, b) => a['service'] > b['service'] ? 1 : a['service'] === b['service'] ? 0 : -1)[this.indexServ]
  }
  filterBy(prop: string) {
    return this.service.docteurs.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
