import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component'; /*Import class appComponent for app.component.js/ts*/
import { FormsModule}	 from '@angular/forms';
import { DndModule }	 from 'ng2-dnd';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DndModule.forRoot() ], /*List of all modules*/
  declarations: [ AppComponent ], /*List of all grafic components*/
  bootstrap:    [ AppComponent ] /*First module to start*/
})

export class AppModule { }