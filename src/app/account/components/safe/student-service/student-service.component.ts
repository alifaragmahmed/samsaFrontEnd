import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-student-service',
  templateUrl: './student-service.component.html',
  styleUrls: ['./student-service.component.scss']
})
export class StudentServiceComponent implements OnInit {

  public total = 0;

  @Input() services: any[];

  constructor() { }

  calculateTotal() {
    this.total = 0;
    this.services.forEach(element => {
      this.total += element.value;
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal();
  }

}
