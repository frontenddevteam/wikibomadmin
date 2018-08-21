import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-edit-form',
  templateUrl: './quiz-edit-form.component.html',
  styleUrls: ['./quiz-edit-form.component.css']
})
export class QuizEditFormComponent implements OnInit {
  quiz = { id: 1, category:'mozu', question: 'Inside which HTML element do we put the JavaScript?', answerA: '<javascript>', answerB: '<script>', answerC: '<js>', answerD: '<scripting>', rightAnswer: 'B', explanation: 'no explanation', level: 'easy', user: 'tuyenha', dateCreated: new Date() }; 
  constructor() { }

  ngOnInit() {
  }

}
