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

  chooseMode(e) {
    this.operationMode = e.currentTarget.title;
    this.outer.emit(this.operationMode);
    document.getElementsByClassName('circle-link-clicked')[0].classList.remove('circle-link-clicked');
    e.currentTarget.classList.add('circle-link-clicked');
  }

}
