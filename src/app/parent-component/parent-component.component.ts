import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  parentMessage: string = 'Parent here'
  list = []

  addMessage(m: string) {
    this.list.push(m);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
