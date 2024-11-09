import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceDto } from '../constant/models/serviceDto';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
   jsonUrl = '';

  constructor(private http:HttpClient) {


   }


  GetAllServiceJson():Observable<any>{
    return this.http.get<any>('assets/json-files/services.json')
  }

  GetAllMenuItems():Observable<any>{
    return this.http.get<any>("assets/json-files/menu-item.json")
  }

  GetAllExperties():Observable<any>{
    return this.http.get<any>("assets/json-files/saufikExperties.json")
  }
  GetAllProject():Observable<any>{
    return this.http.get<any>("assets/json-files/web-projects-detail.json")
  }
  GetAllMobProject():Observable<any>{
    return this.http.get<any>("assets/json-files/mobileAppsproj.json")
  }
  GetAllClientreview():Observable<any>{
    return this.http.get<any>("assets/json-files/client-testimonial-detail.json")
  }
  GetAllProjectData():Observable<any>{
    return this.http.get<any>("assets/json-files/saufik-project-data.json")
  }
  GetAllJobData() :Observable<any>{
    return this.http.get<any>("assets/json-files/career-job-details.json")
  }
}
