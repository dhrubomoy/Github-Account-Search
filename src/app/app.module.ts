import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { ForkedFromComponent }  from './components/profile/forked-from.component';
import { NavbarComponent }  from './components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ProfileComponent, NavbarComponent, ForkedFromComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }