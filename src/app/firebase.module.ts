import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // AngularFireModule.initializeApp({
    //   apiKey: "AIzaSyA-RjF_h0eKzbc8HHGMGCVQPWk5uliseiY",
    //   authDomain: "es-sat.firebaseapp.com",
    //   projectId: "es-sat",
    //   storageBucket: "es-sat.appspot.com",
    //   messagingSenderId: "419912045446",
    //   appId: "1:419912045446:web:7d006441d44e6bf8e79207",
    //   measurementId: "G-SJRX4GZV8D"}),
      AngularFireModule.initializeApp({
        apiKey: "AIzaSyDQEfIx8KgEMZNCp24PIN-odT3UZX7a4eo",
        authDomain: "e-commerce-bbe30.firebaseapp.com",
        projectId: "e-commerce-bbe30",
        storageBucket: "e-commerce-bbe30.appspot.com",
        messagingSenderId: "145421705456",
        appId: "1:145421705456:web:d3141479dae060fab86235"
      }),
  ],
  exports:[
    AngularFireModule

  ]
})
export class FirebaseModule { }
