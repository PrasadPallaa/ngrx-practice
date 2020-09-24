import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../model/post';
import { AppState } from 'src/app/core';
import { loadPosts } from 'src/app/core/store/posts/post.actions';
import { getPost } from 'src/app/core/store/posts/post.selectors';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post>;

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(getPost);
  }

  ngOnInit(): void {
    this.store.dispatch(loadPosts({}));
  }

}
