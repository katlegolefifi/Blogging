import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './Contact/Contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { ViewposttwoComponent } from './viewposttwo/viewposttwo.component';
import { ViewpostthreeComponent } from './viewpostthree/viewpostthree.component';
import { ViewpostfourComponent } from './viewpostfour/viewpostfour.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'viewpost', component: ViewpostComponent},
  {path: 'viewposttwo', component: ViewposttwoComponent},
  {path: 'viewpostthree', component: ViewpostthreeComponent},
  {path: 'viewpostfour', component: ViewpostfourComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
