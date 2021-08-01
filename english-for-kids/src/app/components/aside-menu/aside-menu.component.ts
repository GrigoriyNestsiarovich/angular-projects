import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models.ts/category';
import { CATEGORIES } from 'src/app/utils.ts/utilities';
@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent implements OnInit {
  constructor() { }
  links: Category[];

  ngOnInit(): void {
    this.links = CATEGORIES;
  }

  setActivePage(): void {

  }
}
