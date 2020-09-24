import { PostsService } from './../../../posts/services/posts.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { loadPosts, loadPostsFailure, loadPostsSuccess } from './post.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class PostEffects {

  constructor(
    private actions$: Actions,
    private postService: PostsService,
    private router: Router
  ) { }

  loadPostDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      switchMap(action => {
        return this.postService.getPostsData().pipe(
          map(post =>
            loadPostsSuccess({
              post
            })
          ),
          tap(post => console.log('=========================', post)
          ),
          catchError(err => of(loadPostsFailure(err))
          ));
      })
    );
  });

}
