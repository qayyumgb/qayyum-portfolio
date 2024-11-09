import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDTO } from 'src/app/constant/models/headerDataDto';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-web-case-studies',
  templateUrl: './web-case-studies.component.html',
  styleUrls: ['./web-case-studies.component.scss']
})
export class WebCaseStudiesComponent {
projects?:ProjectDTO[]
constructor(private jsonService:JsonDataService) {
this.jsonService.GetAllProject().subscribe(x => {
  this.projects =x
  console.log('projectss',this.projects)
})
  
}
}
