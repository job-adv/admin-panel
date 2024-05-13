import {Component, inject} from '@angular/core';
import { PostService } from '../../core/services/post/post.service';
import { ReportService } from '../../core/services/report/report.service';
import { UserService } from '../../core/services/user/user.service';
import { SuggestionService } from '../../core/services/suggestion/suggestion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public reportsCount: number = 0;
    public postsCount: number = 0;
    public usersCount: number = 0;
    public suggestionsCount: number = 0;

    constructor(
        public post: PostService,
        public report: ReportService,
        public user: UserService,
        public suggestion: SuggestionService,
    ) {}

    getReports() {
        this.report.get().subscribe({
          next:(d) => {
            this.reportsCount = d.body.data2.length;
          },
          error:(e) => {
            throw e;
          }
        })
      }

    getPosts() {
        this.post.get().subscribe({
          next:(d) => {
            this.postsCount = d.body.data.length;
          },
          error:(e) => {
            throw e;
          }
        })
    }

    getUsers() {
        this.user.get().subscribe({
          next:(d) => {
            this.usersCount = d.data.length;
          },
          error:(e) => {
            throw e;
          }
        })
    }

    getSuggestions() {
        this.suggestion.get().subscribe({
          next:(d) => {
            this.suggestionsCount = d.body.data.length;
          },
          error:(e) => {
            throw e;
          }
        })
      }

    ngOnInit() {
        this.getPosts();
        this.getReports();
        this.getSuggestions();
        this.getUsers();
    }
}
