import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChemistryPage } from './chemistry';

@NgModule({
  declarations: [
    ChemistryPage,
  ],
  imports: [
    IonicPageModule.forChild(ChemistryPage),
  ],
})
export class ChemistryPageModule {}
