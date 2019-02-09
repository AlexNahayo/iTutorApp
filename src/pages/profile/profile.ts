import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  displayName: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public zone: NgZone, public alertCtrl: AlertController, ) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  // Method to loaduserdetails - using userservice function from firebase  + promise
  loaduserdetails() {
    this.userservice.getuserdetails().
      then((res: any) => {
        this.displayName = res.displayName
      })
  }

  // Method editname
  editname() {
    // Create a alert
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => { // We are using a handler to get the information and display

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {

            // Function to update the displayname
            this.userservice.updatedisplayname(data.nickname).then((res: any) => {

              // promise
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your nickname has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your nickname was not changed');
                statusalert.present();
              }

            })
          }
        }

      }]
    });
    alert.present();
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.parent.parent.setRoot('LoginPage');
    })
  }


}