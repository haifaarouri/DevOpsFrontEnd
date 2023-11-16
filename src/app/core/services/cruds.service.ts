import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudsService {

  public url = environment.url;

  constructor(private http: HttpClient) { }

  getAll(u: string) {
    return this.http.get<any[]>(this.url + u + '/all');
  }
  getById(u: string, id: number): any {
    return this.http.get<Object>(this.url + u + '/get' + u + '/' + id);
  }
  add(u: string, object: any) {
    return this.http.post(this.url + u + '/add', object);
  }
  update(u: string, object: any) {
    return this.http.put(this.url + u + '/update', object);
  }
}