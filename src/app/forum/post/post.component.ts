import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from './posts.interface';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


@Injectable()
export class PostComponent implements OnInit {

  topic: string;
  bodyInformation: string;

  private url: string = "http://127.0.0.1:3000/posts";

  // This is where my information is going to be posted to firebase
  constructor(private http: HttpClient) {}

  postData() {
    this.http.post(this.url, {
      "topic": this.topic,
      "bodyInformation": this.bodyInformation
    })
      .subscribe(
        data => {
          console.log("Put request is successful ", data);
        });
  }

  ngOnInit() {
  }
}
