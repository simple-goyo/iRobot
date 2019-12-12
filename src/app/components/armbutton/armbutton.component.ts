import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-armbutton',
  templateUrl: './armbutton.component.html',
  styleUrls: ['./armbutton.component.css']
})
export class ArmbuttonComponent implements OnInit {

  constructor() {
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
    console.log('x:', x, 'y:', y, 'xc:', xc, 'yc:', yc, 'dx', dx, 'dy', dy);
  }

  mouseup(e) {
    e.target.parentNode.style.setProperty('--tz', '-12px');
  }

  ngOnInit() {
  }

}
