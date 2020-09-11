import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/entity/usuario-entity/usuario';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  usuario: Usuario;
  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogin'));
  }

}
