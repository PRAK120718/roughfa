import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLearningPlanDtls } from 'src/app/class/learning-plan.model';
import { UserMilestoneDtls } from 'src/app/class/milestone.model';
import { LearningPlanService } from 'src/app/service/learning-plan.service';

@Component({
  selector: 'app-create-learning-plan',
  templateUrl: './create-learning-plan.component.html',
  styleUrls: ['./create-learning-plan.component.css']
})
export class CreateLearningPlanComponent implements OnInit {

  constructor(private appRoute: Router, private learningPlanService : LearningPlanService) {
  }

  ngOnInit(): void {
  }

    // @ViewChild('fileUpload123') fileUploadchild: ElementRef<HTMLElement>;
    errorMsg? : string;
    successMsg? : string;
    fileName? : string = "Project";
    // @Output() newItemEvent = new EventEmitter<string>();
    userMilestoneDtls : UserMilestoneDtls[] = [];
    userMilestoneDtl : UserMilestoneDtls = new UserMilestoneDtls("","","","","");
    userLearningPlanDtls : UserLearningPlanDtls = new UserLearningPlanDtls("Angular","This is great", this.userMilestoneDtls);
    learningPlanDtlsFrm = this.buildLearningPlanDtls();

  buildLearningPlanDtls ()
  {
    let fb:  FormGroup = new FormGroup({});
    fb.addControl("name", new FormControl("", Validators.required));
    fb.addControl("description", new FormControl("", Validators.required));
    fb.addControl("milestone.start_date", new FormControl("", Validators.required));
    fb.addControl("milestone.end_date", new FormControl("", Validators.required));
    fb.addControl("milestone.name", new FormControl("", Validators.required));
    fb.addControl("milestone.status", new FormControl("", Validators.required));
    fb.addControl("milestone.description", new FormControl("", Validators.required));
    return fb;
  }

  onClickLearningPlanDtlsSubmit(data: FormGroup){
    console.log(data);
    console.log(this.learningPlanDtlsFrm);
    console.log(this.userLearningPlanDtls);
    console.log(this.userMilestoneDtl);
    this.userMilestoneDtls.push(this.userMilestoneDtl);
    this.learningPlanService.createLearningPlan(this.userLearningPlanDtls, this.userMilestoneDtls).subscribe((response)=>{
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

  
  onClickCancel(){
    this.appRoute.navigate(['/learning-plans/mylearning-plans']);
  }

}
