import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../qform/question-base';
import { QuestionControlService, QuestionsService } from '../qform/question-control-service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions!: QuestionBase<any>[];
  form!: FormGroup;
  constructor(
    private qcService: QuestionControlService,

  ) {
    this.questions = QuestionsService.questions;
  }

  ngOnInit(): void {
    this.form = this.qcService.toFromGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
