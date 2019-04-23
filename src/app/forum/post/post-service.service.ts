import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  topic: string;
  bodyInformation: string;

  private url:string = "http://127.0.0.1:3000/posts";


  // This is where my information is going to be posted to firebase
  constructor(httpClient: HttpClient){

  }

}
