import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getAllPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getText() {
    return this.http.get('../assets/hello.txt', {responseType: 'text'})
  }
  getProfile() {
    return this.http.get('https://conduit.productionready.io/api/profiles/eric')
  }
}
