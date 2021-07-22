import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './shared/interfaces/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }
  
  LoadLatestPosts() {
    return this.http.get<Post[]>('http://localhost:3000/api/posts?limit=5');
  }
}
