import { Component, OnInit } from '@angular/core';

let apiLoaded = false;

@Component({
  template: '<youtube-player videoId="anpG7GsRtVg" [width]="currentScreenWidth" [height]="currentScreenheight"></youtube-player>',
  selector: 'video-player',
})
export class VideoPlayerComponent implements OnInit {
  currentScreenWidth = 0;
  currentScreenheight= 0;


  ngOnInit() {
    const lm = document.getElementsByClassName('dp-container');
    const test = (+getComputedStyle(lm[1]).paddingRight.split('px')[0]) * 2;
    const sw = ((lm[1] as HTMLElement).offsetWidth - test - 16) / 2;
    this.currentScreenWidth = window.innerWidth > 600 ? (sw  )  : window.innerWidth - 32;
    if(this.currentScreenWidth > 800) 
      this.currentScreenWidth = 800;
    
      this.currentScreenheight = this.currentScreenWidth / 1.64;
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

}
