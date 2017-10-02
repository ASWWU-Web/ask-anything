import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <nav class="navbar  navbar-dark bg-inverse" style="border-radius:0;">
    <div class="float-left text-white small">
        Coded with
        <font color="red">♥</font> by the <a href="https://aswwu.com" target="_blank">ASWWU</a> web team.
        <a href="#top" style="float:right;" class="text-white smooth">Back to Top</a>
    </div>
    </nav>
  `
})

export class AppComponent {

}
