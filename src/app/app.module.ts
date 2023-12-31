import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './pipe/summery.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { AddFloraComponent } from './pages/add-flora/add-flora.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { PhotoUploadPreviewComponent } from './components/photo-upload-preview/photo-upload-preview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { ApprovalPageComponent } from './pages/approval-page/approval-page.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { BadgePipe } from './pipe/badge.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { UserNamePipe } from './pipe/user-name.pipe';
import { StartPageComponent } from './pages/start-page/start-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    InfoCardComponent,
    HomePageComponent,
    DescriptionPageComponent,
    SummaryPipe,
    CapitalizePipe,
    AddFloraComponent,
    PhotoUploadPreviewComponent,
    ProfileComponent,
    ApprovalPageComponent,
    LeaderboardComponent,
    BadgePipe,
    CommentComponent,
    UserNamePipe,
    StartPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthConfigModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}

  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
