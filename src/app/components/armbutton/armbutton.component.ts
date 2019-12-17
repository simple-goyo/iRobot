import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AxiosService} from '../../services/axios.service';
import * as urlConstant from '../../globals/url.constant';

@Component({
  selector: 'app-armbutton',
  templateUrl: './armbutton.component.html',
  styleUrls: ['./armbutton.component.css']
})
export class ArmbuttonComponent implements OnInit {
  arm2Angle = 0;
  arm3Angle = 0;
  arm4Angle = 0;

  constructor(public http: HttpClient, private axiosService: AxiosService) {
  }

  ngOnInit() {
  }

  mousemove(e) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const xc = e.target.getBoundingClientRect().width / 2;
    const yc = e.target.getBoundingClientRect().height / 2;

    const dx = x - xc;
    const dy = y - yc;

    e.target.parentNode.style.setProperty('--rx', `${dy / -1}deg`);
    e.target.parentNode.style.setProperty('--ry', `${dx / 10}deg`);
  }

  mouseleave(e) {
    e.target.parentNode.style.setProperty('--ty', '0');
    e.target.parentNode.style.setProperty('--rx', '0');
    e.target.parentNode.style.setProperty('--ry', '0');
  }

  mousedown(e) {
    e.target.parentNode.style.setProperty('--tz', '-100px');
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const xc = e.target.getBoundingClientRect().width / 2;
    const yc = e.target.getBoundingClientRect().height / 2;

    const dx = x - xc;
    const dy = y - yc;
    this.armMove(e.target.id, dx);
  }

  mouseup(e) {
    e.target.parentNode.style.setProperty('--tz', '-12px');
  }

  armMove(id, dx) {
    console.log(id, dx);
    const change = -(dx / 500);
    let angle = 0;
    switch (id) {
      case 'arm2':
        this.arm2Angle += change;
        if (this.arm2Angle < -2.24) {
          this.arm2Angle = -2.24;
        } else if (this.arm2Angle > 2.24) {
          this.arm2Angle = 2.24;
        }
        angle = this.arm2Angle;
        break;
      case 'arm3':
        this.arm3Angle += change;
        if (this.arm3Angle < -2) {
          this.arm3Angle = -2;
        } else if (this.arm3Angle > 2) {
          this.arm3Angle = 2;
        }
        angle = this.arm3Angle;
        break;
      case 'arm4':
        this.arm4Angle += change;
        if (this.arm4Angle < -1.74) {
          this.arm4Angle = -1.74;
        } else if (this.arm4Angle > 1.74) {
          this.arm4Angle = 1.74;
        }
        angle = this.arm4Angle;
        break;
    }
    // const arm234api = 'http://192.168.1.116:5000/' + id;
    // this.http.get(arm234api, {params: {angle: angle + ''}}).subscribe((response) => {
    //   console.log('arm1', response);
    // });
    const armUrl = urlConstant.getRosUrl(id);
    this.axiosService.axiosGet(armUrl, {angle: angle + ''}).then((data) => {
      console.log('arm', data);
    });
  }


}
