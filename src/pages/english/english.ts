//All imports of this page are:
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { TutorProvider } from '../../providers/tutor/tutor';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-english',
  templateUrl: 'english.html',
})
export class EnglishPage {

  englishTLists: any; //this object englishTLists is our link to the tutor provider via binding on the corresponding html file..

  constructor(public tutor: TutorProvider, public emailComposer: EmailComposer, public loadingController: LoadingController, private callSvc: CallNumber) {
  }

  //load all the objects in the list
  ionViewDidLoad() {
    //Loading Controller imported via loading controller.
    let loading = this.loadingController.create({
      content: 'Please wait...' //this string message will be displayed on the screen.
    });

    loading.present(); //This prsent method will display the loading controller.

    setTimeout(() => { //setTimout repsents when it closes. 
      loading.dismiss(); //this will implement the dismiss.

      this.englishTLists = this.tutor.englishtutors; //setting englishtutors to the englishTlist.

    }, 1000); //this will load the controller for 2 seconds (it can be adjusted accordingly).

  }

  //Call Functionality: for english tutors
  call() {
    this.callSvc.callNumber('{{englishTList.phone}}', true).then(() => {
      console.log('{{englishTList.phone}}')
    }).catch((err) => { //catch any undefined string i.e 08k78569 for example.
      alert(JSON.stringify(err))
    });
  }


  //Send email function.
  sendEmail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {
        let email = {
          //this are just the parameters we set the email feilds to fill i.e to, cc, subject, body and isHTML.
          to: '{{englishTLists.email}}', //pipe for the email list
          cc: "",
          subject: "",
          body: "",
          isHtml: true
        };

        this.emailComposer.open(email); //emailcomposer will open the email application on the phone.
      }
    }).catch(error => {
      alert(JSON.stringify(error));   //this show plugin_not_installed
    });
  }
}
