import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoViewPage } from './video-view';

@NgModule({
  declarations: [
    VideoViewPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoViewPage),
  ],
})
export class VideoViewPageModule {}
