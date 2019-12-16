import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import * as nipplejs from 'src/assets/lib/nipplejs';

@Component({
  selector: 'app-joystick',
  templateUrl: './joystick.component.html',
  styleUrls: ['./joystick.component.css']
})
export class JoystickComponent implements OnInit, OnChanges {
  @Input() joystickMode: any;
  allModeSetting = {
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
  oneModeSetting;
  joystickOptions;
  joystick;
  intervalTime;
  moveData;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (this.joystickMode) {
      case 'Turtlebot':
        this.oneModeSetting = this.allModeSetting.turtleBot;
        break;
      case 'Arm':
        this.oneModeSetting = this.allModeSetting.arm;
        break;
    }
    this.joystickOptions = {
      mode: this.oneModeSetting && this.oneModeSetting.mode || 'static',
      size: this.oneModeSetting && this.oneModeSetting.size || 300,
      threshold: this.oneModeSetting && this.oneModeSetting.threshold || 0.1,
      color: this.oneModeSetting && this.oneModeSetting.color || '#eee',
      position: this.oneModeSetting && this.oneModeSetting.position || {
        left: '50%',
        top: '50%'
      },
      zone: document.getElementById(this.oneModeSetting.zone)
    };
    if (undefined === this.joystick) {
      this.initJoystick();
    } else {
      this.updateJoystick();
    }
  }

  initJoystick() {
    // this.joystick.destroy();
    this.joystick = nipplejs.create(this.joystickOptions);
    this.onListen();
  }

  updateJoystick() {
    this.joystick.destroy();
    this.joystick = nipplejs.create(this.joystickOptions);
    this.onListen();
  }

  onListen() {
    this.joystick
      .on('start', (evt, data) => {
        // console.log('start:', data);
        this.intervalTime = setInterval(() => {
          this.onStart(this.moveData);
        }, 500);
      })
      .on('move', (evt, data) => {
        this.moveData = data;
      })
      .on('end', (evt, data) => {
        // console.log('end:', data);
        clearInterval(this.intervalTime);
        this.onEnd();
      });
  }


  onStart(moveData) {
    switch (this.joystickMode) {
      case 'Turtlebot':
        this.turtlebotOnStart(moveData);
        break;
      case 'Arm':
        this.armOnStart(moveData);
        break;
    }
  }

  onEnd() {
  }

  turtlebotOnStart(moveData) {
    // http
    // const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const goapi = 'http://192.168.1.116:5000/go';
    const turnapi = 'http://192.168.1.116:5000/turn';
    // console.log('Left:无人机向 => ' + angle + '移动' + distance + '个单位');
    console.log(moveData);
    let angle = '';
    if (moveData.direction) {
      angle = moveData.direction.angle;
    } else {
      return;
    }
    const distance = moveData.distance;
    const goSpeed = distance / 200;
    const turnSpeed = distance / 100;
    switch (angle) {
      case 'up':
        this.http.get(goapi, {params: {go_speed: goSpeed + ''}}).subscribe((response) => {
          console.log('前进', response);
        });
        break;
      case 'down':
        this.http.get(goapi, {params: {go_speed: -goSpeed + ''}}).subscribe((response) => {
          console.log('后退', response);
        });
        break;
      case 'right':
        this.http.get(turnapi, {params: {turn_speed: -turnSpeed + ''}}).subscribe((response) => {
          console.log('右转', response);
        });
        break;
      case 'left':
        this.http.get(turnapi, {params: {turn_speed: turnSpeed + ''}}).subscribe((response) => {
          console.log('左转', response);
        });
        break;
    }
  }

  armOnStart(moveData) {
    const arm1api = 'http://192.168.1.116:5000/arm1';
    const arm5api = 'http://192.168.1.116:5000/arm5';
    // console.log('Left:无人机向 => ' + angle + '移动' + distance + '个单位');
    let radian = moveData.angle.radian;
    const distance = moveData.distance;
    console.log(moveData);
    if (distance < 80) {
      const pressure = moveData.pressure;
      let angle = 0;
      angle -= (pressure - 10) / 4;
      if (angle < -2.5) {
        angle = -2.5;
      } else if (angle > 0) {
        angle = 0;
      }
      // document.getElementById('pressure').innerText = pressure + '==' + angle + '';
      this.http.get(arm5api, {params: {angle: angle + ''}}).subscribe((response) => {
        console.log('arm1', response);
      });
      return;
    }
    if (4.2 < radian && radian < 5.2817) {
      return;
    } else if (radian > 5.2817) {
      radian = radian - 6.2817;
    }
    console.log(distance);
    this.http.get(arm1api, {params: {angle: radian + ''}}).subscribe((response) => {
      console.log('arm1', response);
    });
  }
}
