import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestService } from '../../RequestService/request.service';

@Component({
  selector: 'home',
  templateUrl: 'app/routes/home/home.component.html',
  styleUrls:  ['app/routes/home/home.component.css'],
  providers: [ RequestService ]
})

export class HomeComponent {
  question: string = "";
  questions: any[] = [];

  constructor(private rs: RequestService) {
    rs.get("askanything/view", (data) => {
      this.questions = data;
    }, undefined)
  }

  submit() {
    console.log(this.question);
    this.rs.postxwww("/askanything/add", {"question": this.question}, (data) => {
      alert(data.status);
    }, (error) => {
      window.alert(error);
    });
  }
}
