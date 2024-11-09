import { Component } from '@angular/core';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-saufik-benefits',
  templateUrl: './saufik-benefits.component.html',
  styleUrls: ['./saufik-benefits.component.scss']
})
export class SaufikBenefitsComponent {
  headertagData:headerDataDto = {
    title :"Our Benefits",
    subTitle :"We support our employees to achieve <br> their best to enhance  work <br> experience. ",
    // tagline :"but your overall well-being",
  }
}
