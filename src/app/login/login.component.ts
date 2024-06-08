import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data = {
    username: '',
    password: ''
  }


  constructor(private appService: AppService, private router: Router) {}

  login() {
    this.appService.login(this.data.username, this.data.password).subscribe(token => {
      localStorage.setItem('token', token);

      this.router.navigateByUrl("/list")
    });
  }
}
