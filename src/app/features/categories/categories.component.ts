import { Component } from '@angular/core';
import { CategoryResponse } from '../../core/models/category/category_response';
import { CategoryService } from '../../core/services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  protected categories: CategoryResponse[] = [] as CategoryResponse[];
  first = 0;
  rows = 10;
  searchValue: string | undefined;
  
  constructor(public category: CategoryService) {}

  getCategories() {
    this.category.get().subscribe({
      next:(d) => {
        this.categories = d.body.data;
      },
      error:(e) => {
        throw e;
      }
    })
  }
    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event: { first: number; rows: number; }) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.categories ? this.first === this.categories.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.categories ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getCategories();
  }
}
