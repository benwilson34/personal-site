import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { WebtabsComponent } from './projects/webtabs/webtabs.component';
import { AugmentbycolorComponent } from './projects/augmentbycolor/augmentbycolor.component';
import { StockkeeperComponent } from './projects/stockkeeper/stockkeeper.component';
import { CoolshellComponent } from './projects/coolshell/coolshell.component';
import { BwfatComponent } from './projects/bwfat/bwfat.component';
import { EasymarkersComponent } from './projects/easymarkers/easymarkers.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ResumeComponent,
    BlogComponent,
    HomeComponent,
    WebtabsComponent,
    AugmentbycolorComponent,
    StockkeeperComponent,
    CoolshellComponent,
    BwfatComponent,
    EasymarkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
