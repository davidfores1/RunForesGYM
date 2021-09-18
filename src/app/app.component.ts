import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RunForesGYM';

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword('david717@hotmail.es','123456')
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
