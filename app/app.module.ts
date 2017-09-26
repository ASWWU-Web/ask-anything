import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { HomeComponent } from './routes/routes';
import { NavbarComponent } from './shared/navbar.component';
import { FileSelectDirective } from "ng2-file-upload";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FileSelectDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
