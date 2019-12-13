import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-armbutton',
  templateUrl: './armbutton.component.html',
  styleUrls: ['./armbutton.component.css']
})
export class ArmbuttonComponent implements OnInit {
  goapi = 'http://192.168.1.117:5000/go';

  constructor(public http: HttpClient) {
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
    this.http.get(this.goapi).subscribe((response) => {
      console.log(response);
    });
  }


}
