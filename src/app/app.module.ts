import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';

// Importing provider calls 
import { ApicallsProvider } from '../providers/apicalls/apicalls';
import { ServiceProvider } from '../providers/service/service';
import { SharedProvider } from '../providers/shared/shared';

// Importing pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VideoViewPage } from '../pages/video-view/video-view';
import { SearchPage } from '../pages/search/search';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VideoViewPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VideoViewPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApicallsProvider,
    SharedProvider,
    ServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
