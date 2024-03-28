import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersapiService } from 'src/app/services/usersapi.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css'],
})
export class UserdetailsComponent implements OnInit {
  constructor(
    private _UsersapiService: UsersapiService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  userDetails: any = {};

  ngOnInit(): void {
    let paramId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getUserDetails(paramId!);
  }

  getUserDetails(id: string): void {
    this._UsersapiService.getUserDetails(id).subscribe({
      next: (response) => {
        console.log('user details => ', response); //? just for test
        this.userDetails = response.data;
      },
      error: (error) => {
        console.log(error); //? just for test
      },
    });
  }
}
