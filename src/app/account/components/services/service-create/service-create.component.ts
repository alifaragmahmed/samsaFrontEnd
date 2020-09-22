import { ServiceIndexComponent } from './../service-index/service-index.component';
import { StudentServiceService } from './../../../services/student-service.service';
import { IService } from './../../../models/iservice';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../../shared/message';
import { AppModule } from '../../../../app.module';

@Component({
  selector: 'app-service-create',
  templateUrl: './service-create.component.html',
  styleUrls: ['./service-create.component.scss']
})
export class ServiceCreateComponent implements OnInit {

  public doc: any = AppModule.doc;
  public item: any = {};

  public isSubmitted = false;

  @Input() parent: ServiceIndexComponent;
  @Input() loadServices: any;
  @Input() showCreateModal: any = false;
  

  constructor(private studentService: StudentServiceService) {
    // this.initItem();
  }

  initItem() {
    this.item = {
      name : '',
      value : 0,
      additional_value : 0,
      installment_percent : 0,
      except_level_id : null,
      division_id : null,
      copy: false,
      repeat: false, 
      from_installment_id : null,
      type : null
    };
  }

  validate() {
    let valid = true;
    if (
      !this.item.name || 
      !this.item.type    
    )
      valid = false;
    return valid;
  }

  ngOnInit() {
  }

  public addService() {
    if (!this.validate())
      return Message.error('please fill all data');

    this.isSubmitted = true;    
    this.studentService.store(this.item).subscribe((res) => {
      const r: any = res;
      if (r.status == 1) {
        Message.success(r.message);
      }
      else
        Message.error(r.message);

      if (r.status == 1) {
        this.initItem();
        this.loadServices();
      }

      this.isSubmitted = false;
    });
  }
}
