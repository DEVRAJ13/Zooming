import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core';


@Injectable()
export class SharedProvider {
  @Output() fire: EventEmitter<any> = new EventEmitter();
  @Output() fireFav: EventEmitter<any> = new EventEmitter();
  @Output() fireHome: EventEmitter<any> = new EventEmitter();
  

    getEmitter(){
      return this.fire;
         }
      
      getFavEmitter(){
      return this.fireFav;
         }
      
         getHomeEmitter(){
      return this.fireHome;
         }
      
      
         change(value:any) {
          console.log('change started'); 
           this.fire.emit(value);
         }
      
         getEmittedValue() {
           return this.fire;
         }
      
         changeFavorites(obj){
                this.fireFav.emit(obj);
      
         }
      
         changeHomeLogin()
         {  this.fireHome.emit();
      
         }
      }
