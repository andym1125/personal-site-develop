import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { ResumeJobComponent } from './resume-job/resume-job.component';



@NgModule({
  declarations: [
    ResumeMainComponent,
    ResumeJobComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResumeModule { }
