import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-installment',
  templateUrl: './student-installment.component.html',
  styleUrls: ['./student-installment.component.scss']
})
export class StudentInstallmentComponent implements OnInit {

  public total = 0;

  @Input() installments: any[];
  @Input() showStudentInstallment: boolean;
  constructor() { }

  getTotal() {
    this.total = 0;
    return this.installments.forEach(element => {
      this.total += element.value;
    });
  }

  ngOnInit() {
  }

}
