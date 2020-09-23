import {AfterViewChecked, Component, Inject, OnChanges, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
import { Auth } from '../shared/auth';
import { Router } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements AfterViewChecked , OnChanges{
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
  }
  ngAfterViewChecked(): void {
    setTimeout(() => {
      // this.document.getElementById('start-loader').remove();
    }, 1500);
  }
 
  watchUser() {
    console.log(Auth.getApiToken());
    if (!Auth.getApiToken())
      this.router.navigate(['/login'], { 
      }).then().catch(); 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.watchUser();
  }


}
