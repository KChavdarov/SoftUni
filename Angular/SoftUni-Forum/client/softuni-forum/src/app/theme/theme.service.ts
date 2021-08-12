import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../shared/interfaces/post';
import { Theme } from '../shared/interfaces/theme';

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) {}

  loadThemes() {
    return this.http.get<Theme[]>(environment.apiUrl + '/api/themes', { withCredentials: true });
  }

  getThemeById(id: string) {
    return this.http.get<Theme>(environment.apiUrl + '/api/themes/' + id, { withCredentials: true });
  }

  createTheme(data: { themeName: string, postText: string; }) {
    return this.http.post<Theme>(environment.apiUrl + '/api/themes/', data, { withCredentials: true });
  }

  createPost(id: string, data: { postText: string; }) {
    return this.http.post<Theme>(environment.apiUrl + '/api/themes/' + id, data, { withCredentials: true });
  }
}
