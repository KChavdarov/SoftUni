import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from './shared/interfaces/post';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }

  loadPosts(count?: number) {
    let url = environment.apiUrl + '/api/posts'
    if (count) {
      url += '?limit=' + count
    }
    return this.http.get<Post[]>(url);
  }
}
