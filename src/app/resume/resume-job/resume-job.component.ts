import { Component, Input, OnInit } from '@angular/core';

type jobObject = {
  logoUrl: string,
  position: string,
  time: string,
  company: string,
  location: string,
  desc: string[]
};

@Component({
  selector: 'app-resume-job',
  templateUrl: './resume-job.component.html',
  styleUrls: ['./resume-job.component.scss']
})
export class ResumeJobComponent implements OnInit {

  @Input() jobObj = <jobObject>{};

  constructor() { }

  ngOnInit(): void {
  }

}
