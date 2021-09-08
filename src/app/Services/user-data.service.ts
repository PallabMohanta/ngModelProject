import { Injectable } from '@angular/core';
import { User } from 'src/Models/User';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public user: User;
  constructor() {
    this.user = new User();
  }
}
