import { PostsService } from '../posts/services/posts.service';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { PostEffects } from './store/posts/post.effects';
import { PostState, postReducer } from './store/posts/post.reducer';


// tslint:disable-next-line: no-empty-interface
export interface AppState {
  post: PostState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  post: postReducer
};

export const ROOT_EFFECTS = [PostEffects];

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
