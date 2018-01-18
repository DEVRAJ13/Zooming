import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreViewPage } from './more-view';

@NgModule({
  declarations: [
    MoreViewPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreViewPage),
  ],
})
export class MoreViewPageModule {}
