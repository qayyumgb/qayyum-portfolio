import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(10px)' })),
      transition(':enter', [
        animate('300ms', keyframes([
          style({ opacity: 0, transform: 'translateY(10px)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(5)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ])),
      ]),
      transition(':leave', [
        animate('100ms', keyframes([
          style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateY(5)', offset: 0.5 }),
          style({ opacity: 0, transform: 'translateY(10px)', offset: 1 })
        ])),
      ]),
    ])
  ]
})
export class MenuBarComponent {
  navItems:any[] =[]
  getIndex:number = -1

  househover:boolean = false;
  constructor(private router: Router, private jsonService:JsonDataService){
    this.jsonService.GetAllMenuItems().subscribe(data => this.navItems = data)
  }

  ngOnint(){
    
  }

  changeRoute(getRoute:any){
    this.router.navigate([`${getRoute}`]);
    this.getIndex = -1;
    this.househover = false
  }


  childMenuState = 'hidden';


  isUlVisible = false;

  showSubMenu(index:number) {
    this.getIndex = index
    this.isUlVisible = true;
    this.househover = true
  }
  hideSubMenu() {
    this.getIndex = -1
    this.househover = false
  }



 

}
