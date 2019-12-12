import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JoystickComponent } from './components/joystick/joystick.component';
import { ArmbuttonComponent } from './components/armbutton/armbutton.component';
import { SwitchtoolsComponent } from './components/switchtools/switchtools.component';

@NgModule({
  declarations: [
    AppComponent,
    JoystickComponent,
    ArmbuttonComponent,
    SwitchtoolsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
