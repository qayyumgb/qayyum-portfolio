import { Component } from '@angular/core';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-saufik-leadership',
  templateUrl: './saufik-leadership.component.html',
  styleUrls: ['./saufik-leadership.component.scss']
})
export class SaufikLeadershipComponent {
  headertagData: headerDataDto={
    title:"Our Leadership",
    subTitle:"We believe in transforming not<br>only processes.",
    tagline:"We create unique and fresh solutions."

  }
leadership:any[] = [
  {
    title:"Moral Compass",
    detail:`We prioritize ethics and taking a stand against discrimination of any kind in our community.
    We want the company, the team, and all of our clients to be on the same page about that.`,
    img:"hand-icon.svg"
  },
  {
    title:"Efficiency",
    detail:`We hold ourselves to high standards, striving for top notch performance and usability in every feature until we find a solution that suits the project's needs.`,
    img:"rocket.svg"
  },
  {
    title:"Innovation",
    detail:`We hold ourselves to high standards, striving for top notch performance and usability in every feature until we find a solution that suits the project's needs.`,
    img:"jupitor.svg"
  },
  {
    title:"Clarity",
    detail:`Clear communication and active listening is key in every project we work on. We ensure
    everyone stays informed and on the same page throughout the project.`,
    img:"message-cloud.svg"
  },
]
}
