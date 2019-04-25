import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../select-topic/topic.model';

@Component({
  selector: 'app-enter-new-topic',
  templateUrl: './enter-new-topic.component.html',
  styleUrls: ['./enter-new-topic.component.css']
})
export class EnterNewTopicComponent implements OnInit {

  topic: Topic;

  newTopic: string = "";

  @Output()
  sendTopicEntryEvent = new EventEmitter<Topic>();

  sendTopic(){
    this.sendTopicEntryEvent.emit(this.topic);
  }

  enterTopic(){
    
      this.topic = new Topic(this.newTopic);
      console.log("New Topic Created");

      // Resetting the field
      this.newTopic = "";

      this.sendTopic();

  }

  

  constructor() { }

  ngOnInit() {
  }

}
