import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'click the button';
  changeText = function() {
    this.text = 'You have clicked the button!';
  }

}
