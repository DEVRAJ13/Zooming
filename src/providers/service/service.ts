import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions } from'@angular/http';
import{ Platform,ToastController } from 'ionic-angular';
import { ApicallsProvider } from '../../providers/apicalls/apicalls';
import 'rxjs/Rx';

declare var navigator: any;
declare var Connection: any;
declare var cordova:any;

@Injectable()
export class ServiceProvider {

  constructor(private http: Http, private platform: Platform, private toastCtrl: ToastController) {
   
  }

  postCall(url:string,body:any){
    console.log("url",url);
    return this.http.post(url,body);
  }
  
  getCall(url:string){
    return this.http.get(url);
  }
  
  checkNetworkConnection():boolean{
     if (!this.platform.is('cordova')) {
      return true;
    }
  
    var networkState = navigator.connection.type;
     if (networkState == Connection.NONE) {
    return false; 
    }
      return true;
  }
  
  showMessage(msg:string){
    this.toastCtrl.create({
      message:msg,
      position:'bottom',
      duration:3000
    }).present();
  }
}
