import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  homeOperation = 'Turtlebot';

  ngOnInit(): void {
    document.getElementById('joystick').style.display = 'block';
    document.getElementById('armbutton').style.display = 'none';
    //  横屏检查
    // const landscape2 = new landscape({
    //   mode: 'landscape',
    //   prefix: 'Shine',
    // });
  }

  operationChanged(e) {
    switch (e) {
      case 'Turtlebot':
        this.homeOperation = 'Turtlebot';
        document.getElementById('joystick').style.display = 'block';
        document.getElementById('armbutton').style.display = 'none';
        break;
      case 'Arm':
        this.homeOperation = 'Arm';
        document.getElementById('joystick').style.display = 'block';
        document.getElementById('armbutton').style.display = 'block';
        break;
    }
  }
}
