import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/entity/usuario-entity/usuario';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() usuario: Usuario;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToLogin() {
    this.router.navigate(['']);
  }
}
