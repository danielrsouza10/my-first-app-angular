import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styles: [
    `
      .displayPressed {
        background-color: darkgreen;
      }
    `,
  ],
})
export class UserComponent {
  // username: string = "";
  // status: boolean = false;
  // userList = ["test-user"];

  detailList: string = "";
  button: string = "Display Details";
  controlVar = ["test"];
  i = 0;
  // allowNewUser = false;
  // userCreationStatus = "No user was create";

  constructor() {
    // setTimeout(() => {
    //   this.allowNewUser = true;
    // }, 1000);
  }

  onDetailListButton() {
    this.detailList = "Lorem upsiluim";
    if (this.button === "Display Details") {
      this.button = "Hide Details";
      this.controlVar.push("again");
      this.i++;
    } else {
      this.button = "Display Details";
    }
  }

  //   onCreateUser() {
  //     if (this.username != "") {
  //       this.userCreationStatus =
  //         "User was created: Welcome, " + this.username + "!";
  //       this.userList.push(this.username);
  //       this.status = true;
  //     } else {
  //       this.userCreationStatus = "You need to type a username";
  //     }
  //   }

  //   onResetButton() {
  //     this.username = "";
  //     this.userCreationStatus = "No user was create";
  //     this.status = false;
  //   }

  //   onUserType(event: Event) {
  //     this.username = (<HTMLInputElement>event.target).value;
  //   }

  getColor() {
    return this.i >= 5 ? "white" : "black";
  }
}
