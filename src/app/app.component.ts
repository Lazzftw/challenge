import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isShown: boolean = false ; 

  toggleShow(){
    this.isShown = !this.isShown;
  }

}
