import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { IReqRegisterationStatus } from "./IReqRegisterationStatus";
import { RegisterationService } from "./Registeration.service";
import { RequiredDocumentsService } from "../required-documents/required-document.service";

@Component({
  selector: "app-registeration-status",
  templateUrl: "./registeration-status.component.html",
  styleUrls: ["./registeration-status.component.scss"],
})
export class RegisterationStatusComponent implements OnInit {
  public callForm: FormGroup;
  public updateDocumentsForm: FormGroup;
  public errorMessage = "";
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  public data: IReqRegisterationStatus = { name: "", notes: "" };
  public levels = [];
  public departments = [];
  public item = "";
  public id = "";
  public deletedId = "";
  public requiredDocuments = [];
  constructor(
    private toastr: ToastrService,
    private service: RegisterationService,
    private requiredDocumentService: RequiredDocumentsService
  ) {}

  ngOnInit() {
    this.callForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      notes: new FormControl(null, []),
    });
    this.requiredDocumentService.getAll().subscribe((res: any) => {
      this.requiredDocuments = res;
      console.log(this.requiredDocuments);
    });
    this.callHttp();
  }
  callHttp(): void {
    this.service.getAll().subscribe((res: any) => {
      this.rows = res.data;
      console.log(res);

      this.dtTrigger.next();
    });
  }
  onSubmit() {
    const itemData: IReqRegisterationStatus = {
      name: this.callForm.value.name,
      notes: this.callForm.value.notes,
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
    this.data.name = this.callForm.value.name;

    this.service.create(this.data).subscribe((res: any) => {
      console.log(res);

      if (res.status == 0) {
        this.toastr.error(res.message.name, "");
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
  reset() {
    this.callForm.reset();
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
  getItemData(id) {
    this.id = id;
    this.service.getItemById(id).subscribe((res: any) => {
      if (res.status == 1) {
        this.name.setValue(res.data.name);
        this.notes.setValue(res.data.notes);
        document.getElementById("openModal").click();
        this.item = res.data;
      }
    });
  }
  launchModal(id) {
    this.deletedId = id;
  }
  getItemInfo(id) {
    this.service.getItemById(id).subscribe((res: any) => {
      console.log(res);
    });
  }
  get name() {
    return this.callForm.get("name");
  }
  get notes() {
    return this.callForm.get("notes");
  }
}
