import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { AppModule } from '../../../../app.module';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss']
})
export class StudentPaymentComponent implements OnInit , OnChanges{

  public total = 0;
  public doc: any = AppModule.doc;

  @Input() payments: any[];

  constructor() { }

  calculateTotal() {
    this.total = 0;
    this.payments.forEach(element => {
      this.total += element.value;
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
  }

}
