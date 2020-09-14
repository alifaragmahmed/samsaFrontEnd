import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavBarComponent implements OnInit {
  public sidebarOpened = false;

  constructor(config: NgbDropdownConfig,private authService: AuthService,
              private router: Router) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
  }
  logout(){
    this.authService.removeAdminLoalStorage();
    this.authService.notifySubscribers(false);
    this.router.navigate(['admin/auth/login']).then().catch();
  }
}
