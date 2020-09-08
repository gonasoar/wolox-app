import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tech } from 'src/app/models/entity/tech-entity/tech';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(private httpClient: HttpClient) { }

  getListadoTech(): Observable<Tech[]> {
    return this.httpClient.get<Tech[]>(`${environment.apiUrl}/techs`);
  }

}
