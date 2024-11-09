import { Component } from '@angular/core';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-saufik-accomplishments',
  templateUrl: './saufik-accomplishments.component.html',
  styleUrls: ['./saufik-accomplishments.component.scss']
})
export class SaufikAccomplishmentsComponent {
 headertagData: headerDataDto={
    title:"Our Accomplishments",
    subTitle:"Each new time you work on a project<br>you get something new to learn.",
    tagline:"Join & grow with our team."
    
  }
}
