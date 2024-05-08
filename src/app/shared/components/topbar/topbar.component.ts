import { Component, Inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UiService } from '../../services/ui.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  public items: MenuItem[] | undefined;
  public rightMenuItems: MenuItem[] | undefined;
  public userDetails: any;

  constructor(private uiService: UiService, private authenticationService: AuthenticationService, private router: Router) {}

  public setSidebar() {
    this.uiService.setVisibility();
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
        routerLink: '/'
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
