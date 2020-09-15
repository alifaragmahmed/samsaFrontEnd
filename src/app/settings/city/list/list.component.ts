import { Component, OnDestroy, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public rows = [];
  public paging = {
    page: '1',
    size: '10',
  };
  constructor(
    private cityService:CityService
  ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.callHttp();
  }
  callHttp(): void {
    this.cityService.getAll(this.paging).subscribe(
      (res: any) => {
        console.log(res);
        
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
