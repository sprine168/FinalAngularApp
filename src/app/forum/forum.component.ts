import { Component, OnInit } from '@angular/core';
import { Information } from './information.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  // object to hold the information for the forum
  info:Information[] = [
    new Information("Type in the topic for your question",
     "Type in your question with as much detail as possible to the problem you are having", 
     "Press the submit button to save your topic and question to the forum")
  ]





  constructor() { }

  ngOnInit() {
  }

}
