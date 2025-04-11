import { Component } from '@angular/core';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';
@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './portfolio-skills.component.html',
  styleUrls: ['./portfolio-skills.component.scss']
})
export class PortfolioSkillsComponent {
 headertagData: headerDataDto={
    title:"my skills",
    subTitle:"My Skills are my strength, <br> What ever i do",
    tagline:" I tried 100% to become expert"
    
  }
}
