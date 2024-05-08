import { Component } from '@angular/core';
import { TpResponse } from '../../core/models/tp/tp_response';
import { MenuItem, MessageService } from 'primeng/api';
import { TpService } from '../../core/services/tp/tp.service';
import { TpCreationRequest } from '../../core/models/tp/tp_creation_request';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrl: './tp.component.scss',
  providers: [MessageService]
})
export class TpComponent {
  protected usageCondtions: TpResponse[] = [] as TpResponse[];
  first = 0;
  rows = 10;
  searchValue: string | undefined;
  actions: MenuItem[] = [];
  public visible: boolean = false;
  public content: string = '';
  
  constructor(public tp: TpService, private messageService: MessageService) {}

  showDialog() {
    this.visible = true;
  }

  getUc() {
    this.tp.get().subscribe({
      next:(d) => {
        this.usageCondtions = d.body.data;
      },
      error:(e) => {
        throw e;
      }
    })
  }

  createCondition() {
    let newCondition: TpCreationRequest = {
      content: this.content
    };

    console.log(newCondition);

    /*this.tp.create(newCondition).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Condition created' });
        this.getUc();
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    })*/
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
        return this.usageCondtions ? this.first === this.usageCondtions.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.usageCondtions ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getUc();
  }
}
