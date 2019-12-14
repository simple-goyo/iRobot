import {Component, OnInit} from '@angular/core';
import * as nipplejs from 'src/assets/lib/nipplejs';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit {
  joystick;

  constructor() {
  }

  ngOnInit() {
    this.joystick = nipplejs.create({
      zone: document.getElementById('left'),
      mode: 'static',
      position: {left: '20%', top: '50%'},
      color: 'white',
      size: 200
    });
  }

}
