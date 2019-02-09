import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TutorProvider } from '../../providers/tutor/tutor'; //provider link
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html',
})
export class EmailPage {

  emailInfo: any;
  subject = '';
  body = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer, public tutor: TutorProvider) {
    this.emailInfo = this.navParams.data;
  }

  send() {

    let email = {

      to: [],
      cc: [],
      bcc: [],
      attactment: [],
      subject: this.subject,
      body: this.body,
      isHtml: false,
      app: "Gmail"
    }
    this.emailComposer.open(email);
  }
}
