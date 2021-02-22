import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProjectDtls } from 'src/app/class/project.model';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  projects?: UserProjectDtls[];
  constructor(private projectService : ProjectService , private appRoute : Router) { 

  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe((response)=>{

      this.projects = response.userProjects;
      console.log(response);
    })
  }

}
