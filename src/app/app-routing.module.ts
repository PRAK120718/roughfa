import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AllLearningPlansComponent } from './component/all-learning-plans/all-learning-plans.component';
import { AllProjectsComponent } from './component/all-projects/all-projects.component';
import { CreateLearningPlanComponent } from './component/create-learning-plan/create-learning-plan.component';
import { CreateProjectComponent } from './component/create-project/create-project.component';
import { LearningPlanComponent } from './component/learning-plan/learning-plan.component';
import { MyLearningPlansComponent } from './component/my-learning-plans/my-learning-plans.component';
import { MyProjectsComponent } from './component/my-projects/my-projects.component';
import { ProjectComponent } from './component/project/project.component';

const routes: Routes = [
  {
    path: 'projects', component: ProjectComponent,
    children:[
    {path: 'all', component: AllProjectsComponent},
    {path: 'create', component: CreateProjectComponent},
    {path: 'myprojects', component: MyProjectsComponent}
    ]
  },
  {
    path: 'learning-plans', component: LearningPlanComponent,
    children:[
    {path: 'all', component: AllLearningPlansComponent},
    {path: 'create', component: CreateLearningPlanComponent},
    {path: 'mylearning-plans', component: MyLearningPlansComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
