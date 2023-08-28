import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { AddFloraComponent } from './pages/add-flora/add-flora.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomePageComponent},
  {path:"details/:name",component:DescriptionPageComponent},
  {path:'add-flora',component:AddFloraComponent},
  {path:'profile/:name',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
