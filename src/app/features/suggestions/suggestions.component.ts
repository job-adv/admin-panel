import { Component } from '@angular/core';
import { SuggestionService } from '../../core/services/suggestion/suggestion.service';
import { SuggestionResponse } from '../../core/models/suggestion/suggestion_response';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss',
  providers: [MessageService]
})
export class SuggestionsComponent {
  protected suggestions: SuggestionResponse[] = [] as SuggestionResponse[];
  first = 0;
  rows = 10;
  searchValue: string | undefined;
  actions: MenuItem[] = [];
  
  constructor(public suggestion: SuggestionService, public messageService: MessageService) {}

  getSuggestions() {
    this.suggestion.get().subscribe({
      next:(d) => {
        this.suggestions = d.body.data;
      },
      error:(e) => {
        throw e;
      }
    })
  }

  deleteSuggestion(id: string) {
    this.suggestion.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Suggestion deleted' });
        this.getSuggestions();
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
    return this.suggestions ? this.first === this.suggestions.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.suggestions ? this.first === 0 : true;
  }

  ngOnInit(): void {
    this.getSuggestions();
  }
}
