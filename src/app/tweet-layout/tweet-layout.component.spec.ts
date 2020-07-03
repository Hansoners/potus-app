import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetLayoutComponent } from './tweet-layout.component';

describe('TweetLayoutComponent', () => {
  let component: TweetLayoutComponent;
  let fixture: ComponentFixture<TweetLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
