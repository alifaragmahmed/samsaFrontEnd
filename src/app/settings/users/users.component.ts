import { Component, OnInit } from '@angular/core';
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { IReqUsers } from "./IReqUsers";
import { UserService } from "./users.service";
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public publicUrl = environment.publicUrl;

  public callForm: FormGroup;
  public errorMessage = "";
  public isSubmitClick = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  public rows = [];
  // public data: IReqUsers = { name: "", notes: "" };
  public roles = [];
  public item = "";
  public id = "";
  public deletedId = "";

  constructor(
    private toastr: ToastrService,
    private service: UserService
    )
     {
      this.callForm = new FormGroup({
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ]),
        role_id:new FormControl(null, [Validators.required]),
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        phone: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
        image: new FormControl(null, []),
        notes: new FormControl(null, []),
      });
     }

     ngOnInit() {
      this.dtOptions = {
        pagingType: "full_numbers",
        pageLength: 10,
      };
      this.service.getAllRoles().subscribe((res:any)=>{
        this.roles = res.data;
      });

      this.callHttp();
    }
    callHttp(): void {
      this.service.getAll().subscribe((res: any) => {
        console.log(res.data);
        
        this.rows = res.data;
        this.dtTrigger.next();
      });
    }
    onSubmit() {
      const itemData: IReqUsers = {
        name: this.callForm.value.name,
        username: this.callForm.value.username,
        image: this.callForm.value.image,
        password: this.callForm.value.password,
        phone: this.callForm.value.phone,
        email: this.callForm.value.email,
        notes:this.callForm.value.notes,
        role_id:this.callForm.value.role_id,
      };
      console.log(itemData);
      
      this.service.update(this.id,itemData).subscribe((res: any) => {
        if (res.status == 1) {
          document.getElementById("cancell").click();
          this.callHttp();
          this.isSubmitClick = false;
          this.item = "";
          this.toastr.success(res.message, "");
          this.dtTrigger.unsubscribe();
        } else {
          console.log(res);
          
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
      const itemData: IReqUsers = {
        name: this.callForm.value.name,
        username: this.callForm.value.username,
        image: this.callForm.value.image,
        password: this.callForm.value.password,
        phone: this.callForm.value.phone,
        email: this.callForm.value.email,
        notes:this.callForm.value.notes,
        role_id:this.callForm.value.role_id,
      }; 
      console.log(itemData);
        
      this.service.create(itemData).subscribe((res: any) => {
        console.log(res);
        
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
          document.getElementById("cancello").click();
          this.toastr.success(res.message, "");
          const index = this.rows.findIndex((v) => v.id === this.deletedId);
          this.rows.splice(index, 1);
        } else {
          document.getElementById("cancello").click();
          this.toastr.error(res.message, "");
        }
      });
    }
    getItemData(id) {
      this.id = id;
      this.service.getItemById(id).subscribe((res: any) => {
        console.log(res);
        
        if (res.status == 1) {
          this.name.setValue(res.data.name);
          this.username.setValue(res.data.username);
          this.phone.setValue(res.data.phone);
          this.email.setValue(res.data.email);
          this.name.setValue(res.data.name);
          this.role_id.setValue(res.data.role.id);
          this.password.setValue(res.data.password);
          this.notes.setValue(res.data.notes);
          document.getElementById("openModal").click();
          this.item = res.data;
        }
      });
    }
    launchModal(id) {
      this.deletedId = id;
    }
    get name() {
      return this.callForm.get("name");
    }
    get role_id(){
      return this.callForm.get("role_id");
    }
    get username() {
      return this.callForm.get("username");
    }
    get phone (){
      return this.callForm.get("phone");
    }
    get email (){
      return this.callForm.get("email");
    }
    get password (){
      return this.callForm.get("password");
    }
    get notes() {
      return this.callForm.get("notes");
    }
}
