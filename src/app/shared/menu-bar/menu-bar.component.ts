import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent {
  navItems:any[] =[{'linkName':'Home'},{'linkName':'Projects'},{'linkName':'About'},{'linkName':'Skills'}]
  getIndex:number = -1

  househover:boolean = false;
  constructor(private router: Router, private jsonService:JsonDataService){
    
  }

  ngOnint(){
    
  }

  changeRoute(getRoute:any){
    this.router.navigate([`${getRoute}`]);
    this.getIndex = -1;
    this.househover = false
  }


  childMenuState = 'hidden';

}
