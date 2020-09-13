import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/entity/usuario-entity/usuario';
import { Language } from 'src/app/models/entity/language-entity/language';

const defaultLanguage = 'es';
const additionalLanguages = ['en'];

const languages: string[] = [defaultLanguage].concat(additionalLanguages);
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  language: Language[];
  usuario: Usuario;
  objeto: any;
  constructor() { }

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuarioLogin'));
    this.language = [{Nombre: 'Es', Id: 1}, {Nombre: 'En', Id: 2}];
  }

  changeLanguage(opt: Language) {
    if (opt.Id === 1) {
      console.log(1);
    }

    if (opt.Id === 2) {
      console.log(2);
    }
  }
}
