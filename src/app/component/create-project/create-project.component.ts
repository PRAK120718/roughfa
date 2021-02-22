import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../service/project.service';
import { UserProjectDtls } from '../../class/project.model';

@Component({
  selector: 'app-create-proj',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  // @ViewChild('fileUpload123') fileUploadchild: ElementRef<HTMLElement>;
  errorMsg? : string;
  successMsg? : string;
  fileName? : string = "Project";
  // @Output() newItemEvent = new EventEmitter<string>();
  userProjectDtls : UserProjectDtls = new UserProjectDtls("Angular","This is great","Programming","College",["One"],new Date(),new Date());
  projectDtlsFrm = this.buildProjectDtls();
  
  buildProjectDtls ()
  {
    let fb:  FormGroup = new FormGroup({});
    fb.addControl("name", new FormControl("", Validators.required));
    fb.addControl("start_date", new FormControl("", Validators.required));
    fb.addControl("end_date", new FormControl("", Validators.required));
    fb.addControl("description", new FormControl("", Validators.required));
    fb.addControl("category", new FormControl("", Validators.required));
    fb.addControl("skills", new FormControl("", Validators.required));
    fb.addControl("type", new FormControl("", Validators.required));
    return fb;
  }
  
  
  constructor(private appRoute: Router, private projectService : ProjectService) {
}



  ngOnInit(): void {

  }

  ngOnDestroy() : void
  {

  }

  ngAfterViewInit()
  {
  }

  onClickCancel(){
    this.appRoute.navigate(['/projects/myprojects']);
  }

  onClickProjectDtlsSubmit(data: FormGroup){
    console.log(data);
    console.log(this.projectDtlsFrm);
    console.log(this.userProjectDtls);
    this.projectService.createProject(this.userProjectDtls).subscribe((response)=>{
      if(response.statusCode == 200)
      {
        console.log(response.content);
      }
      else
      {
        console.log("Error while creation of project");
      }
    });
  }

  fileInputClick(event: Event){
    console.log(event);
  }

  projFileUpload(event : Event){
    console.log(event);
  }
}

