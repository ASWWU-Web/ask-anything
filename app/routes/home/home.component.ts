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
  isLoggedIn: boolean = false;
  question: string = "";
  questions: any[] = [];

  constructor(private rs: RequestService) {
      rs.verify((user) => {
          if(user) {
              this.isLoggedIn = true;
          }
      });

    this.pull();
  }

  submit() {
    console.log(this.question);
    this.rs.postxwww("/askanything/add", {"question": this.question}, (data) => {
      alert(data.status);
    }, (error) => {
      window.alert(error);
    });
  }

  vote(id: string) {
    this.rs.postxwww("/askanything/" + id + "/vote", {}, (data) => {
      this.pull();
    }, (error) => {
      if(error.status == 403) {
        window.alert("You have already voted for this question!")
      }
      else {
        window.alert("An error occurred :(")
      }
    })
  }

  pull() {
    this.rs.get("askanything/view", (data) => {
      this.questions = data;
    }, undefined)
  }
}
