import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AxiosService} from '../../services/axios.service';
import * as nipplejs from 'src/assets/lib/nipplejs';
import * as urlConstant from '../../globals/url.constant';


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

  constructor(public http: HttpClient, private axiosService: AxiosService) {
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
    const goUrl = urlConstant.getRosUrl('go');
    const turnUrl = urlConstant.getRosUrl('turn');
    // 'http://192.168.1.116:5000/go';
    // const turnapi = 'http://192.168.1.116:5000/turn';
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
        this.axiosService.axiosGet(goUrl, {go_speed: goSpeed + ''}).then((data) => {
          console.log('前进', data);
        });
        break;
      case 'down':
        this.axiosService.axiosGet(goUrl, {go_speed: -goSpeed + ''}).then((data) => {
          console.log('后退', data);
        });
        break;
      case 'right':
        this.axiosService.axiosGet(turnUrl, {turn_speed: -turnSpeed + ''}).then((data) => {
          console.log('右转', data);
        });
        break;
      case 'left':
        this.axiosService.axiosGet(turnUrl, {turn_speed: turnSpeed + ''}).then((data) => {
          console.log('左转', data);
        });
        break;
    }
  }

  armOnStart(moveData) {
    const arm1Url = urlConstant.getRosUrl('arm1');
    const arm5Url = urlConstant.getRosUrl('arm5');
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
      this.axiosService.axiosGet(arm5Url, {angle: angle + ''}).then((data) => {
        console.log('arm5', data);
      });
      return;
    }
    if (4.2 < radian && radian < 5.2817) {
      return;
    } else if (radian > 5.2817) {
      radian = radian - 6.2817;
    }
    console.log(distance);
    this.axiosService.axiosGet(arm1Url, {angle: radian + ''}).then((data) => {
      console.log('arm1', data);
    });
  }
}
