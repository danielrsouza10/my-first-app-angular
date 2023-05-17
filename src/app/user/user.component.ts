import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  username: string = '';

  allowNewUser = false;
  userCreationStatus = 'No user was create';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 1000);
  }

  onCreateUser() {
    if (this.username != '') {
      this.userCreationStatus = 'User was created: Welcome, ' + this.username;
    } else {
      this.userCreationStatus = 'You need to type a username';
    }
  }

  onResetButton() {
    this.username = '';
    this.userCreationStatus = 'No user was create';
  }

  onUserType(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }
}
