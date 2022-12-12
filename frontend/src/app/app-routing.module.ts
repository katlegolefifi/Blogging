import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './Contact/Contact.component';
import { HomeComponent } from './home/home.component';
import { ViewpostComponent } from './viewpost/viewpost.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'viewpost', component: ViewpostComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
