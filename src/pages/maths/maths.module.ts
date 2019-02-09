import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MathsPage } from './maths';

@NgModule({
  declarations: [
    MathsPage,
  ],
  imports: [
    IonicPageModule.forChild(MathsPage),
  ],
})
export class MathsPageModule {}
