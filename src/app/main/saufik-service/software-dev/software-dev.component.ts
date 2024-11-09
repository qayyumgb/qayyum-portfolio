import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ServiceDto } from 'src/app/constant/models/serviceDto';
import { servicesData } from 'src/app/constant/static/servicesData';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-software-dev',
  templateUrl: './software-dev.component.html',
  styleUrls: ['./software-dev.component.scss']
})
export class SoftwareDevComponent implements OnInit {
  id:any;
  serviceDetailData:any
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService:JsonDataService) {
    debugger
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Handle route change here
        this.loadComponentData();
      }
    });

  }

  async ngOnInit() {

    console.log('param id',this.id)
    await this.loadComponentData();
    // console.log('services detail',this.serviceDetailData)

  }

async loadComponentData(){
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  this.dataService.GetAllServiceJson().subscribe((item:any) => {
    this.serviceDetailData = item.filter((services:ServiceDto) => services.id === this.id)[0]

  })

}


  faqId:number = 0
  toggleAccordient(getId: any) {
    this.faqId == getId?this.faqId = -1 : this.faqId = getId

  }
  customOptions: OwlOptions = {
    center: true,
    items:6,
    loop:true,
    margin:20,
    nav:false,
    dots:false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:6
        },
        1320:{
            items:6
        }
    }
  }
}
