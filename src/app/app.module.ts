import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TweetLayoutComponent } from './tweet-layout/tweet-layout.component';

import { NgxTweetModule } from 'ngx-tweet';
import { TweetCardComponent } from './tweet-card/tweet-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetLayoutComponent,
    TweetCardComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxTweetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
