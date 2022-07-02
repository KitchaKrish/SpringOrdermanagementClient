import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateorderComponent } from './createorder/createorder.component';
import { ErrorcmpComponent } from './errorcmp/errorcmp.component';
import { HomeComponent } from './home/home.component';
import { ShoworderComponent } from './showorder/showorder.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {path:'createorder',component:CreateorderComponent},
  {path:'thankyou', component:ThankyouComponent},
  {path:'errorpage', component:ErrorcmpComponent},
  {path:'', component:HomeComponent},
  {path:'showlist', component:ShoworderComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
