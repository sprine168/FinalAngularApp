import { Component, OnInit } from '@angular/core';
import { Topic } from './select-topic/topic.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public topic: string = "";

  public selectableTopics: Topic[] = [
    new Topic("Data Science"),
    new Topic("Hardware"),
    new Topic("Web Development"),
    new Topic("Cloud Database"),
    new Topic("Angular Support")
  ];

  addTopic(newTopic:Topic){
    this.selectableTopics.push(newTopic);
  }


  constructor() {}

  ngOnInit() {
  }

}
