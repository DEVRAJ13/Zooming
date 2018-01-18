import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ApicallsProvider } from '../../providers/apicalls/apicalls';
import { ServiceProvider } from '../../providers/service/service';
import { SharedProvider } from '../../providers/shared/shared';

import { VideoViewPage } from '../video-view/video-view';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  private imagesBaseURl = ApicallsProvider.imagesBaseURl;


  private apikey:any = '783a602413d5276c84bfe19cd8ef0fe1';
  private language:any = 'en-US';
  private page_position:any = ''; 

  searchQuery: string = '';
  allResult: any;
  poster: any;



  constructor(public navCtrl: NavController, private service: ServiceProvider, private shared: SharedProvider) {
    ;
  }



 searchGIFs(e:any) {
  console.log(this.searchQuery);
  this.service.getCall(ApicallsProvider.searchMovies+"&query="+ this.searchQuery +"&page="+ '1' +"&include_adult="+ 'false'+ "&region=&year=")
      .map(res => res.json())
      .subscribe(data => {
      this.allResult = data.results;
      this.poster = ApicallsProvider.imagesBaseURl;
      });
}


public goToVideo(obj){
  this.navCtrl.push(VideoViewPage,{
   allobj:obj
  })
  }
}
