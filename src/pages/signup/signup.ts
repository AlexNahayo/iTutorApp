import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  newuser = {
    email: '',
    password: '',
    displayName: '',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userservice: UserProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  signup() {

    // Function to add users
    this.userservice.adduser(this.newuser)

      .then((res) => {

        console.log("Profile Update")

        this.alertCtrl.create({ // Create a alert
          // JSON object with certain pre defined properties
          title: "Account Created", // Will show a alert message when the user signup
          message: "Your account has been created succesfully.", // this message will be displayed inside the alert box
          buttons: [ // Will be 2 buttons 
            {
              text: "OK", // First button
              handler: () => {
                // Navigate to the Tutors page
                this.navCtrl.setRoot('TabsPage') // This will redirect the user to the tutor page after tap ok
              }
            }
          ]
        }).present(); // present function to display the notification

      }).catch((err) => {
        console.log(err)

        this.toastCtrl.create({
          // JSON object with certain pre defined properties
          message: err.message, // Will show the error message
          duration: 3000 // in ms - Set the time the message will be displayed
        }).present();

      })

  }

  // Method to use in the button
  goback() {
    this.navCtrl.setRoot('LoginPage');
  }

}