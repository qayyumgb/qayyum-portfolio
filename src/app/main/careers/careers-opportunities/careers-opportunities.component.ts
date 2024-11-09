import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { headerDataDto, jobDetailDTO } from 'src/app/constant/models/headerDataDto';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-careers-opportunities',
  templateUrl: './careers-opportunities.component.html',
  styleUrls: ['./careers-opportunities.component.scss']
})
export class CareersOpportunitiesComponent {

  headertagData: headerDataDto={
    title:"Careers",
    subTitle:"Join Our Team",
    tagline:"Take your software engineering skills to the next level."

  }
  WorkingEnviroment:any = [
    {
      icon:"fa-solid fa-house-laptop",
      title:"Remote Working Facilities",
      detail:"Credibly syndicate enterprise total linkage whereas cost effective innovate state of the art data without multifunctional. "
    },
    {
      icon:"fa-regular fa-clock",
      title:"Flexible Working Hours",
      detail:"Credibly syndicate enterprise total linkage whereas cost effective innovate state of the art data without multifunctional. "

    },
    {
      icon:"fa-solid fa-people-group",
      title:"Friendly Skilled Team",
      detail:"Credibly syndicate enterprise total linkage whereas cost effective innovate state of the art data without multifunctional. "

    },
    {
      icon:"fa-solid fa-briefcase-medical",
      title:"Medical Insurance Facilities",
      detail:"Credibly syndicate enterprise total linkage whereas cost effective innovate state of the art data without multifunctional. "

    },
  ]
  route_service: any;
  jobGrid: any;
  // constructor(private route_service: Router){

  // }
  ngOnint(){

  }

  NavigateToJobDetail(){
    this.route_service.navigateByUrl('job-details');
  }
  jobs?:jobDetailDTO[]
  constructor(private jsonService:JsonDataService) {
    this.jsonService.GetAllJobData().subscribe(x => this.jobGrid =x)
    }
  
}
