import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    username: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(30)])),
    password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(100)]))
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public saludar(){
    alert("hola");
  }

  public iniciarSesion(form){
    if(
      form.username == "damian123" &&
      form.password == "123456789"
    ){
      alert("Sesión iniciada correctamente");
      this.router.navigate(['']);
    }else{
      alert("Los datos ingresados son incorrectos");
      this.limpiarCampos();
    }
  }

  private limpiarCampos(){
    this.loginForm.setValue({
      username: '',
      password: ''
    });
  }

}
