import { Component } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { ProjectDTO } from 'src/app/constant/models/headerDataDto';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-web-case-studies',
  templateUrl: './web-case-studies.component.html',
  styleUrls: ['./web-case-studies.component.scss']
})
export class WebCaseStudiesComponent {
projects?:ProjectDTO[];
 customOptions: OwlOptions = {
    center: true,
    items:1,
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],

  }
constructor(private jsonService:JsonDataService) {
this.jsonService.GetAllProject().subscribe(x => {
  this.projects =x
  console.log('projectss',this.projects)
})
  
}
}
