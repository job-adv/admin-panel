import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SubcategoryResponse } from '../../core/models/subcategory/subcategory_response';
import { SubcategoryService } from '../../core/services/subcategory/subcategory.service';
import { SubcategoryUpdateRequest } from '../../core/models/subcategory/subcategory_update_request';
import { SubcategoryCreationRequest } from '../../core/models/subcategory/subcategory_creation_request';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrl: './subcategories.component.scss'
})
export class SubcategoriesComponent {
  protected subcategories: SubcategoryResponse[] = [] as SubcategoryResponse[];
  first = 0;
  rows = 5;
  searchValue: string | undefined;
  public visible: boolean = false;
  public editVisible: boolean = false;
  public newSubcategory = new FormGroup({
    name: new FormControl(),
    picture: new FormControl(),
    cat_id: new FormControl(),
  });

  public editSubcategory = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    picture: new FormControl(),
    cat_id: new FormControl(),
  });
  
  constructor(
    private subcategory: SubcategoryService,
    private messageService: MessageService,
  ) {}

  displayNewDialog() {
    this.visible = true;
  }

  getSubcategories() {
    this.subcategory.get().subscribe({
      next:(d) => {
        this.subcategories = d.body.data;
      },
      error:(e) => {
        throw e;
      }
    })
  }

  edit(subcategory: SubcategoryResponse) {
    this.editVisible = true;

    this.editSubcategory.setValue({
      id: subcategory.subCategory_id,
      name: subcategory.subCategory_name,
      picture: subcategory.category_picture,
      cat_id: subcategory.category_id,
    });
  }

  saveCategory() {
    let editRequest: SubcategoryUpdateRequest = {
      category_id: this.editSubcategory.value.cat_id,
      subCategory_picture: this.editSubcategory.value.picture,
      subCategory_name: this.editSubcategory.value.name,
    };

    this.subcategory.update(this.editSubcategory.value.id, editRequest).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category saved' });
        this.getSubcategories();
        this.editVisible = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    });
  }

  createCategory() {
    let newSubcategory: SubcategoryCreationRequest = {
      subCategory_name: this.newSubcategory.value.name,
      subCategory_picture: this.newSubcategory.value.picture,
      category_id: this.newSubcategory.value.cat_id,
    };

    this.subcategory.create(newSubcategory).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category created' });
        this.getSubcategories();
        this.visible = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    });
  }

  deleteCategory(id: number) {
    this.subcategory.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Subcategory deleted' });
        this.getSubcategories();
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
        return this.subcategories ? this.first === this.subcategories.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.subcategories ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getSubcategories();
  }
}
