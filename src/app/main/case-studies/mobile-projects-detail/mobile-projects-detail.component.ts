import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-mobile-projects-detail',
  templateUrl: './mobile-projects-detail.component.html',
  styleUrls: ['./mobile-projects-detail.component.scss']
})
export class MobileProjectsDetailComponent {
  id:any;
  projectDetailData:any
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService:JsonDataService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Handle route change here
        this.loadComponentData();
      }
    });

  }
ngOnInit(): void {
  this.loadComponentData();
}
  async loadComponentData(){
     this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.GetAllMobProject().subscribe((item:any) => {
     this.projectDetailData = item.filter((projects:any) => projects.id === this.id)[0]
      console.log('project detail data',this.projectDetailData)
    })


  }
}
