import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieModule } from 'ngx-lottie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TweetLayoutComponent } from './tweet-layout/tweet-layout.component';
import player from 'lottie-web/build/player/lottie_svg';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { NgxTweetModule } from 'ngx-tweet';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { HomeComponent } from './home/home.component';
import { TweetViewComponent } from './tweet-view/tweet-view.component';

import { CarouselModule } from 'primeng/carousel';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    TweetLayoutComponent,
    TweetCardComponent,
    HomeComponent,
    TweetViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxTweetModule,
    LottieModule.forRoot({ player: playerFactory, useCache: true }),
    ButtonModule,
    CardModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
