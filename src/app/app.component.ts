import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.back {\n' +
  '  background-image: url(\'src/assets/imgs/joystick.png\');\n' +
  '  background-size: cover;\n' +
  '}'],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iRobot';
}
