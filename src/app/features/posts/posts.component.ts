import { Component, OnInit } from '@angular/core';
import { PostService } from '../../core/services/post/post.service';
import { PostResponse } from '../../core/models/post/post_response';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  providers: [MessageService]
})
export class PostsComponent implements OnInit {
  protected posts: PostResponse[] = [] as PostResponse[];
  first = 0;
  rows = 10;
  searchValue: string | undefined;
  
  constructor(public post: PostService, public messageService: MessageService) {}

  getPosts() {
    this.post.get().subscribe({
      next:(d) => {
        this.posts = d.body.data;
      },
      error:(e) => {
        throw e;
      }
    })
  }

  deletePost(id: number) {
    this.post.delete(id).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Post deleted' });
        this.getPosts();
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
        return this.posts ? this.first === this.posts.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.posts ? this.first === 0 : true;
    }

  ngOnInit(): void {
    this.getPosts();
  }
}
