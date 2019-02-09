import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',  // Display this page in any part of our application
  templateUrl: 'login.html', // Points to the HTML file used for this page
})

export class LoginPage {

  credentials = {} as usercreds; // Call the usercreds model

  constructor(public navCtrl: NavController, public navParams: NavParams, public authservice: AuthProvider, public userservice: UserProvider, public toastCtrl: ToastController) {
    // here we pass the values from what we have imported to the constructor
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // New function to login users in our app
  signin() {

    // we call the authservice method from firebase and login.. function which uses 2 parameters, email (String) and password (String), taken from the credentials ( usercreds )
    this.authservice.login(this.credentials)

      .then((res) => { // promisse
        // if the response from the promisse is true then do...
        console.log(res) // show what is going on on the console from the browser
        this.toastCtrl.create({ // Create a toast
          // JSON object with certain pre defined properties
          message: "Welcome ",// Will show a welcome message in the toast when the user login
          duration: 1000 // in ms - Set the time the message will be displayed
        }).present();

        this.navCtrl.setRoot('TabsPage') // This setRoot TabsPage

        //else if something goes worng during the authentication process:
      }).catch((err) => {
        console.log(err)
        this.toastCtrl.create({
          // JSON object with certain pre defined properties
          message: err.message, // Will show the error message inside the toast
          duration: 3000 // in ms - Set the time the message will be displayed
        }).present(); // display the notification
      })
  }

  signup() {
    this.navCtrl.push('SignupPage'); // This define the function signup
  }

  passwordreset() {
    this.navCtrl.push('PasswordresetPage'); // This define the function Passwordreset
  }
}