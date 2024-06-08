import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AppService {

    baseUrl = 'http://localhost:5205/api'

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post(`${this.baseUrl}/Users/login`, {username, password}, {responseType: 'text'});
    }
}