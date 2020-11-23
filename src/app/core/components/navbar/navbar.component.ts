import {Component, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Auth } from '../../../shared/auth';
import { SystemSettingService } from '../../services/system-setting.service';
import { Helper } from '../../../shared/helper';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavBarComponent implements OnInit {

  /**
   * observe time to load notifications
   * 2 minuties
   */
  public static OBSERVE_TIME = 2 * 60 * 1000;

  public doc: any = document;
  public sidebarOpened = false;
  public user: any = Auth.user();
  public notifications: any = [];
  public message: string;

  public notify = of(this.doc.notify);

  constructor(config: NgbDropdownConfig,private authService: AuthService,
              private router: Router, private systemSettingService: SystemSettingService) {
    config.placement = 'bottom-right';
  }

  initMessage(arr) {
    this.message = Helper.trans("You have {n} notifications").replace("{n}", arr.length);
  }

  ngOnInit() {
    this.user = Auth.user();
    this.initMessage(this.notifications);
    this.loadNotifications();
    //
    this.observeNotifications();
  }

  public observeNotifications() {
    setInterval(() => {
      if (this.doc.notify == 1)
        this.loadNotifications();
    }, 5000);
  }//

  loadNotifications() {
    this.systemSettingService.getNotifications().subscribe((res: any[]) => {
      res.forEach(element => {
        this.notifications.push(element);
      });
      this.notifications.reverse();
      //
      if (res.length > 0) {
        this.initMessage(res);
        this.doc.playSound('ios_notification');
      }
      this.doc.notify = 0;
    });
  }

  logout(){
    Auth.logout();
    this.router.navigate(['/login']).then().catch();
  }
}
