import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'english-for-kids';

  opened: boolean;

  ngOnInit(): void {
    this.opened = false;
  }

  showAsideMenu(): void {
    this.opened = !this.opened;
  }
}
