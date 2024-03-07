import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontHomeComponent} from "./front/front-home/front-home.component";
import {BackHomeComponent} from "./back/back-home/back-home.component";
import {PostComponent} from "./back/post/post.component";
import {PostfComponent} from "./front/postf/postf.component";
import {MypostsComponent} from "./front/myposts/myposts.component";

const routes: Routes = [
  { path:'front' , component : FrontHomeComponent },
  { path: 'back', component : BackHomeComponent },
  { path:'post',component :PostComponent},
  { path:'postf',component:PostfComponent},
  { path:'myposts',component:MypostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
