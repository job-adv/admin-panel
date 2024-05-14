import { Component } from '@angular/core';
import { CategoryResponse } from '../../core/models/category/category_response';
import { CategoryService } from '../../core/services/category/category.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryCreationRequest } from '../../core/models/category/category_creation_request';
import { MessageService } from 'primeng/api';
import { CategoryUpdateRequest } from '../../core/models/category/category_update_request';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  providers: [ MessageService ]
})
export class CategoriesComponent {
  protected categories: CategoryResponse[] = [] as CategoryResponse[];
  first = 0;
  rows = 5;
  searchValue: string | undefined;
  public visible: boolean = false;
  public editVisible: boolean = false;
  public newCategory = new FormGroup({
    name: new FormControl(),
    picture: new FormControl(),
    icon: new FormControl(),
  });

  public editCategory = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    picture: new FormControl(),
    icon: new FormControl(),
  });
  
  constructor(
    private category: CategoryService,
    private messageService: MessageService,
  ) {}

  displayNewDialog() {
    this.visible = true;
  }

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

  edit(category: CategoryResponse) {
    this.editVisible = true;

    this.editCategory.setValue({
      name: category.category_name,
      picture: category.category_picture,
      icon: category.category_icon,
      id: category.category_id,
    });
  }

  saveCategory() {
    let editRequest: CategoryUpdateRequest = {
      category_name: this.editCategory.value.name,
      category_picture: this.editCategory.value.picture,
      category_icon: this.editCategory.value.icon,
    };

    this.category.update(this.editCategory.value.id, editRequest).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category saved' });
        this.getCategories();
        this.editVisible = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    });
  }

  createCategory() {
    let newCategory: CategoryCreationRequest = {
      category_name: this.newCategory.value.name,
      category_picture: this.newCategory.value.picture,
      category_icon: this.newCategory.value.icon,
    };

    this.category.create(newCategory).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category created' });
        this.getCategories();
        this.visible = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    });
  }

  deleteCategory(id: number) {
    this.category.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category deleted' });
        this.getCategories();
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    });
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
