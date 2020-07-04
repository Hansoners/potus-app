import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-layout',
  templateUrl: './tweet-layout.component.html',
  styleUrls: ['./tweet-layout.component.scss']
})
export class TweetLayoutComponent implements OnInit {
  tweets;
  idx = 1;
  constructor(private service: TweetService) { }
  ngOnInit(): void {
    this.service.getTweets().subscribe(data => {
      this.tweets = data.tweets;
    });
  }
  loadMore() {
    this.idx += 5;
  }

}
