import { Component } from '@angular/core';
import { UserResponse } from '../../core/models/user/user_response';
import { UserService } from '../../core/services/user/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers: [MessageService]
})
export class UsersComponent {
  protected users: UserResponse[] = [] as UserResponse[];
  public first = 0;
  public rows = 10;
  public searchValue: string | undefined;
  public isLoading: boolean = false;
  public unverifiedUserCount: number = 0;
  
  constructor(public user: UserService, private messageService: MessageService) {}

  getUsers() {
    this.isLoading = true;
    this.user.get().subscribe({
      next:(d) => {
        this.isLoading = false;
        this.users = d.data;
        this.unverifiedUserCount = 0;
        this.users.forEach((user) => {
          if(user.verifier == 0) {
            this.unverifiedUserCount++;
          }
        });
      },
      error:(e) => {
        this.isLoading = false;
        throw e;
      }
    })
  }

  deleteUser(id: string) {
    this.user.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User deleted' });
        this.getUsers();
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    })
  }
  
  verify(id: string) {
    
    this.user.verifyUser(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is verified' });
        this.getUsers();
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
        return this.users ? this.first === this.users.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.users ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getUsers();
  }
}
