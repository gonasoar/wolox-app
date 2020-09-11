import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/entity/usuario-entity/usuario';
import { Navbar } from 'src/app/models/entity/nav-bar-entity/navbar';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  arrayNav: Navbar[];
  @Input() usuario: Usuario;
  usuarioLogin: Usuario;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usuarioLogin = JSON.parse(localStorage.getItem('usuarioLogin'));

    // Este array se podría llenar con los datos de un servicio que devuelva los menu que puede ver el usuario logueado, o recuperarlos del localStorage una vez que se loguea.
    // Ahora los pongo en duro para la evaluación técnica, ya que no tengo ninguna api que me devuelva los menu que puede acceder el usuario.
    this.arrayNav = [{Titulo: 'Inicio', Href:'/landing-page#inicio' },
                    { Titulo: 'Tecnologías', Href:"/landing-page#tecnologias"},
                    { Titulo: 'Beneficios', Href:"/landing-page#beneficios"},
                    { Titulo: 'Requerimientos', Href:"/landing-page#requerimientos"},
    ];
  }

  redirectToLogin() {
    this.router.navigate(['']);
    // Limpio localstorage, para que no pueda ingresar sin loguearse nuevamente
    this.usuarioLogin = null;
  }
}
