import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Angular2ModuleYoModule} from './../angular2-module-yo';
import {Demo} from './demo.component';

@NgModule({
  declarations: [Demo],
  imports: [BrowserModule, Angular2ModuleYoModule],
  bootstrap: [Demo],
  providers: []
})
export class DemoModule {}