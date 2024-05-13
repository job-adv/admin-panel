import { Component } from '@angular/core';
import { UserServiceService } from '../../core/services/service/service.service';
import { MessageService } from 'primeng/api';
import { ProfessionalServiceResponse } from '../../core/models/service/service_response';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  protected services: ProfessionalServiceResponse[] = [] as ProfessionalServiceResponse[];
  protected first = 0;
  protected rows = 10;
  protected searchValue: string | undefined;
  
  constructor(public service: UserServiceService, public messageService: MessageService) {}

  getServices() {
    this.service.get().subscribe({
      next:(d) => {
        this.services = d.body.data;
      },
      error:(e) => {
        throw e;
      }
    })
  }

  deleteService(id: number) {
    this.service.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Service deleted' });
        this.getServices();
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
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
        return this.services ? this.first === this.services.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.services ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getServices();
  }
}
