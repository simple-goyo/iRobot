import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  homeOperation = 'turtlebot';

  ngOnInit(): void {
    document.getElementById('joystick').style.display = 'block';
    document.getElementById('armbutton').style.display = 'none';
  }

  operationChanged(e) {
    switch (e) {
      case 'turtlebot':
        this.homeOperation = 'turtlebot';
        document.getElementById('joystick').style.display = 'block';
        document.getElementById('armbutton').style.display = 'none';
        break;
      case 'arm':
        this.homeOperation = 'arm';
        document.getElementById('joystick').style.display = 'block';
        document.getElementById('armbutton').style.display = 'block';
        break;
    }
  }
}
