import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { UiService } from '../../services/ui.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  public userDetails: any;

  constructor(public uiService: UiService, private authenticationService: AuthenticationService) {}
  

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

  ngOnInit(): void {
    this.authenticationService.getUserData().subscribe({
      next: (d) => {
        this.userDetails = d.data;
      },
      error: (e) => {
        throw e;
      }
    })
  }
}
