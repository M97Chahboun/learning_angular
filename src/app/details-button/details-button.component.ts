import { Component } from '@angular/core';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.css']
})
export class DetailsButtonComponent {
  paragraphShowing = false;
  count = 0;
  items = [];
  showParagraph(){
    this.count++;
    this.paragraphShowing = !this.paragraphShowing;
    this.items.push(this.count);
  }
}
