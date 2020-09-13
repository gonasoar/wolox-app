import { Component, OnInit, ViewChild } from '@angular/core';
import { Tech } from 'src/app/models/entity/tech-entity/tech';
import { MatTableDataSource } from '@angular/material/table';
import { ListadoService } from '../../../services/listado-service/listado.service';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  dataSource = new MatTableDataSource(tecnologias);
  cantidadTecnologias = 0;
  constructor(private techService: ListadoService,
              private snackBar: MatSnackBar) { }
  tableColumns: string[] = ['tech', 'year', 'author', 'license', 'language', 'type', 'logo'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getListadoTech();
  }

  getListadoTech() {
    this.techService.getListadoTech().subscribe((tech: Tech[]) => {
      this.dataSource.data = tech;
      this.dataSource.sort = this.sort;
      this.cantidadTecnologias = tech.length;
    }, error => {
      this.snackBar.open('Error de servicio', 'OK', {
        duration: 2000,
      });
    });
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.cantidadTecnologias = filterValue === '' ? this.dataSource.data.length : this.dataSource.filteredData.length;
  }
}

const tecnologias: Tech[] = [];
