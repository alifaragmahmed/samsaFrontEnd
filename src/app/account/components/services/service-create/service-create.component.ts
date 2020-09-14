import { ServiceIndexComponent } from './../service-index/service-index.component';
import { StudentServiceService } from './../../../services/student-service.service';
import { IService } from './../../../models/iservice';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {

  public item: IService = null;

  @Input() parent: ServiceIndexComponent;

  constructor(private studentService: StudentServiceService) {
    this.item = {
      name : '',
      value : 0,
      additional_value : 0,
      installment_percent : 0,
      except_level_id : null,
      division_id : null,
      copy: false,
      repeat: false,
      store_id : null,
      from_installment_id : null,
      type : null
    };
  }

  ngOnInit() {
  }

  public addService() {
    this.studentService.store(this.item).subscribe((res) => {
      this.parent.loadServices();
    });
  }
}
