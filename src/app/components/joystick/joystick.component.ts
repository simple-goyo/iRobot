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
        }, 100);
      })
      .on('move', (evt, data) => {
        this.moveData = data;
        // if (data.direction) {
        //   this.angle = data.direction.angle;
        //   this.distance = data.distance;
        // }
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
    const angle = moveData.direction.angle;
    const distance = moveData.distance;
    console.log(distance);
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
    const goapi = 'http://192.168.1.116:5000/arm1';
    // console.log('Left:无人机向 => ' + angle + '移动' + distance + '个单位');
    const angle = moveData.direction.angle;
    console.log(moveData);
    this.http.get(goapi, {params: {angle: angle + ''}}).subscribe((response) => {
      console.log('前进', response);
    });
  }
}
