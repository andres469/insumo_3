import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  ledstate: any;

  constructor() { }
 // constructor(private db: AngularFirestore) { }
  
 
  

  // constructor(private db:Firestore) {
    
  // }

//   async apagar() 
//   {
//     this.ledstate = doc(this.db,'led','Led');//RUTA DE TABLA EN LA BD
//     await setDoc(this.ledstate, { encender: false });//CAMBIA EL ATRIBUTO DE LA TABLA
//   }
  
  
//   async encender() {
//    this.ledstate = doc(this.db,'led','Led');//RUTA DE TABLA EN LA BD
//    await setDoc(this.ledstate, { encender: true });//CAMBIA EL ATRIBUTO DE LA TABLA
//  }



}


