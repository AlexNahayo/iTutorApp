import { Injectable } from '@angular/core';

@Injectable()
export class TutorProvider {
  //listing tutors defined by name*, subject and teachingmethod.
  //name* is the varaible that will be displayed after the user clicks on specific sub ject there looking for.
  //Data mathtutor array with image location, name, university, qulification, email and phone.

  mathtutors: any = [
    { img: '../../assets/imgs/mt2.jpg', name: 'Alex Nahayo', Uni: 'Maynooth University', qual: 'PME', email: 'alexn794@gmail.com', phone: '0877497106' },
    { img: '../../assets/imgs/mt1.png', name: 'Ciara Duffy', Uni: 'Dublin City University', qual: 'Msc', email: 'cduff@hotmail.com', phone: '0837346578' },
    { img: '../../assets/imgs/mt3.png', name: 'Aoife Ilori', Uni: 'University of Limerick', qual: 'Msc', email: 'aoiilor@hotmail.com', phone: '085857334' },
    { img: '../../assets/imgs/mt4.png', name: 'Donaldo Glover', Uni: 'IT Sligo', qual: 'BA', email: 'donl98g@eirmail.com', phone: '0837243768' },
    { img: '../../assets/imgs/mt5.png', name: 'Matthew Brennan', Uni: 'University of Limerick', qual: 'PME', email: 'mat89br@gmail.com', phone: '082948576' },
    { img: '../../assets/imgs/mt6.png', name: 'Charlie Nichn', Uni: 'Maynooth University', qual: 'Msc', email: 'chni@hotmail.com', phone: '083746325' },
    { img: '../../assets/imgs/mt7.png', name: 'Sean', Uni: 'National College of Ireland', qual: 'BA', email: 'sean1000@ghotmail.com', phone: '083485125' },
    { img: '../../assets/imgs/mt8.png', name: 'Nathan Sheridan', Uni: 'University College Cork', qual: 'Bsc', email: 'nathse20010@eirmail.com', phone: '08900968' },
    { img: '../../assets/imgs/mt9.png', name: 'Darren Mclanron', Uni: 'University College Dublin', qual: 'Msc', email: 'drnnmc786@gmail.com', phone: '08479854533' },
    { img: '../../assets/imgs/mt10.png', name: 'Lucy Mai', Uni: 'Waterford IT', qual: 'HDip.Maths', email: 'lucyyy202002@gmail.com', phone: '0857485768' }
  ];

  //Data englishtutor array with image location, name, university, qulification, email and phone.
  englishtutors: any = [
    { img: '../../assets/imgs/e11.png', name: 'Azeem Kazmi', Uni: 'Maynooth University', qual: 'BA', email: 'azeem_kazmi@hotmailmail.com', phone: '0834736222' },
    { img: '../../assets/imgs/e1.png', name: 'Karen Geraghty', Uni: 'Dublin City University', qual: 'MA', email: 'cduff@hotmail.com', phone: '0837346578' },
    { img: '../../assets/imgs/e3.png', name: 'Kate Byrne', Uni: 'University of Limerick', qual: 'MA', email: 'aoiilor@hotmail.com', phone: '085857334' },
    { img: '../../assets/imgs/e4.png', name: 'Mark Cahill', Uni: 'IT Sligo', qual: 'BA', email: 'donl98g@eirmail.com', phone: '0837243768' },
    { img: '../../assets/imgs/e5.png', name: 'Christina M', Uni: 'University of Limerick', qual: 'PME', email: 'mat89br@gmail.com', phone: '082948576' },
    { img: '../../assets/imgs/e6.png', name: 'Aran lee', Uni: 'Maynooth University', qual: 'BA', email: 'chni@hotmail.com', phone: '083746325' },
    { img: '../../assets/imgs/e7.png', name: 'Arianna Zanghi', Uni: 'National College of Ireland', qual: 'BA', email: 'sean1000@ghotmail.com', phone: '083485125' },
    { img: '../../assets/imgs/e8.png', name: 'Fergal O Shea', Uni: 'University College Cork', qual: 'BA', email: 'nathse20010@eirmail.com', phone: '08900968' },
    { img: '../../assets/imgs/e9.png', name: 'Gary Colcombe', Uni: 'University College Dublin', qual: 'MA', email: 'drnnmc786@gmail.com', phone: '08479854533' },
    { img: '../../assets/imgs/e10.png', name: 'Bella Wilson', Uni: 'Waterford IT', qual: 'BA', email: 'lucyyy202002@gmail.com', phone: '0857485768' }
  ];

  //Data biologytutorr array with image location, name, university, qulification, email and phone.
  biologytutors: any = [
    { img: '../../assets/imgs/b2.png', name: 'Cheeney M', Uni: 'Maynooth University', qual: 'Bsc', email: 'alaxn794@gmail.com', phone: '0877497106' },
    { img: '../../assets/imgs/b1.png', name: 'Ali Dunworth', Uni: 'Dublin City University', qual: 'Msc', email: 'cduff@hotmail.com', phone: '0837346578' },
    { img: '../../assets/imgs/b3.png', name: 'Franky Harte', Uni: 'University of Limerick', qual: 'Msc', email: 'aoiilor@hotmail.com', phone: '085857334' },
    { img: '../../assets/imgs/b4.png', name: 'Mike O toole', Uni: 'IT Sligo', qual: 'BA', email: 'donl98g@eirmail.com', phone: '0837243768' },
    { img: '../../assets/imgs/b5.png', name: 'Conor Doorley', Uni: 'University of Limerick', qual: 'PME', email: 'mat89br@gmail.com', phone: '082948576' },
    { img: '../../assets/imgs/b6.png', name: 'lorraine haigney', Uni: 'Maynooth University', qual: 'Msc', email: 'chni@hotmail.com', phone: '083746325' },
    { img: '../../assets/imgs/b7.png', name: 'Eimear', Uni: 'National College of Ireland', qual: 'BA', email: 'sean1000@ghotmail.com', phone: '083485125' },
    { img: '../../assets/imgs/b8.png', name: 'Jamie Crowe', Uni: 'University College Cork', qual: 'Bsc', email: 'nathse20010@eirmail.com', phone: '08900968' },
    { img: '../../assets/imgs/b9.png', name: 'Paul Eagle', Uni: 'University College Dublin', qual: 'Msc', email: 'drnnmc786@gmail.com', phone: '08479854533' },
    { img: '../../assets/imgs/b.png', name: 'Ciaran Finn', Uni: 'Waterford IT', qual: 'HDip', email: 'lucyyy202002@gmail.com', phone: '0857485768' }
  ];

  //Data chemistrytutor array with image location, name, university, qulification, email and phone.
  chemistrytutors: any = [
    { img: '../../assets/imgs/c1.png', name: 'Annia Ali', Uni: 'Maynooth University', qual: 'Bsc', email: 'alaxn794@gmail.com', phone: '0877497106' },
    { img: '../../assets/imgs/c2.png', name: 'Shannon Fox', Uni: 'Dublin City University', qual: 'Msc', email: 'cduff@hotmail.com', phone: '0837346578' },
    { img: '../../assets/imgs/c3.png', name: 'Sahar Ali', Uni: 'University of Limerick', qual: 'Msc', email: 'aoiilor@hotmail.com', phone: '085857334' },
    { img: '../../assets/imgs/c4.png', name: 'Nicole Quinn', Uni: 'IT Sligo', qual: 'BA', email: 'donl98g@eirmail.com', phone: '0837243768' },
    { img: '../../assets/imgs/c5.png', name: 'Caitriona Redmond', Uni: 'University of Limerick', qual: 'PME', email: 'mat89br@gmail.com', phone: '082948576' },
    { img: '../../assets/imgs/c6.png', name: 'Trish Hartigan', Uni: 'Maynooth University', qual: 'Msc', email: 'chni@hotmail.com', phone: '083746325' },
    { img: '../../assets/imgs/c7.png', name: 'Aishling O Neill', Uni: 'National College of Ireland', qual: 'BA', email: 'sean1000@ghotmail.com', phone: '083485125' },
    { img: '../../assets/imgs/c8.png', name: 'Nathan Sheridan', Uni: 'University College Cork', qual: 'Bsc', email: 'nathse20010@eirmail.com', phone: '08900968' },
    { img: '../../assets/imgs/c9.png', name: 'Darren Mclanron', Uni: 'University College Dublin', qual: 'Msc', email: 'drnnmc786@gmail.com', phone: '08479854533' },
    { img: '../../assets/imgs/c10.png', name: 'Tony R', Uni: 'Waterford IT', qual: 'HDip', email: 'lucyyy202002@gmail.com', phone: '0857485768' }
  ];

  //Data physicstutor array with image location, name, university, qulification, email and phone.
  physicstutors: any = [
    { img: '../../assets/imgs/p2.png', name: 'Alex Cosgrave', Uni: 'Maynooth University', qual: 'Bsc', email: 'alaxn794@gmail.com', phone: '0877497106' },
    { img: '../../assets/imgs/p1.png', name: 'Ciara Duffy', Uni: 'Dublin City University', qual: 'Msc', email: 'cduff@hotmail.com', phone: '0837346578' },
    { img: '../../assets/imgs/p3.png', name: 'Stephone Casserly', Uni: 'University of Limerick', qual: 'Msc', email: 'aoiilor@hotmail.com', phone: '085857334' },
    { img: '../../assets/imgs/p4.png', name: 'Donaldo Glover', Uni: 'IT Sligo', qual: 'BA', email: 'donl98g@eirmail.com', phone: '0837243768' },
    { img: '../../assets/imgs/p5.png', name: 'Matthew Brennan', Uni: 'University of Limerick', qual: 'PME', email: 'mat89br@gmail.com', phone: '082948576' },
    { img: '../../assets/imgs/p6.png', name: 'Charlie Nichn', Uni: 'Maynooth University', qual: 'Msc', email: 'chni@hotmail.com', phone: '083746325' },
    { img: '../../assets/imgs/p7.png', name: 'Sean', Uni: 'National College of Ireland', qual: 'BA', email: 'sean1000@ghotmail.com', phone: '083485125' },
    { img: '../../assets/imgs/p8.png', name: 'Nathan Sheridan', Uni: 'University College Cork', qual: 'Bsc', email: 'nathse20010@eirmail.com', phone: '08900968' },
    { img: '../../assets/imgs/p9.png', name: 'Darren Mclanron', Uni: 'University College Dublin', qual: 'Msc', email: 'drnnmc786@gmail.com', phone: '08479854533' },
    { img: '../../assets/imgs/p10.png', name: 'Lucy Mai', Uni: 'Waterford IT', qual: 'HDip', email: 'lucyyy202002@gmail.com', phone: '0857485768' }
  ];
  constructor() { }

}
