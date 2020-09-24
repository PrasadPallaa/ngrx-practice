import { PostsService } from './../posts/services/posts.service';
import { environment } from './../../environments/environment';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS, metaReducers, ROOT_EFFECTS } from '.';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(ROOT_EFFECTS),
  ],
  providers: [PostsService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {

    if (parentModule) {
      throw new Error('Core module is already loaded. Import it in the App module only');
    }

  }
}
