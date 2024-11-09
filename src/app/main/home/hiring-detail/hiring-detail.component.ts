import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';
import { JsonDataService } from 'src/app/services/json-data.service';

@Component({
  selector: 'app-hiring-detail',
  templateUrl: './hiring-detail.component.html',
  styleUrls: ['./hiring-detail.component.scss']
})
export class HiringDetailComponent {
  activeTab:string = "Front-End-Developer"
  allExpertList: any[] = []
  endExpert: any[] = []
  endTab: any[] = [
    {
      name: "Frontend Development",
      id: "Front-End-Developer"

    },
    {
      name: "UI/UX Design",
      id: "uiux-engineer"

    },
    {
      name: "Backend Development",
      id: "Back-End-Developer"

    },
    {
      name: "Mobile App Development",
      id: "Mob-app-Developer"

    },
    {
      name: "Quality Assurance",
      id: "SQA"

    },
    {
      name: "Full Stack Developer",
      id: "Full-stack-dev"

    },
    {
      name: "Devops Engineer",
      id: "Devops-engineeer"

    },
  ]
  customOptions: OwlOptions = {
    center: true,
    items:3,
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        },

    }
  }
  headertagData: headerDataDto={
    subTitle:"Build Your Offshore Team",
    button:"Let's Start",
    tagline:"Leading IT staff augmentation providers supplying software  engineers <br> and developers to ramp up your  development team quickly while meeting <br> your specific business needs. We have experts from various IT fields on"

  }
  constructor(private jsonService: JsonDataService) {
    this.jsonService.GetAllExperties().subscribe(e => {
      this.allExpertList = e;
      this.getEndsExperts()
    })

  }
  hiringFaq: any = [
    {
      query: "Innovation",
      ans: "Act courageously, experiment, and make bold decisions. We dedicatedly master the power of technology in bespoke ways for our customers, guided by our core values. Achieving sustainable progress through collaborative innovation and shared expertise."
    },
    {
      query: "Dedication",
      ans: "Our commitment goes beyond serving our own business and clients as we strive to have a positive impact on people and communities. Commit to tirelessly delivering precision and perfection."
    },
    {
      query: "Transform",
      ans: "We reimagine processes and systems by offering holistic solutions for superior enterprise value. We enable clients in countries to drive continued growth through innovation, re-imagination, and transformation."
    },
    {
      query: "Delivering value",
      ans: "We don’t believe in adding layers of management, our project teams are assembled to ensure you have the right skill sets at the right level and you communicate directly with the project lead. This ensure we don’t lose focus on delivering results for our clients."
    },
  ]
  faqTog: number = -1
  hiringFaqMehod(i: number) {
    this.faqTog == i ? this.faqTog = -1 :this.faqTog = i
  }

  getEndsExperts(endName: string = "Front-End-Developer") {
    this.activeTab = endName;
    this.endExpert = this.allExpertList.filter(x => x.workend == endName)

  }
}
