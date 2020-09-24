import { loadPosts, loadPostsFailure, loadPostsSuccess } from './post.actions';
import { Post } from './../../posts/model/post';
import { Action, createReducer, on, createFeatureSelector } from '@ngrx/store';
import { state } from '@angular/animations';
import { AppState } from '..';


export const postFeatureKey = 'post';

// tslint:disable-next-line: no-empty-interface
export interface PostState {
  post: Post;
  loaded: boolean;
  loading: boolean;
}

export const initialState: PostState = {
  post: null,
  loaded: false,
  loading: false
};


export const postReducer = createReducer(
  initialState,
  // tslint:disable-next-line: no-shadowed-variable
  on(loadPosts, (state) => ({ ...state, loading: true })),

  // tslint:disable-next-line: no-shadowed-variable
  on(loadPostsSuccess, (state, { post }) => {
    return ({ ...state, post, loaded: false, loading: false });
  }),

  // tslint:disable-next-line: no-shadowed-variable
  on(loadPostsFailure, (state) => ({ ...state, loaded: false, loading: false }))


);

export const getPostState = createFeatureSelector<AppState, PostState>('post');
