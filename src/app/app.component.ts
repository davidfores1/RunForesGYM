import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RunForesGYM';
  usuario!: User;
  cargando: boolean = true;


  constructor(private afAuth: AngularFireAuth) {

    this.afAuth.user.subscribe((usuario) => {

      this.cargando = false
      
      this.usuario = usuario!;

    })

  }

  ngOnInit(): void {

  }

}
