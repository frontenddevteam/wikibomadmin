import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  title = 'hello world'
  quiz = { id: 1, category:'mozu', question: 'Inside which HTML element do we put the JavaScript?', answerA: '<javascript>', answerB: '<script>', answerC: '<js>', answerD: '<scripting>', rightAnswer: 'B', explanation: 'no explanation', level: 'easy', user: 'tuyenha', dateCreated: new Date() }; 
  constructor() { }

  ngOnInit() {
  }

}
