import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-main',
  templateUrl: './resume-main.component.html',
  styleUrls: ['./resume-main.component.scss']
})
export class ResumeMainComponent implements OnInit {

  jobs = [
    {
      logoUrl: 'https://media.glassdoor.com/sqll/333464/wyzant-squarelogo-1472479728930.png',
      position: 'Computer Science Tutor',
      time: 'Aug \'21 - Present',
      company: 'Wyzant',
      location: 'Remote',
      desc: [
        'More than 50 hours tutored, earning an average of 5 stars over 7 reviews',
        'Developed individual tutoring plans according to student needs & catered teaching style to student learning style',
        'Supplemented communication and explanation using effective verbal skills, diagrams, analogies, and examples'
      ]
    },
    {
      logoUrl: 'https://clipground.com/images/continental-tires-logo.jpg',
      position: 'Software Developer Intern',
      time: 'June \'19 - Aug \'19',
      company: 'Continental Automotive',
      location: 'Seguin, TX',
      desc: [
        'Collaborated with an Agile team utilizing scrum techniques',
        'Developed & debugged 3 web projects using a Javascript/Bootstrap frontend and a PHP/MySQL backend',
        'Utilized Git to manage version control for software projects'
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
