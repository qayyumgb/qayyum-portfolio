import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  operSidePanel:boolean = false;

  onToggleChange(event:any){
    event.target.checked?document.body.classList.add('profile-light-mode'):document.body.classList.remove('profile-light-mode')
    console.log(event)
  }
}
