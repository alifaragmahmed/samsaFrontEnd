import { Component, OnInit } from '@angular/core';
import { StudentAccountService } from '../account/services/student-account.service';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  searchData: any = {};
  student: any = {};
  cardTypes: any = [];
  selectedCard: any = {};

  //
  public searchKey: string;
  public studentSearchDialogShow = false;
  public studentSearchDialogLoader = false;
  public isWait = false;
  public timeoutId;
  public students: any = [];

  //

  constructor(private studentAcountService: StudentAccountService,
    private cardService: CardService) { }

  ngOnInit() {
    this.loadCardTypes();
  }

  /**
   * load all card types
   *
   * @return Array
   */
  loadCardTypes() {
    this.cardService.getTypes().subscribe((res) => {
      this.cardTypes = res;
    });
  }

  //***********************************************
  //*** student search methods
  //***********************************************
  //
  searchInputEvent() {
    if (!this.searchKey)
      return;

    this.students = [];
    this.studentSearchDialogLoader = true;
    this.isWait = true;
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
       this.searchAboutStudent();
    }, 500);
  }

  searchAboutStudent() {
    this.studentAcountService.search(this.searchKey).subscribe((r) => {
        this.studentSearchDialogLoader = false;
        this.students = r;
        if (this.students.length > 0) {
          this.studentSearchDialogShow = true;
        }
    });
  }

  selectStudent(student) {
    if (student) {
      this.searchData.student_id = student.id;
      this.searchKey = student.name;
      this.loadStuentInfo(student.id);

    }
    this.studentSearchDialogShow = false;
  }

  loadStuentInfo(id) {
    this.studentAcountService.getStudentAccount(id).subscribe((res: any) => {
      this.student = res;
    });
  }

}
