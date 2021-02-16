import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FirebaseModule } from '../firebase.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FirebaseModule,

  ],
  exports:[NgbModule,
    HeaderComponent, FooterComponent
  ],
  entryComponents:[]
})
export class SharedModule { }
