import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core'; 

@Component({
  selector: 'app-available-service',
  templateUrl: './available-service.component.html',
  styleUrls: ['./available-service.component.scss']
})
export class AvailableServiceComponent implements OnInit {

  public total = 0;
  @Input() services: any;
 

  constructor() { }

  calculateTotal() {
    this.total = 0;
    if (this.services)
    this.services.forEach(element => {
      this.total += element.value;
      this.total += element.additional_value;
    });
  } 

  ngOnInit() { 
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.calculateTotal(); 
  }
}
