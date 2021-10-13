import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  api_url_get:string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPost () {
    return this.http.get(this.api_url_get);
  }

  postPost (post: Post) {
    return this.http.post(this.api_url_get, post);
  }
}
