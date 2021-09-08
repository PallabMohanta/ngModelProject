import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public user: User;
  constructor(private _userDataService: UserDataService) {}

  ngOnInit(): void {
    this.user = this._userDataService.user;
  }
}
