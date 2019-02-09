//All imports of this page are:
import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { TutorProvider } from '../../providers/tutor/tutor';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-maths',
  templateUrl: 'maths.html',
})
export class MathsPage {

  mathTLists: any; //This object mathTlists is our link to the tutor provider via binding on the corresponding html file..
  //All the imposrt from above are injected in the constructer.
  constructor(public tutor: TutorProvider, private emailComposer: EmailComposer, public loadingController: LoadingController, private callSvc: CallNumber) {
  }
  //load all the objects in the list.
  ionViewDidLoad() {
    //Loading Controller imported via loading controller. 
    let loading = this.loadingController.create({
      content: 'Please wait...' //this string message will be displayed on the screen.
    });
    loading.present(); //This prsent method will display the loading controller. 
    setTimeout(() => { //setTimout represents when it closes. 
      loading.dismiss(); //this will implement the dismiss.
      this.mathTLists = this.tutor.mathtutors; //setting mathtutors to the mathTlists.
    }, 1000); //this will load the controller for 2 seconds (it can be adjusted accordingly).

  }

  //Call Functionality: for maths tutors.
  call() {
    this.callSvc.callNumber('{{mathTLists.phone}}', true).then(() => { //this uses call nav defined as CallNumber which is injected from the constructor. 
      console.log('{{mathTLists.phone}}')
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
          to: '{{mathTLists.email}}', //pipe for the email list
          cc: "",
          subject: "",
          body: "",
          isHtml: true
        };

        this.emailComposer.open(email); //emailcomposer will open the email application on the phone.
      }
    }).catch(error => {
      alert(JSON.stringify(error));   //this show the error message in case something goes wrong
    });
  }
}

