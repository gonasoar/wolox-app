import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/models/entity/usuario-entity/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';
import { ResponseLogin } from 'src/app/models/responses/response-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private loginService: LoginService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  loginUser() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.usuario.Email = this.loginForm.value.email;
      this.usuario.Password = this.loginForm.value.password;

      this.loginService.loginUser(this.usuario).subscribe((resp: ResponseLogin) => {
        if (resp.token !== undefined) {
          // this.snackBar.open('Registrado', 'OK', {
          //   duration: 2000,
          // });
          this.router.navigateByUrl('listado-tech');
        } else {
          this.snackBar.open('Usuario o contraseña incorrectos', 'OK', {
            duration: 2000,
          });
        }
      }, error =>  {
          console.log('Error de servicio');
      });
    }
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
  }

}
