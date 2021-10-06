import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {User} from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RunForesGYM';
  usuario!: User;
  cargando:boolean = true;
  

  constructor(private afAuth: AngularFireAuth) {
  
  this.afAuth.user.subscribe((usuario)=>{

    setTimeout(() => {
      this.cargando = false
    }, 2000);
    this.usuario = usuario!;
  })

  }

  ngOnInit(): void {
    
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
