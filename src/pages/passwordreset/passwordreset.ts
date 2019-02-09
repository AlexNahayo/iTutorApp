import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-passwordreset',
  templateUrl: 'passwordreset.html',
})
export class PasswordresetPage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  reset() {

    this.userservice.passwordreset(this.email)

      // Promise
      .then((res) => {
        this.alertCtrl.create({ // Create a alert
          // JSON object with certain pre defined properties
          title: "Email Sent", // Will show a alert message when the user signup
          message: "Please follow the instructions in the email to reset your password.", // this message will be displayed inside the alert box
          buttons: [ // Will be 2 buttons 
            {
              text: "OK", // First button
              handler: () => {
                // Navigate to the Tutors page
                this.navCtrl.setRoot('LoginPage') // This will redirect the user to the tutor page after tap ok
              }
            }
          ]
        }).present(); // Show alert

      }).catch((err) => {
        console.log(err)

        this.toastCtrl.create({
          // JSON object with certain pre defined properties
          message: err.message, // Will show the error message
          duration: 3000 // in ms - Set the time the message will be displayed
        }).present();
      })
  }

  // goback method to be used in the button
  goback() {
    this.navCtrl.setRoot('LoginPage');
  }

}