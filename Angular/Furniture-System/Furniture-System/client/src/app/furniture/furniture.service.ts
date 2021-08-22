import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Furniture } from '../models/Furniture';

const routes = {
  create: environment.apiUrl + '/furniture/create',
  details: environment.apiUrl + '/furniture/details/',
  all: environment.apiUrl + '/furniture/all',
  user: environment.apiUrl + '/furniture/user',
  delete: environment.apiUrl + '/furniture/delete/',
};

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http: HttpClient) {}

  getFurnitureDetails(id: string) {
    return this.http.get<Furniture>(routes.details + id);
  }

  getAllFurniture() {
    return this.http.get<Furniture[]>(routes.all);
  };

  createFurniture(data: any): Observable<Furniture> {
    return this.http.post<Furniture>(routes.create, data);
  }

  getMyFurniture() {
    return this.http.get<Furniture[]>(routes.user);
  }

  deleteFurniture(id: string) {
    return this.http.delete(routes.delete + id);
  }
}
