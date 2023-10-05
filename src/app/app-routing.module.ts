import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { AddFloraComponent } from './pages/add-flora/add-flora.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthRole } from './models/auth-role.enum';
import { authorizationGuard } from './auth/authorization-guard.guard';
import { ApprovalPageComponent } from './pages/approval-page/approval-page.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: "details/:name", component: DescriptionPageComponent },
  { path: 'add-flora', component: AddFloraComponent, data: { permisson: [AuthRole.ADMIN, AuthRole.AUTHORIZE] }, canActivate: [authorizationGuard] },
  { path: 'profile/:name', component: ProfileComponent },
  { path: 'approve-flora', component: ApprovalPageComponent, data: { permisson: [AuthRole.ADMIN] }, canActivate: [authorizationGuard] },
  { path: 'update-flora/:id', component: AddFloraComponent, data: { permisson: [AuthRole.ADMIN, AuthRole.AUTHORIZE] }, canActivate: [authorizationGuard] },
  {path:'leaderboard',component:LeaderboardComponent},
  {path:'search',component:SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
