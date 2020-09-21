import { Component, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Subject } from 'rxjs';
import { GovernmentService } from '../services/government.service';
import { ToastrService } from 'ngx-toastr';
import { IReqItem } from '../models/IReqItem';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dtElement: DataTableDirective;
  isDtInitialized:boolean = false;
  public data: IReqItem = { name: '' , country_id:''};
  public callForm: FormGroup;
  public errorMessage = '';
  public nameError = '';
  public governmentError = '';
  public countryError = '';
  public isSubmitClick = false;

  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public countries = [];
  public sucreq = false;

  public query = {
    page: '1',
    size: '10',
  };
  constructor(
    private generalService:GeneralService, 
    private service: GovernmentService,
    private toastr: ToastrService
  ) {
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      country_id: new FormControl(null, [
        Validators.required,
      ]),
    });
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10 
    };
    this.generalService.getAllCountries().subscribe((res:any)=>{
      this.countries = res.data;
    });
    this.callHttp();
  }
  
  callHttp(): void {
    this.service.getAll(this.query).subscribe(
      (res: any) => {
        console.log(res);
        
        this.rows = res.data;
        this.dtTrigger.next();
      }
    );
  }
  delete(id) {
    this.service.delete(id).subscribe(
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

  create(){
    this.nameError = '';
    if (this.callForm.invalid) {
      this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
      return;
    }
    this.isSubmitClick = true;
    this.data.name = this.callForm.value.name;
    this.data.country_id = this.callForm.value.country_id;

    
    this.service.create(this.data).subscribe((res:any)=>{
      console.log(res);
      this.dtTrigger.unsubscribe();
      if(res.status == 0){
        this.isSubmitClick = false;
        if(res.message.country_id)
        this.toastr.error(res.message.country_id, '');
        if(res.message.name)
        this.toastr.error(res.message.name, '');


      }else{
        this.toastr.success(res.message, '');
        this.errorMessage = '';
        this.isSubmitClick = true;
        
        this.callHttp();

      };
    })
  }
  get name() {
    return this.callForm.get('name');
  }
  get country_id() {
    return this.callForm.get('country_id');
  }
// loadAllData() {

// const that = this;


// this.dtOptions = {
//   pagingType: 'full_numbers',
//   pageLength: 10,
//   serverSide: true,
//   processing: true,
//   ajax: (dataTablesParameters: any, callback) => {
//     that._http
//       .post<DataTablesResponse>(
//         //'https://angular-datatables-demo-server.herokuapp.com/',
//         this.env.apiUrl + 'api/setup/ClientList_SelectAll_Grid',
//         dataTablesParameters, {}
//       ).subscribe(resp => {
//         //console.log(dataTablesParameters);
//         that.modelList = resp.data;


//         callback({
//           recordsTotal: resp.recordsTotal,
//           recordsFiltered: resp.recordsFiltered,
//           data: []
//         });
//       });
//   },
//   columns: [{ data: 'ClientID' }, { data: 'ClientName' }, { data: 'ClientPhone' }, { data: 'JoinDate' }, { data: 'Email' }, { data: 'IsActive' }, { defaultContent: '', orderable: false }]
// };



//  }

//  ngAfterViewInit(): void {
//     this.dtTrigger.next();
//  }



//  rerender(): void {

// this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//   // Destroy the table first
//   dtInstance.destroy();
//   // Call the dtTrigger to rerender again
//   this.dtTrigger.next();
// });


// }


}
