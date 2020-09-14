import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-student-payment',
  templateUrl: './student-payment.component.html',
  styleUrls: ['./student-payment.component.scss']
})
export class StudentPaymentComponent implements OnInit , OnChanges{

  public total = 0;

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
