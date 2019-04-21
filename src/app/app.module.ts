import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { PostComponent } from './forum/post/post.component';
import { HomeComponent } from './home/home.component';

// Allows multiple pages through routing in Angular
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'forum', component: ForumComponent },
  { path: 'posts', component: PostComponent }
];

// Allows the array appRoutes to be found by angular
// RouterModule.forRoot(appRoutes)

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }