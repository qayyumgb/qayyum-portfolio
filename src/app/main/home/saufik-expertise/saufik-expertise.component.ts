import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-saufik-expertise',
  templateUrl: './saufik-expertise.component.html',
  styleUrls: ['./saufik-expertise.component.scss']
})
export class SaufikExpertiseComponent implements OnInit {
  ngOnInit(): void {
  }

  expertiesDetail:any=[
    {
      name:"Automation",
      icon:"Automationicon-01.svg"
    },
    {
      name:"Health Care",
      icon:"healthcareicon-02.svg"
    },
    {
      name:"Manufacturing",
      icon:"manufacturingicon-03.svg"
    },
    {
      icon:"realestateicon-04.svg ",
      name:"Real Estate"
    }
    ,
    {
      icon:"HRicon-05.svg",
      name:"Human Resource"
    }
    ,
    {
      icon:"educationicon-06.svg",
      name:"Education"
    }
    ,
    {
      icon:"devOpsicon-07.svg",
      name:"Devops"
    }
    ,
    {
      icon:"leadsicon-08.svg",
      name:"Lead Management"
    }
    ,
    {
      icon:"mediaadsicon-09.svg",
      name:"Media Ads"
    }
    ,
    {
      icon:"ecommerceicon-10.svg",
      name:"Ecommerce"
    }
  ]
  expertise:number[] =[1,2,3]
  customOptions: OwlOptions = {
    center: true,
    items:4,
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-arrow-left-long"></i>', '<i class="fa fa-arrow-right-long"></i>'],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      },
      1200:{
          items:4
      },
      1320:{
          items:4
      }
  }
    }
}
