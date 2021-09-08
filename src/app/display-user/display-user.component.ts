import { Component, OnInit } from '@angular/core';
import { User } from 'src/Models/User';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css'],
})
export class DisplayUserComponent implements OnInit {
  public user: User;
  public showData: boolean = false;
  constructor(private _userDataService: UserDataService) {}

  ngOnInit(): void {
    this.user = this._userDataService.user;
  }
  dataShow() {
    this.showData = true;
  }
  dataHide() {
    this.showData = false;
    this.user.email = '';
    this.user.fname = '';
  }
}
