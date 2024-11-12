import { Component,OnInit, ViewChild} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClientDTO } from 'src/app/constant/models/headerDataDto';
import { JsonDataService } from 'src/app/services/json-data.service';
import { TypewriterService } from 'src/app/services/typewriter.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild('tw') typewriterElement:any;
  @ViewChild('tw2') typewriterElement2:any;
  @ViewChild('tw3') typewriterElement3:any;

  testtemonial:number[] =[1,2,3]
  customOptions: OwlOptions = {
    center: true,
    items:6,
    loop:true,
    margin:0,
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
            items:5
        },
        1320:{
            items:6
        }
    }
  }
  heroCarousel: OwlOptions = {
    center: true,
    items:1,
    loop:false,
    margin:0,
    nav:true,
    dots:false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 800,
    autoplayHoverPause: true,
    rewind: false,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      },
      1200:{
          items:1
      },
      1320:{
          items:1
      }
  }
  }
  testimonialCarousel: OwlOptions = {
    center: true,
    items:2.3,
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    autoplay: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 1500,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-arrow-left-long"></i>', '<i class="fa fa-arrow-right-long"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2.3
        },
        1200: {
            items: 2.3
        },
        1320: {
            items: 2.3
        }
    }
  }
  clientReviews?:ClientDTO[]
    modalService: any;
constructor(private jsonService:JsonDataService,private typewriterService: TypewriterService) {
this.jsonService.GetAllClientreview().subscribe(x => this.clientReviews =x);

}

currentText: { text: string; color: string } | null = null;
  
titles = [
  { word: 'Building scalable, high-performance applications with the latest web technologies', color: '#3399ff' },
  { word: 'Creating seamless, intuitive interfaces for exceptional user experiences.', color: '#ffda47' },
  { word: 'Crafting modern, responsive websites that bring your brand to life.', color: '#00f8a2' },
  { word: 'Elevate Your Brand with Expert Front-End Development', color: '#ffda47' },
];


ngOnInit(): void {
 
  this.typewriterService.getTypewriterEffect(this.titles).subscribe((text) => {
    this.currentText = text;
  });
}
    isModalOpen = false;
    openModal() {
        this.isModalOpen = true;
        this.modalService.openModal();
    }

    closeModal() {
        this.isModalOpen = false;
    }

    stopPropagation(event: Event) {
        event.stopPropagation();
    }
}