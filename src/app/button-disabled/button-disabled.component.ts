import { Component } from '@angular/core';

@Component({
  selector: 'app-button-disabled',
  templateUrl: './button-disabled.component.html',
  styleUrls: ['./button-disabled.component.css']
})
export class ButtonDisabledComponent {
  buttonStatus = false;
  serverCreationStatus = "No server created yet";
  serverName = "";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.buttonStatus = true;
    }, 2000);
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = "Server Was Created ! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverCreated = true;
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
