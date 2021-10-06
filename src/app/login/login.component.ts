import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLgin!: FormGroup;
  datosCorrectos: boolean = true;
  textoError!:string;

  constructor(private creadorFormulario: FormBuilder, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {

    this.formularioLgin = this.creadorFormulario.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password:['', Validators.required]
    });
  }

  ingresar(){
    
   if(this.formularioLgin.valid){

    this.datosCorrectos = true;
    this.afAuth.auth.signInWithEmailAndPassword(this.formularioLgin.value.email, this.formularioLgin.value.password)
    .then((usuario)=>{
      console.log(usuario);
    }).catch((error)=>{
      this.datosCorrectos = false;
      this.textoError = error.message
    })

   }else{
    this.datosCorrectos = false;
    this.textoError = "Por favor revisar que los datos esten correctos"
   }

  }

}
