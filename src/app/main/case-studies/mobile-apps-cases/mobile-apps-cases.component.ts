import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectDTO } from 'src/app/constant/models/headerDataDto';
import { JsonDataService } from 'src/app/services/json-data.service';


@Component({
  selector: 'app-mobile-apps-cases',
  templateUrl: './mobile-apps-cases.component.html',
  styleUrls: ['./mobile-apps-cases.component.scss']
})
export class MobileAppsCasesComponent {
  projects?:ProjectDTO[]
  constructor(private jsonService:JsonDataService) {
    this.jsonService.GetAllMobProject().subscribe(x => {
      this.projects =x
      console.log('projectss',this.projects)
    })
      
    }
}
