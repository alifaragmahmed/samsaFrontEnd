import { Message } from './../../../../shared/message';
import { Auth } from './../../../../shared/auth';
import { StudentAccountService } from './../../../services/student-account.service';
import { Component, OnInit, SimpleChanges, OnChanges, Input, Output } from '@angular/core';
import { Helper } from '../../../../shared/helper';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.scss']
})
export class InstallmentComponent implements OnInit {

  public total = 0;
  public studentInstallmentData: any = {};
  @Input() studentInstallments: any[]; 
  @Input() student: any;
  @Input() updateStudent: any;
  

  constructor(private studentAccountService: StudentAccountService) { }

  /**
   * add row in the data and in installments arr
   */
  addRow() {
    const item = this.createEmptyInstallmentObject();//this.studentInstallments[this.studentInstallments.length - 1];

    this.studentInstallments.push(item);
  }

  /**
   * remove row from table and add deleted attribute
   * item.delted = 1
   * @param item 
   */
  removeRow(item: any) {
    item.deleted = 1;
  }

  /**
   * get installment type 
   * @return type string
   */
  getInstallmentType() {
    return this.student.old_balance > 0? "old" : "new";
  }

  /**
   * build request data of studentAccountService 
   */
  buildInstallmentRequestData() {
    this.studentInstallmentData.student_id = this.student.id;
    this.studentInstallmentData.type = this.getInstallmentType();
    this.studentInstallmentData.api_token = Auth.getApiToken();
    this.studentInstallmentData.data = this.studentInstallments;
  }

  /**
   * update installmenst of student 
   */
  update() {
    // update data of the api
    this.buildInstallmentRequestData();
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

  /**
   * validate on installments arr
   */
  validate() {
    let valid = true;
    this.studentInstallments.forEach(element => {
      if (!element.date || element.price <= 0)
        valid = false;
    });

    return valid;
  }

  /**
   * perform update 
   * validate and update
   */
  performUpdate() {
    if (!this.validate())
      return Message.error(Helper.trans('please enter all data'));
    this.update();
  }

  /**
   * create empty object of installment to add new row 
   */
  createEmptyInstallmentObject() {
    return {
      date: '',
      value: 0,
      paid: 0
    };
  }

  /**
   * calculate total of installments
   */
  calculateTotal() {
    this.total = 0;
    this.studentInstallments.forEach(element => {
      this.total += element.value;
    });
  }

 
  ngOnInit() {
    this.updateStudent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
  }

}
