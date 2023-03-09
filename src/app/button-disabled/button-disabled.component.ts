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

constructor(){
  setTimeout(() => {
    this.buttonStatus = true;
  }, 2000);
}
onCreateServer(){
  this.serverCreationStatus = "Server Was Created !";
}

onUpdateServerName(event:Event){
this.serverName = (<HTMLInputElement>event.target).value;
}
}
