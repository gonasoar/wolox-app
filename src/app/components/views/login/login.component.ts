import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/entity/usuario-entity/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';
import { ResponseLogin } from 'src/app/models/responses/response-login';
import { AuthService } from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usuario: Usuario = new Usuario();
  usuarioLogin: Usuario;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private snackBar: MatSnackBar,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {

    this.usuarioLogin = JSON.parse(localStorage.getItem('usuarioLogin'));

    if (this.usuarioLogin != null) {
      this.redirectToListado();
    } 
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        mantenerConectado: [false]
      });
    
  }

  get f() { return this.loginForm.controls; }

 

  loginUser() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.usuario.Email = this.loginForm.value.email;
      this.usuario.Password = this.loginForm.value.password;
      this.usuario.MantenerConectado = this.loginForm.value.mantenerConectado;

      if (this.usuario.Email.trim().toLowerCase() === 'user@wolox.com.ar' && this.usuario.Password.toString().trim().toLowerCase() === '12345678') {
        this.loginService.loginUser(this.usuario).subscribe((resp: ResponseLogin) => {
          if (resp.token !== undefined) {
             // Autentica que el usuario este logueado para poder redirigir a las pantallas.
            this.authService.autenticar(resp.token);
            if (this.usuario.MantenerConectado) {
              this.setLocalStorage(this.usuario);
            }
            this.router.navigateByUrl('landing-page');
          }
        }, error =>  {
            this.snackBar.open('Error de servicio', 'OK', {
              duration: 2000,
            });
        });
      } else {
        this.snackBar.open('Usuario o contraseña incorrectos', 'OK', {
          duration: 2000,
        });
      }
      } else {
          return;
      }
   
  }

  setLocalStorage(usuario) {
    localStorage.setItem('usuarioLogin', JSON.stringify(usuario));
  }

  getLocalStorage() {
    localStorage.getItem('usuarioLogin');
  }

  redirectToListado() {
    this.authService.isAuthenticate = true;
    this.router.navigateByUrl('listado-tech');
  }
}
