import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../../../services/listado-service/listado.service';
import { Tech } from 'src/app/models/entity/tech-entity/tech';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  dataSource = new MatTableDataSource(tecnologias);
  cantidadTecnologias = 0;
  constructor(private techService: ListadoService) { }
  tableColumns: string[] = ['tech', 'year', 'author', 'license', 'language', 'type', 'logo'];

  ngOnInit(): void {
    this.getListadoTech();
  }

  getListadoTech() {
    this.techService.getListadoTech().subscribe((tech: Tech[]) => {
      this.dataSource.data = tech;
      this.cantidadTecnologias = tech.length;
    }, error => {
      
    });
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // this.cantidadTecnologias = this.dataSource.filter.length;
  }
}

const tecnologias: Tech[] = [];
