import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';

import { AugmentbycolorComponent } from './projects/augmentbycolor/augmentbycolor.component';
import { BwfatComponent } from './projects/bwfat/bwfat.component';
import { CoolshellComponent } from './projects/coolshell/coolshell.component';
import { EasymarkersComponent } from './projects/easymarkers/easymarkers.component';
import { StockkeeperComponent } from './projects/stockkeeper/stockkeeper.component';
import { WebtabsComponent } from './projects/webtabs/webtabs.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'projects/augment-by-color', component: AugmentbycolorComponent },
	{ path: 'projects/bwfat', component: BwfatComponent },
	{ path: 'projects/coolshell', component: CoolshellComponent },
	{ path: 'projects/easymarkers', component: EasymarkersComponent },
	{ path: 'projects/stockkeeper', component: StockkeeperComponent },
	{ path: 'projects/webtabs', component: WebtabsComponent },
	{ path: 'resume', component: ResumeComponent },
	{ path: 'blog', component: BlogComponent },
	{ path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
