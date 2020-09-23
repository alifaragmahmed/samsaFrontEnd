import { Component, OnInit, Input } from '@angular/core';
import { AppModule } from '../../../../app.module'; 
import { Auth } from '../../../../shared/auth'; 
import { Message } from '../../../../shared/message';
import { Helper } from '../../../../shared/helper';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-create',
  templateUrl: './store-create.component.html',
  styleUrls: ['./store-create.component.scss']
})
export class StoreCreateComponent implements OnInit {

  public doc = AppModule.doc;
  public resource: any = {};
  public isSubmitted = false;

  constructor(private storeService: StoreService) { }

  @Input() updateResources: any;
  ngOnInit() {
  }

  validate() {
    if (!this.resource.name || this.resource.init_balance < 0)
      return false;
    
    return true;
  }

  addResource() {
    if (!this.validate())
      return Message.error(Helper.trans('fill all required data'));

    this.isSubmitted = true;
    this.resource.api_token = Auth.getApiToken();
    this.storeService.store(this.resource).subscribe((res) => {
      const data: any = res;
      if (data.status == 1) {
        Message.success(data.message);
        this.resource = {};
        this.updateResources();
      }
      else
        Message.error(data.message);

      this.isSubmitted = false;
    });
  }
}
