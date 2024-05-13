import { Component, Inject } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { UiService } from '../../services/ui.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationCreationRequest } from '../../../core/models/notification/notification_creation_request';
import { NotificationService } from '../../../core/services/notification/notification.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
  providers: [ MessageService ]
})
export class TopbarComponent {
  public items: MenuItem[] | undefined;
  public rightMenuItems: MenuItem[] | undefined;
  public userDetails: any;
  public visible: boolean = false;
  public newNotification = new FormGroup({
    content: new FormControl(),
  });

  constructor(
    private uiService: UiService,
    private authenticationService: AuthenticationService,
    private router: Router,
    private notifcation: NotificationService,
    private messageService: MessageService
  ) {}

  public setSidebar() {
    this.uiService.setVisibility();
  }

  public createNotification() {
    let newNotification: NotificationCreationRequest = {
      content: this.newNotification.value.content,
    };

    this.notifcation.create(newNotification).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Notification sent' });
        this.visible = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured' });
      }
    });
  }

  public displayNotificationCreationDialog() {
    this.visible = true;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/']);
        }
      },
      {
        label: 'New notification',
        icon: 'pi pi-bell',
        command: () => {
          this.displayNotificationCreationDialog();
        }
      },
    ];
    this.rightMenuItems = [
      {
        label: 'Se déconnecter',
        icon: 'pi pi-sign-out',
        command: () => this.authenticationService.logout()
      }
    ];
    this.authenticationService.getUserData().subscribe({
      next: (d) => {
        console.log(d);
        this.userDetails = d.data;
      },
      error: (e) => {
        throw e;
      }
    })
  }
}
