import { Component } from '@angular/core';
import { ReportResponse } from '../../core/models/report/report_response';
import { ReportService } from '../../core/services/report/report.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  providers: [MessageService]
})
export class ReportsComponent {
  protected reports: ReportResponse[] = [] as ReportResponse[];
  first = 0;
  rows = 10;
  searchValue: string | undefined;
  
  constructor(public report: ReportService, public messageService: MessageService) {}

  getReports() {
    this.report.get().subscribe({
      next:(d) => {
        this.reports = d.body.data2;
      },
      error:(e) => {
        throw e;
      }
    })
  }

  deleteReport(id: string) {
    this.report.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Report deleted' });
        this.getReports();
      },
      error: (e) => {
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
        return this.reports ? this.first === this.reports.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.reports ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getReports();
  }
}
