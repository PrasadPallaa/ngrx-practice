import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsDataComponent } from './components/posts-data/posts-data.component';
import { PostsComponent } from './containers/posts.component';


@NgModule({
  declarations: [PostsComponent, PostsDataComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
})
export class PostsModule { }
