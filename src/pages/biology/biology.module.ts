import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiologyPage } from './biology';

@NgModule({
  declarations: [
    BiologyPage,
  ],
  imports: [
    IonicPageModule.forChild(BiologyPage),
  ],
})
export class BiologyPageModule {}
