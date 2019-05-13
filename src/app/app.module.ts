import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsService } from './services/posts.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
    { path: 'posts', component: PostListComponent },
    { path: 'new', component: NewPostComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: '**', redirectTo: 'posts' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    HeaderComponent,
    NewPostComponent
  ],
imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule, ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
