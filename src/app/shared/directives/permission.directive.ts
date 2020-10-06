import { Directive, ElementRef, Input } from '@angular/core';
import { AppModule } from 'src/app/app.module';
import { Auth } from '../auth';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {


  public permission: string;

  constructor(private el: ElementRef) {
    this.permission = el.nativeElement.getAttribute('permission');
    //console.log(this.permission);
    //console.log(!Auth.can(this.permission));
    if (!Auth.can(this.permission))
      el.nativeElement.remove();
  }

}
