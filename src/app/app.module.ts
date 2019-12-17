import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AxiosService} from './services/axios.service';
import {RecordService} from './services/record.service';

import {AppComponent} from './app.component';
import {JoystickComponent} from './components/joystick/joystick.component';
import {ArmbuttonComponent} from './components/armbutton/armbutton.component';
import {SwitchtoolsComponent} from './components/switchtools/switchtools.component';
import {RecordbuttonComponent} from './components/recordbutton/recordbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    JoystickComponent,
    ArmbuttonComponent,
    SwitchtoolsComponent,
    RecordbuttonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AxiosService, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
