import {Component, OnInit, Input} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as nipplejs from 'src/assets/lib/nipplejs';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit {
  @Input() homeOption: any;
  joystick;
  options;
  time;
  angle;
  distance;
  goapi = 'http://192.168.1.117:5000/go';
  turnapi = 'http://192.168.1.117:5000/turn';

  constructor(public http: HttpClient) {
  }

  init() {
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

  ngOnInit() {
    this.options = {
      mode: this.homeOption && this.homeOption.mode || 'static',
      size: this.homeOption && this.homeOption.size || 300,
      color: this.homeOption && this.homeOption.color || '#eee',
      position: this.homeOption && this.homeOption.position || {
        left: '50%',
        top: '50%'
      },
      zone: document.getElementById(this.homeOption.zone)
    };
    this.init();
  }
}
