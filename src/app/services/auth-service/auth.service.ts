import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticate = false;

  autenticar(token: string): boolean {
    if (token != null) {
      this.isAuthenticate = true;
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }
}
