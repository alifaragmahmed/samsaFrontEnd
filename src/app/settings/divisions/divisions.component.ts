import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { IReqDivisions } from "./IReqDivisions";
import { DivisionService } from "./divisions.servic";
import { GeneralService } from "src/app/shared/services/general.service";

@Component({
  selector: "app-divisions",
  templateUrl: "./divisions.component.html",
  styleUrls: ["./divisions.component.scss"],
})
export class DivisionsComponent implements OnInit {
  public callForm: FormGroup;
  public errorMessage = "";
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public data: IReqDivisions = { name: "", department_id: "", notes: "" };
  public levels = [];
  public departments = [];
  public item = "";
  public id = "";
  public deletedId = "";

  constructor(
    private generalService: GeneralService,
    private service: DivisionService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
    };

    this.generalService.getAllLevels().subscribe((res: any) => {
      this.levels = res.data;
      console.log(res);
    });
    this.generalService.getAllDepartments().subscribe((res: any) => {
      // this.departments = res.data;
      console.log(res);
    });

    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      department_id: new FormControl(null, [Validators.required]),
      notes: new FormControl(null, []),
      level_id: new FormControl(null, [Validators.required]),

    });
    this.callHttp();
  }

  callHttp(): void {
    this.service.getAll().subscribe((res: any) => {
      this.rows = res.data;
      this.dtTrigger.next();
    });
  }

  getItemData(id) {
    this.id = id;
    this.service.getItemById(id).subscribe((res: any) => {
      if (res.status == 1) {
        this.name.setValue(res.data.name);
        this.level_id.setValue(res.data.department.level_id);
        this.department_id.setValue(res.data.department_id);
        this.notes.setValue(res.data.notes);
        document.getElementById("openModal").click();
        this.item = res.data;
      }
    });
  }
  onSubmit() {
    const itemData: IReqDivisions = {
      name: this.callForm.value.name,
      notes: this.callForm.value.notes,
      department_id:this.callForm.value.department_id,
    };
    this.service.update(this.id, itemData).subscribe((res: any) => {
      if (res.status == 1) {
        document.getElementById("cancell").click();
        this.callHttp();
        this.isSubmitClick = false;
        this.item = "";
        this.toastr.success(res.message, "");
        this.dtTrigger.unsubscribe();
      } else {
        this.toastr.error(res.message, "");
      }
    });
  }
  create() {
    this.errorMessage = "";
    if (this.callForm.invalid) {
      this.errorMessage = "من فضلك ادخل بيانات صحيحة";
      return;
    }
    this.isSubmitClick = true;
    this.data.notes = this.callForm.value.notes;
    this.data.department_id = this.callForm.value.department_id;
    this.data.name = this.callForm.value.name;

    this.service.create(this.data).subscribe((res: any) => {
      if (res.status == 0) {
        
       
        this.toastr.error(res.message, "");
        this.errorMessage = res.message;
        this.isSubmitClick = false;
      } else {
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.toastr.success(res.message, "");
        this.dtTrigger.unsubscribe();
        document.getElementById("cancel").click();
        this.callHttp();
      }
    });
  }

  delete() {
    this.service.delete(this.deletedId).subscribe((res) => {
      if (res.status == 1) {
        this.isSubmitClick = false;
        document.getElementById("cancello").click();
        this.toastr.success(res.message, "");
        const index = this.rows.findIndex((v) => v.id === this.deletedId);
        this.rows.splice(index, 1);
      } else {
        this.toastr.error(res.message, "");
      }
    });
  }
  launchModal(id) {
    // console.log(id);
    this.deletedId = id;
  }
  felterDepartments(level_id){    
    this.service.getDepartmantByLevelId(level_id.value).subscribe((res:any)=>{
      console.log(res);
      
      this.departments = res.data;
    });
  }
  get name() {
    return this.callForm.get("name");
  }
  get notes() {
    return this.callForm.get("notes");
  }
  get department_id(){
    return this.callForm.get("department_id");
  }
  get level_id(){
    return this.callForm.get("level_id");
  }
}
