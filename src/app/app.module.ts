import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DescriptionPageComponent } from './pages/description-page/description-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SummaryPipe } from './pipe/summery.pipe';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { AddFloraComponent } from './pages/add-flora/add-flora.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { PhotoUploadPreviewComponent } from './components/photo-upload-preview/photo-upload-preview.component';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthConfigModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
