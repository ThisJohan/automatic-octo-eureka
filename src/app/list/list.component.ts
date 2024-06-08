import { Component } from '@angular/core';
import { AppService, Contact } from '../app.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  contacts: Contact[] = [];

  isUserAdmin = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.list().subscribe((v) => {
      this.contacts = v;
    });
    this.isUserAdmin = this.appService.getUserData().role === 'admin';
  }

  edit(contact: Contact) {
    console.log({ contact });
  }

  delete(contactId: number) {
    console.log({ contactId });
  }

  logout() {
    this.appService.logout();
  }
}
