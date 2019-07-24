import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from '../Data';
import { Images } from '../Images';

@Component({
  selector: 'app-docteur',
  templateUrl: './docteur.page.html',
})
export class DocteurPage implements OnInit {
  data: any;
  index: string;
  service: any;
  indexDoc: string;
  doc: any;
  indexServ: string;
  department: any;
  image: string;

  constructor(private router: Router) {
    this.data = Data.getData().sort((a, b) => a['department'] > b['department'] ? 1 : a['department'] === b['department'] ? 0 : -1);
  }

  ngOnInit() {
    this.index = this.router.url.split(/[//]/)[2];
    this.indexServ = this.router.url.split(/[//]/)[3];
    this.indexDoc = this.router.url.split(/[//]/)[4];
    this.department = this.data[this.index];
    this.service = this.department.data.sort((a, b) => a['service'] > b['service'] ? 1 : a['service'] === b['service'] ? 0 : -1)[this.indexServ]
    this.doc = this.service.docteurs.sort((a, b) => a['name'] > b['name'] ? 1 : a['name'] === b['name'] ? 0 : -1)[this.indexDoc];
    this.image = "assets/money/" + Images.getImage(this.doc.name.replace(/-/g, '').replace(/\s/g, '').toUpperCase(), this.doc.firstname.replace(/-/g, '').replace(/\s/g, '').toUpperCase());
  }
}
