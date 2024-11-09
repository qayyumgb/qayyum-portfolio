import { Component } from '@angular/core';
import { headerDataDto } from 'src/app/constant/models/headerDataDto';

@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.scss']
})
export class GlobalPresenceComponent {
  headertagData:headerDataDto = {
    title :"sadfs",
    subTitle :"sdfdsd",
    tagline :"dfasd",
  }
}
