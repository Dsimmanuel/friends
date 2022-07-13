import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';

import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ViewFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
