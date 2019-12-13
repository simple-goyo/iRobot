import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-switchtools',
  templateUrl: './switchtools.component.html',
  styleUrls: ['./switchtools.component.css']
})
export class SwitchtoolsComponent implements OnInit {
  @Output() public outer = new EventEmitter();
  operationMode = '';

  constructor() {
  }

  ngOnInit() {
  }

  chooseTurtlebot() {
    this.operationMode = 'turtlebot';
    this.outer.emit(this.operationMode);
  }

  chooseArm() {
    this.operationMode = 'arm';
    this.outer.emit(this.operationMode);
  }

}
