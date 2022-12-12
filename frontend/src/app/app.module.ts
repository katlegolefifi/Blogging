import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { ContactComponent } from './Contact/Contact.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [		
    AppComponent,
    BlogComponent,
    HomeComponent,
      ViewpostComponent,
      ContactComponent,
      RegisterComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
