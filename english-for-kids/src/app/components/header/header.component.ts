import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAsideMenu(): void {
    console.log("открыто")
  }

  changeGameMode(): void {
    console.log('Поменяно')
  }
}
