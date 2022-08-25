import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  setLoginStatus(value: string) {
    localStorage.setItem('loggedIn', value);
    
  }

  get LoginStatus()
  {
    return localStorage.getItem('loggedIn') as string; 
  }

}
