import { UsersapiService } from './../../services/usersapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private _UsersapiService: UsersapiService) {}

  users: any[] = [];
  inputValue!: number;

  per_page: number = 6;
  current_page: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this._UsersapiService.getAllUsers().subscribe({
      next: (response) => {
        console.log('all users', response); //? just for test
        this.users = response.data;
        this.per_page = response.per_page;
        this.current_page = response.page;
        this.total = response.total;
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }

  pageChanged(event: any): void {
    console.log(event);
    this._UsersapiService.getAllUsers(event).subscribe({
      next: (response) => {
        console.log('all users', response); //? just for test
        this.users = response.data;
        this.per_page = response.per_page;
        this.current_page = response.page;
        this.total = response.total;
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }
}
