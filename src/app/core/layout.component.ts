import {AfterViewChecked, Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/platform-browser";
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements AfterViewChecked{
  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  ngAfterViewChecked(): void {
    setTimeout(() => {
      // this.document.getElementById('start-loader').remove();
    }, 1500);
  }
}
