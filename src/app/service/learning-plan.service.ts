import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { UserLearningPlanDtls } from '../class/learning-plan.model';
import { UserMilestoneDtls } from '../class/milestone.model';

@Injectable({
  providedIn: 'root'
})
export class LearningPlanService {

  constructor(private myHTTP: HttpClient, private sanitizer : DomSanitizer) { }
  createLearningPlan( userLearningPlan : UserLearningPlanDtls, userMilestoneDtls : UserMilestoneDtls[]) : Observable<any>
  {
    userLearningPlan.milestones = userMilestoneDtls;
    let learning_planservice : string = AppComponent.serviceBaseURl + '/api/lps';
    let data = {
        'name' : userLearningPlan.name,
        'description' : userLearningPlan.description,
        'milestones' : userLearningPlan.milestones
    }
    let headers = {
      'Content-Type' : 'application/json'
    };

        console.log(data);
      return this.myHTTP.post(learning_planservice, data, {headers});
  }

  getLearningPlanData(learning_planId : string)
  {
    let learning_planservice : string = AppComponent.serviceBaseURl + '/api/lps/' + learning_planId;
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.get<UserLearningPlanDtls>(learning_planservice, {headers});
  }

  updateLearningPlanData(userLearningPlan : UserLearningPlanDtls, learning_planId : string)
  {
    let learning_planservice : string = AppComponent.serviceBaseURl + '/api/lps/' + learning_planId;
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.put<UserLearningPlanDtls>(learning_planservice, {headers});
  }
  
  getAllLearningPlans(){
    let learning_planservice : string = AppComponent.serviceBaseURl + '/lps/all';
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.get<any>(learning_planservice, {headers});

  }

  getAllLearningPlansByUser(userId : string){
    let learning_planservice : string = AppComponent.serviceBaseURl + '/lps/user/' + userId;
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.get<any>(learning_planservice, {headers});
  }

  createQueryParam( filter : Object){
      var queryParam : string = "?";
  }

}
