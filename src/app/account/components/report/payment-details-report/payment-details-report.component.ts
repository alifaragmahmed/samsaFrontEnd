import { Component, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { AcademicYearService } from 'src/app/account/services/academic-year.service';
import { DivisionService } from 'src/app/account/services/division.service';
import { LevelService } from 'src/app/account/services/level.service';
import { ReportService } from 'src/app/account/services/report.service';
import { StudentServiceService } from 'src/app/account/services/student-service.service';
import { ApplicationSettingService } from 'src/app/adminision/services/application-setting.service';
import { AppModule } from 'src/app/app.module';
import { Cache } from 'src/app/shared/cache';
import { Helper } from 'src/app/shared/helper';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-payment-details-report',
  templateUrl: './payment-details-report.component.html',
  styleUrls: ['./payment-details-report.component.scss']
})
export class PaymentDetailsReportComponent implements OnInit {

  doc: any = AppModule.doc;
  searchData: any = {};
  applicationSetting: any = ApplicationSettingService;
  users: any = [];
  levels: any = [];
  divisions: any = [];
  services: any = [];
  academicYears: any = [];
  academicYearExpenses: any = [];
  //
  selectedLevels = new HashTable();
  selectedDivisions = new HashTable();
  selectedYears = new HashTable();
  selectedServices = new HashTable();
  selectedAcademicYearExpenses = new HashTable();
  selectedTypes = new HashTable();

  //
  payments: any = [];
  isSubmitted = false;

  constructor(
    private userService: UserService,
    private studentService: StudentServiceService,
    private reportService: ReportService,
    private acadeimicYearExpenseService: AcademicYearService) { }


  loadUsers() {
    this.userService.get().subscribe((res) => {
      this.users = res;
    });
  }

  loadLevels() {
    this.levels = Cache.get(LevelService.LEVEL_PREFIX);
  }

  loadDivisions() {
    this.divisions = this.applicationSetting.DIVISIONS;
  }

  loadAcademicYears() {
    this.academicYears = this.applicationSetting.ACADEMIC_YEARS;
  }

  loadServices() {
    this.studentService.get().subscribe((res) => {
      this.services = res;
    });
  }

  loadAcadeimicYearExpenses() {
    if (this.selectedYears.getKeys().length ==  0)
      return;

    let currentAcademicYears = this.selectedYears.getKeys()[0];
    let data = {
      academic_year_id: currentAcademicYears,
      level_id: 1
    };
    this.acadeimicYearExpenseService.get(data).subscribe((res: any) => {
      this.academicYearExpenses = res.details;
      //
      this.loadPayments();
    });
  }

  toggleType(value) {
    if (this.searchData.payment_type == value)
      this.searchData.payment_type = '';
    else
      this.searchData.payment_type = value;
  }

  toggle(id, list = new HashTable()) {
    if (list.has(id))  {
      list.remove(id);
    }
    else {
      list.put(id, id);
    }
  }

  loadPayments() {
    this.searchData.level_id = this.selectedLevels.getKeys();
    this.searchData.division_id = this.selectedDivisions.getKeys();
    this.searchData.academic_year_id = this.selectedYears.getKeys();
    this.searchData.services = this.selectedServices.getKeys();
    this.isSubmitted = true;
    this.reportService.get(this.searchData).subscribe((res) => {
      this.payments = res;
      this.prepareTotal(res);
      this.isSubmitted = false;
    });
  }

  prepareTotal(res) {
    this.services.forEach(element => {
      element.total = res['services'][element.id];
    });
    this.academicYearExpenses.forEach(element => {
      element.total = res['academic_year_expense'][element.id];
    });
  }

  print() {
    Helper.print();
  }

  exportExcel() {
    const filename = "مدفوعات الطلاب-"+new Date().toLocaleTimeString();
    this.doc.exportExcel(filename);
  }

  ngOnInit() {
    this.loadUsers();
    this.loadLevels();
    this.loadDivisions();
    this.loadAcademicYears();
    this.loadServices();
    this.loadAcadeimicYearExpenses();

    //
    this.loadPayments();
  }

}
