import { createFeatureSelector, createSelector } from '@ngrx/store';

import { getPostState, PostState } from './post.reducer';

export const getPost = createSelector(
  getPostState,
  (state: PostState) => state.post
);
