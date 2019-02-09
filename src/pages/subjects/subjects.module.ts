import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubjectsPage } from './subjects';

@NgModule({
  declarations: [
    SubjectsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubjectsPage),
  ],
})
export class SubjectsPageModule {}
