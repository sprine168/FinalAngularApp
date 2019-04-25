import { Component, OnInit, Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from '../home/select-topic/topic.model';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

@Injectable()
export class PostComponent implements OnInit {

  @Input()
  public topics:Topic;

  topic: string = "";
  bodyInformation: string = "";

  private url: string = "http://127.0.0.1:3000/posts";

  // This is where my information is going to be posted to firebase
  constructor(private http: HttpClient) { }

  // creates data for the questions to be answered tab
  postData() {
    this.http.post(this.url, {
      "topic": this.topic,
      "bodyInformation": this.bodyInformation
    })
      .subscribe(
        data => {
          console.log("Put request is successful ", data);
        }),

        httpOptions
  }

  // Users won't be allowed to input data unless it's been filled out
  isValid() {
    let isOK = false;

    isOK = this.topic.length > 0 &&
      this.bodyInformation.length > 0;

    return isOK;
  }

  ngOnInit() {

  }
}
