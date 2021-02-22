import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { UserProjectDtls } from '../class/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private myHTTP: HttpClient, private sanitizer : DomSanitizer) { }
  createProject( userProject : UserProjectDtls) : Observable<any>
  {
    let projectservice : string = AppComponent.serviceBaseURl + '/api/projects';
    let data = {
        'projectTitle' : userProject.name,
        'projectDescription' : userProject.description,
        'level' : userProject.type,
        'skills' : userProject.skills,
        'category' : userProject.category,
        'projectStartDate' : userProject.start_date,
        'projectEndDate' : userProject.end_date,
    }
    let headers = {
      'Content-Type' : 'application/json'
    };

        console.log(data);
      return this.myHTTP.post(projectservice, data, {headers});
  }

  getProjectData( projectId : string)
  {
    let projectservice : string = AppComponent.serviceBaseURl + '/api/project/' + projectId;
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.get<UserProjectDtls>(projectservice, {headers});
  }

  updateProjectData(userProject : UserProjectDtls, projectId : string)
  {
    let projectservice : string = AppComponent.serviceBaseURl + '/api/project/' + projectId;
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.put<UserProjectDtls>(projectservice, {headers});
  }
  
  getAllProjects(){
    let projectservice : string = AppComponent.serviceBaseURl + '/api/projects';
    let headers = {
        'Content-Type' : 'application/json'
      };
      return this.myHTTP.get<any>(projectservice, {headers});

  }

  createQueryParam( filter : Object){
      var queryParam : string = "?";
      

  }

}
