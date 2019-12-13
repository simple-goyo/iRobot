import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as nipplejs from 'src/assets/lib/nipplejs';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit, OnChanges {
  @Input() joystickMode: any;
  joystickOption;
  joystickOptions = {
    turtleBot: {
      zone: 'joystick-component',
      position: {left: '20%', top: '50%'},
      color: 'white',
      size: 200
    },
    arm: {
      zone: 'joystick-component',
      position: {left: '20%', top: '50%'},
      color: '#a777e3',
      size: 200
    }
  };
  joystick;
  options;
  time;
  angle;
  distance;
  goapi = 'http://192.168.1.117:5000/go';
  turnapi = 'http://192.168.1.117:5000/turn';

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (this.joystickMode) {
      case 'Turtlebot':
        this.joystickOption = this.joystickOptions.turtleBot;
        break;
      case 'Arm':
        this.joystickOption = this.joystickOptions.arm;
        break;
    }
    this.options = {
      mode: this.joystickOption && this.joystickOption.mode || 'static',
      size: this.joystickOption && this.joystickOption.size || 300,
      color: this.joystickOption && this.joystickOption.color || '#eee',
      position: this.joystickOption && this.joystickOption.position || {
        left: '50%',
        top: '50%'
      },
      zone: document.getElementById(this.joystickOption.zone)
    };
    if (undefined === this.joystick) {
      this.initJoystick();
    } else {
      this.updateJoystick();
    }
  }

  initJoystick() {
    // this.joystick.destroy();
    this.joystick = nipplejs.create(this.options);
    this.onListen();
  }

  updateJoystick() {
    this.joystick.destroy();
    this.joystick = nipplejs.create(this.options);
    this.onListen();
  }

  onListen() {
    this.joystick
      .on('start', (evt, data) => {
        this.time = setInterval(() => {
          this.onStart(this.distance, this.angle);
        }, 100);
      })
      .on('move', (evt, data) => {
        if (data.direction) {
          this.angle = data.direction.angle;
          this.distance = data.distance;
        }
      })
      .on('end', (evt, data) => {
        clearInterval(this.time);
        this.onEnd();
      });
  }


  onStart(distance, angle) {
    // console.log('Left:无人机向 => ' + angle + '移动' + distance + '个单位');
    switch (angle) {
      case 'up':
        console.log('up');
        this.http.get(this.goapi).subscribe((response) => {
          console.log(response);
        });
        break;
      case 'right':
        console.log('right');
        this.http.get(this.turnapi).subscribe((response) => {
          console.log(response);
        });
        break;
      case 'left':
        this.http.get(this.turnapi).subscribe((response) => {
          console.log(response);
        });
        console.log('right');
        break;
    }
  }

  onEnd() {
  }
}
