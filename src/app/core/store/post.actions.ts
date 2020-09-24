import { Post } from './../../posts/model/post';
import { createAction, props } from '@ngrx/store';

export enum PostActionType {
  loadPostdetails = '[Post] Load Posts',
  loadPostdetailsSuccess = '[Post] Load Posts Success',
  loadPostdetailsFailure = '[Post] Load Posts Failure',
}

export const loadPosts = createAction(
  PostActionType.loadPostdetails,
  props()
);

export const loadPostsSuccess = createAction(
  PostActionType.loadPostdetailsSuccess,
  props<{ post: Post }>()
);

export const loadPostsFailure = createAction(
  PostActionType.loadPostdetailsFailure,
  props<{ error: string }>()
);
