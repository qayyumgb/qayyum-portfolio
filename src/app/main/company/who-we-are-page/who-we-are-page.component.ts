import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-who-we-are-page',
  templateUrl: './who-we-are-page.component.html',
  styleUrls: ['./who-we-are-page.component.scss']
})
export class WhoWeArePageComponent {
  headertagData: headerDataDto={
    title:"about ME",
    subTitle:"I am a developer <br>  that solves complex technical problems",
    // tagline:"And we love doing it"
    
  }
}
