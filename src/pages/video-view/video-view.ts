import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ApicallsProvider } from '../../providers/apicalls/apicalls';
import { ServiceProvider } from '../../providers/service/service';
import { SharedProvider } from '../../providers/shared/shared';

import { DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-video-view',
  templateUrl: 'video-view.html',
})
export class VideoViewPage {
  private getVideoURL = ApicallsProvider.getVideoURL;
  private apikey:any = '783a602413d5276c84bfe19cd8ef0fe1';
  private language:any ='en-US';
  private video_key:any={};
 


  private video_id:any;
  private url:any;
  private objectItems:any = {};

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public sanitizer: DomSanitizer, public navParams: NavParams, private service: ServiceProvider, private shared: SharedProvider) {
    this.objectItems = navParams.get("allobj");
    this.video_id = this.objectItems.id;
    console.log(this.objectItems);
    this.getVideo();
  }



  getVideo(){
    let body = new FormData();
    body.append('api_key', this.apikey);
    body.append('language', this.language);
    this.service.getCall(this.getVideoURL+this.video_id+'/videos?api_key=783a602413d5276c84bfe19cd8ef0fe1&language=en-US').map(res => res.json()).subscribe((success) => {
     console.log(success);
      this.video_key = success.results[0].key;
      let url = 'https://www.youtube.com/embed/'+ this.video_key +'?rel=0&autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0';
      this.getSafeUrl(url);
    });    
   }
   
   getSafeUrl(url) {
		this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url);		
	}
}
