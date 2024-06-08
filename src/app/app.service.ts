import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export interface Contact {
  id: number;
  birthDate: string;
  email: string;
  firstName: string;
  gender: string;
  lastName: string;
  mobileNumber: string;
}

@Injectable({ providedIn: 'root' })
export class AppService {
  baseUrl = 'http://localhost:5205/api';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post(
      `${this.baseUrl}/Users/login`,
      { username, password },
      { responseType: 'text' }
    );
  }

  list() {
    return this.http.get<Contact[]>(`${this.baseUrl}/Contact`);
  }

  getUserData(): { role: string; userId: string } {
    let d = jwtDecode(localStorage.getItem('token')!);
    return d as any;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
