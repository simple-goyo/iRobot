import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  joystickOptions = {
    turtleBot: {
      zone: 'turtleBotJoystick',
      mode: 'static',
      position: {left: '20%', top: '50%'},
      color: 'white',
      size: 200
    },
    arm: {
      zone: 'armJoystick',
      mode: 'static',
      position: {left: '20%', top: '50%'},
      color: 'white',
      size: 200
    }
  };

  ngOnInit(): void {
    document.getElementById('turtleBotJoystick').style.display = 'block';
  }
}
