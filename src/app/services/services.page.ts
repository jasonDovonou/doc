import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../Data';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
})
export class ServicesPage implements OnInit {
  index: string;
  service: any;
  indexServ: string;
  department: any;
  faCalendarAlt = faCalendarAlt;

  constructor(private router: Router) { }

  ngOnInit() {
    this.index = this.router.url.split(/[//]/)[2];
    this.indexServ = this.router.url.split(/[//]/)[3];
    this.department = Data.getData()[this.index];
    this.service = this.department.data.sort((a, b) => a['service'] > b['service'] ? 1 : a['service'] === b['service'] ? 0 : -1)[this.indexServ]
  }
  filterBy(prop: string) {
    return this.service.docteurs.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
