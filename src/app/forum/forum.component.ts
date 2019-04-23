import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  postData: any = [];

  constructor() { }

  // When the page loads, run an ajax request to pull out the data.
  // we want the response of the response we get back.
  // and we want the variable to take o nthe data of response
  ngOnInit() {
    
    const getData = ajax('http://localhost:3000/posts');

    getData.subscribe(response => {
      this.postData = response.response;
      console.log(response.status);
      console.log(this.postData);
    });

  }

}
