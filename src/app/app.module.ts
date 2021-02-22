import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './component/project/project.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { AllProjectsComponent } from './component/all-projects/all-projects.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { HttpClientModule } from '@angular/common/http';
import { MyLearningPlansComponent } from './component/my-learning-plans/my-learning-plans.component';
import { AllLearningPlansComponent } from './component/all-learning-plans/all-learning-plans.component';
import { CreateLearningPlanComponent } from './component/create-learning-plan/create-learning-plan.component';
import { LearningPlanComponent } from './component/learning-plan/learning-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    MyProjectsComponent,
    AllProjectsComponent,
    CreateProjectComponent,
    MyLearningPlansComponent,
    AllLearningPlansComponent,
    CreateLearningPlanComponent,
    LearningPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
