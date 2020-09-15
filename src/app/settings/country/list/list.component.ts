import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  constructor(private generalService:GeneralService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.callHttp();
  }
  callHttp(): void {
    this.generalService.getAllCountries().subscribe(
      (res: any) => {
        console.log(res);
        
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
}
