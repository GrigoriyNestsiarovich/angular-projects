import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models.ts/category';
import { CATEGORIES } from 'src/app/utils.ts/utilities';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  categories: Category[];
  constructor() { }

  async ngOnInit(): Promise<void> {
    this.categories = CATEGORIES;
  }

  insertCategories(): void {

  }

  showCategoryWords(id: number): void {
    console.log(id)
  }

}
