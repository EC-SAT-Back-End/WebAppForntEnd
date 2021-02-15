import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA-RjF_h0eKzbc8HHGMGCVQPWk5uliseiY",
      authDomain: "es-sat.firebaseapp.com",
      projectId: "es-sat",
      storageBucket: "es-sat.appspot.com",
      messagingSenderId: "419912045446",
      appId: "1:419912045446:web:7d006441d44e6bf8e79207",
      measurementId: "G-SJRX4GZV8D"}),
  ],
  exports:[
    AngularFireModule

  ]
})
export class FirebaseModule { }
