import { Component } from '@angular/core';
import { NavController, MenuController, LoadingController } from 'ionic-angular';
import { ApicallsProvider } from '../../providers/apicalls/apicalls';
import { ServiceProvider } from '../../providers/service/service';
import { SharedProvider } from '../../providers/shared/shared';

import { VideoViewPage } from '../video-view/video-view';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private upcoming_moviesURL = ApicallsProvider.upcoming_moviesURL;
  private top_ratedURL = ApicallsProvider.top_ratedURL;
  private now_playing = ApicallsProvider.now_playing;
  private imagesBaseURl = ApicallsProvider.imagesBaseURl;
  private hdImageBaseURL = ApicallsProvider.hdImageBaseURL;
  private popular_moviesURL = ApicallsProvider.popular_moviesURL;

  private apikey:any = '783a602413d5276c84bfe19cd8ef0fe1';
  private language:any = 'en-US';
  private page_position:any = ''; 



  private only_one_movieDetail:any= {};
  private upcoming_moviesDerail:any= [];
  private top_rate:any = [];
  private nowplaying_list:any[];
  private popular_list:any[];
  private fiveItemsOnly = [];

  category ={
    'title_1': 'UPCOMING MOVIES',
    'title_2': 'TOP RATED MOVIES',
    'title_3': 'LATEST MOVIES',
    'title_4': 'POPULAR MOVIES',
  };

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,private menuCtrl:MenuController, private service: ServiceProvider, private shared: SharedProvider) {
    this.getupcoming();
    this.gettoprated();
    this.getpopular();
    this.getnowplaying();
  }


  
  getupcoming(){
  let body = new FormData();
   body.append('api_key', this.apikey);
   body.append('language', this.language);
   body.append('page', this.page_position);
   this.service.postCall(this.upcoming_moviesURL, body).map(res => res.json()).subscribe((success) => {
     this.only_one_movieDetail = success.results[0];  
     this.upcoming_moviesDerail = success.results;
     for (let i = 1; i <= 5; i++) {
         var newName = this.upcoming_moviesDerail[i];
         this.fiveItemsOnly.push(newName);
     }
   });    
  }


  gettoprated(){
  let body = new FormData();
  body.append('api_key', this.apikey);
  body.append('language', this.language);
  body.append('page', this.page_position);
  this.service.postCall(this.top_ratedURL, body).map(res => res.json()).subscribe((success) => {
   console.log(success);
   this.top_rate = success.results;
  });    
}


getpopular(){
  let body = new FormData();
  body.append('api_key', this.apikey);
  body.append('language', this.language);
  body.append('page', this.page_position);
  this.service.postCall(this.popular_moviesURL, body).map(res => res.json()).subscribe((success) => {
   console.log(success);
   this.popular_list= success.results;
  });    
}


getnowplaying(){
  let body = new FormData();
  body.append('api_key', this.apikey);
  body.append('language', this.language);
  body.append('page', this.page_position);
  this.service.postCall(this.now_playing, body).map(res => res.json()).subscribe((success) => {
   console.log(success);
   this.nowplaying_list= success.results;
  });  
}





 public goToVideo(obj){
 this.navCtrl.push(VideoViewPage,{
  allobj:obj
 })
 }


 searchItem(){
   this.navCtrl.push(SearchPage,{

   })
 }

}
