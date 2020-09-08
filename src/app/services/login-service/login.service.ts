import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseLogin } from '../../models/responses/response-login';
import { environment } from 'src/environments/environment';
import { Usuario } from '../../models/entity/usuario-entity/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  loginUser(usuario: Usuario): Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(`${environment.apiUrl}/login`, usuario);
  }
}
