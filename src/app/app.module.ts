// Everything needs to be imported and declared here
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { config } from './app.firebaseconfig';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthProvider } from '../providers/auth/auth';

import { MyApp } from './app.component';
import { UserProvider } from '../providers/user/user';
import { TutorProvider } from '../providers/tutor/tutor';
import { EmailComposer } from '@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { EmailPage } from '../pages/email/email';
import { BiologyPage } from '../pages/biology/biology';
import { MathsPage } from '../pages/maths/maths';
import { EnglishPage } from '../pages/english/english';
import { PhysicsPage } from '../pages/physics/physics';
import { ChemistryPage } from '../pages/chemistry/chemistry';

@NgModule({
  declarations: [
    MyApp,
    EmailPage,
    BiologyPage,
    MathsPage,
    EnglishPage,
    PhysicsPage,
    ChemistryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config) // It will initialize my firebase SDK in my Ionic Application, here we use a JSON Object, config
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmailPage,
    BiologyPage,
    MathsPage,
    EnglishPage,
    PhysicsPage,
    ChemistryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    TutorProvider,
    EmailComposer,
    CallNumber
  ]
})
export class AppModule { }
