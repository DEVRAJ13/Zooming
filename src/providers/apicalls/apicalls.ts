import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApicallsProvider {
  static baseURL = 'https://api.themoviedb.org/3/movie/';
  static baseSearchURL ='https://api.themoviedb.org/3/search/movie?';

  static imagesBaseURl = 'http://image.tmdb.org/t/p/w185/';
  static hdImageBaseURL ='http://image.tmdb.org/t/p/w500/';

 

  static upcoming_moviesURL = ApicallsProvider.baseURL+'upcoming?';
  static top_ratedURL = ApicallsProvider.baseURL+'top_rated?';
  static now_playing  = ApicallsProvider.baseURL+'now_playing?';
  static popular_moviesURL = ApicallsProvider.baseURL+'popular?';
  static getVideoURL = ApicallsProvider.baseURL;
  static searchMovies = ApicallsProvider.baseSearchURL+'api_key=783a602413d5276c84bfe19cd8ef0fe1&language=en-US';
  

  
}
