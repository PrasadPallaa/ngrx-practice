import { Observable } from 'rxjs';
import { Post } from './../model/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPostsData(): Observable<Post> {
    return this.http.get<Post>(this.url);
  }
}
