import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-saufik-services',
  templateUrl: './saufik-services.component.html',
  styleUrls: ['./saufik-services.component.scss']
})
export class SaufikServicesComponent  {
serviceData:any[] = []
services:any

saufikService:any[] = [];
  constructor(private route_service: Router, private jsonService:JsonDataService){
    this.jsonService.GetAllMenuItems().subscribe(x =>{
      this.serviceData = x
      this.getService();
    } )
  }

 getService(){
  let a = this.serviceData.filter(x => x.linkName == "Services")
  this.services = a[0].submenu.sublink;
  console.log(this.services);


 }

}
