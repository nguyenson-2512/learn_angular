import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CapitalizePipe } from '../capitalize.pipe';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  providers: [ CapitalizePipe ],
})
export class ChildComponentComponent implements OnInit {
  //child-component => @Input
  //parent-component => template html: [input]= value in parent-component
  @Input() childMessage: string;

  //child => Output, EventEmitter ; @Output() event; method emit this var of @Output()
  //parent => nhan data tu child qua $event
  @Output() newMessageEvent = new EventEmitter<string>();
  addNewMessage(message: string) {
    this.newMessageEvent.emit(message);
  }

  //using pipe
  now = new Date();
  testPipe = "hello man"
  constructor() { }

  ngOnInit(): void {
  }

}
