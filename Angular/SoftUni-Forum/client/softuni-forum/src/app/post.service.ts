import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './shared/interfaces/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts(count?: number) {
    let url = '/api/posts'
    if (count) {
      url += '?limit=' + count
    }
    return this.http.get<Post[]>(url);
  }
}
