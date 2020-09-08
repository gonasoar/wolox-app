import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../../../services/listado-service/listado.service';
import { Tech } from 'src/app/models/entity/tech-entity/tech';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  data: Tech[];
  constructor(private techService: ListadoService) { }
  tableColumns: string[] = ['tech', 'year', 'author', 'license', 'language', 'type', 'logo'];

  ngOnInit(): void {
    this.getListadoTech();
  }

  getListadoTech() {
    this.techService.getListadoTech().subscribe((tech: Tech[]) => {
      this.data = tech;
    }, error => {

    });
  }
}
