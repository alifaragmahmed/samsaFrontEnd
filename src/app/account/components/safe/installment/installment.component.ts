import { Message } from './../../../../shared/message';
import { Auth } from './../../../../shared/auth';
import { StudentAccountService } from './../../../services/student-account.service';
import { Component, OnInit, SimpleChanges, OnChanges, Input, Output } from '@angular/core';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {

  public total = 0;
  public studentInstallmentData: any;
  @Input() studentInstallments: any[];

  @Input() student: any;
  @Input() updateStudent: any;

  constructor(private studentAccountService: StudentAccountService) { }

  addRow() {
    const item = this.studentInstallments[this.studentInstallments.length - 1];
    item.id = null;

    this.studentInstallments.push(item);
  }

  removeRow(item: any) {
    item.deleted = 1;
  }

  getInstallmentType() {
    return this.student.old_balance > 0? "old" : "new";
  }

  setUpdateInstallmentStudentServiceData() {
    this.studentInstallmentData.student_id = this.student.id;
    this.studentInstallmentData.type = this.getInstallmentType();
    this.studentInstallmentData.api_token = Auth.getApiToken();
    this.studentInstallmentData.data = this.studentInstallments;
  }

  updateInstallments() {
    // update data of the api
    this.setUpdateInstallmentStudentServiceData();
    this.studentAccountService.updateStudentInstallments(this.studentInstallmentData).subscribe((r) => {
      const data: any = r;
      if (data.status == 1) {
        Message.success(data.message);
        this.updateStudent();
      } else {
        Message.error(data.message);
      }
    });

  }

  calculateTotal() {
    this.total = 0;
    this.studentInstallments.forEach(element => {
      this.total += element.value;
    });
  }



  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
  }

}
