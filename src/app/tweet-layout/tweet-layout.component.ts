import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TweetService } from '../tweet.service';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-tweet-layout',
  templateUrl: './tweet-layout.component.html',
  styleUrls: ['./tweet-layout.component.scss']
})
export class TweetLayoutComponent implements OnInit {
  tweets;
  idx = 1;
  loading = true;
  options: AnimationOptions = {
    path: '/assets/loading.json'
  };

  constructor(private service: TweetService) { }
  ngOnInit(): void {
    this.service.getTweets().subscribe(data => {
      this.tweets = data.tweets;
      if (this.tweets) this.loading = false;
    });
  }
  loadMore() {
    this.idx += 3;
  }

}
