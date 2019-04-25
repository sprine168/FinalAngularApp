import { Component, OnInit, Input } from '@angular/core';
import { Topic } from './topic.model';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.css']
})
export class SelectTopicComponent implements OnInit {

  @Input()
  public topics:Topic;

  constructor() { }

  ngOnInit() {
  }

}
