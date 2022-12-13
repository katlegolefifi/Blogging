import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Contact/Contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup';
import { AboutComponent } from './about/about.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { ViewposttwoComponent } from './viewposttwo/viewposttwo.component';
import { ViewpostthreeComponent } from './viewpostthree/viewpostthree.component';
import { ViewpostfourComponent } from './viewpostfour/viewpostfour.component';




@NgModule({
  declarations: [		
    AppComponent,
    BlogComponent,
    HomeComponent,
      ContactComponent,
      RegisterComponent,
      LoginComponent,
      AboutComponent,
      ViewpostComponent,
      ViewposttwoComponent,
      ViewpostthreeComponent,
      ViewpostfourComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
