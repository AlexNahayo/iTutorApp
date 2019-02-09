import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnglishPage } from './english';

@NgModule({
  declarations: [
    EnglishPage,
  ],
  imports: [
    IonicPageModule.forChild(EnglishPage),
  ],
})
export class EnglishPageModule {}
