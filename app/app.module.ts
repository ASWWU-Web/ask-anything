import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

import { HomeComponent, AdminComponent } from './routes/routes';
import { NavbarComponent, AuthTableComponent } from './shared/shared';
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
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ]),
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    NavbarComponent,
    FileSelectDirective,
    AuthTableComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
