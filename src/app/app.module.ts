import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { PostComponent } from './posts/post.component';
import { HomeComponent } from './home/home.component';
import { SelectTopicComponent } from './home/select-topic/select-topic.component';
import { EnterNewTopicComponent } from './home/enter-new-topic/enter-new-topic.component';


// Allows multiple pages through routing in Angular
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
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
    HomeComponent,
    SelectTopicComponent,
    EnterNewTopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }