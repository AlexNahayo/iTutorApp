import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhysicsPage } from './physics';

@NgModule({
  declarations: [
    PhysicsPage,
  ],
  imports: [
    IonicPageModule.forChild(PhysicsPage),
  ],
})
export class PhysicsPageModule {}
