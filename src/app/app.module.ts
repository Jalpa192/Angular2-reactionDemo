import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { StatusesService } from './statuses/statuses.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';


// Import the AngularFireModule and the AngularFireDatabaseModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusesComponent } from './statuses/statuses.component';

// Define the firebase database configuration keys, get it from your Firebase application console
export const firebaseConfig = {
  apiKey: "AIzaSyCVpE_xUo_wWR91sYwDMd7Qw3oB923lvaI",
  authDomain: "a2reaction-18164.firebaseapp.com",
  databaseURL: "https://a2reaction-18164.firebaseio.com",
  projectId: "a2reaction-18164",
  storageBucket: "",
  messagingSenderId: "412217019002"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
