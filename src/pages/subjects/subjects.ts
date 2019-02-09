import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MathsPage } from '../maths/maths';
import { EnglishPage } from '../english/english';
import { PhysicsPage } from '../physics/physics';
import { ChemistryPage } from '../chemistry/chemistry';
import { BiologyPage } from '../biology/biology';

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  mattutor() {
    this.navCtrl.push(MathsPage);
  }
  engtutor() {
    this.navCtrl.push(EnglishPage);
  }
  phytutor() {
    this.navCtrl.push(PhysicsPage);
  }
  chetutor() {
    this.navCtrl.push(ChemistryPage);
  }
  biotutor() {
    this.navCtrl.push(BiologyPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorPage');
  }

}
