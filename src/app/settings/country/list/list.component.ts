import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Subject } from 'rxjs';
import { CountryService } from '../services/country.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  constructor(private generalService:GeneralService, private countryService:CountryService , private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      // dom: 'Bfrtip',
      // // Configure the buttons
      // buttons: [
      //   'columnsToggle',
      //   'colvis',
      //   'copy',
      //   'print',
      //   'excel',
      //   {
      //     text: 'Some button',
      //     key: '1',
      //     action: function (e, dt, node, config) {
      //       alert('Button activated');
      //     }
      //   }
      // ]      
     
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

  delete(id) {
    this.countryService.deleteCountryById(id).subscribe(
      (res) => {
        console.log(res);
        if(res.status == 1){
          this.toastr.success(res.message, '');
          const index = this.rows.findIndex(v => v.id === id);
          this.rows.splice(index, 1);
        }else{
          this.toastr.error(res.message, '');

        }
       
      });
  }
}
