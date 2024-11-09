import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-opportunities-detail',
  templateUrl: './opportunities-detail.component.html',
  styleUrls: ['./opportunities-detail.component.scss']
})
export class OpportunitiesDetailComponent {
  id:any;
  JobDetailData:any
  jobs:any
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
    this.dataService.GetAllJobData().subscribe((item:any) => {
     this.JobDetailData = item.filter((jobs:any) => jobs.id === this.id)[0]
      console.log('job detail data',this.JobDetailData)
    })


  }
}
