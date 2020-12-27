import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Message } from 'src/app/shared/message';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit, OnChanges {

  @Input() role: any = {};

  public permissions: any = [];
  public permissionId = new HashTable();

  groups: any = [];

  public isSubmitted = false;

  constructor(private service: RoleService) {
  }

  setPermission() {
    this.permissionId = new HashTable();
    if (!this.role)
      return;

    if (!this.role.permissions)
      return;
    this.role.permissions.forEach(element => {
      this.permissionId.put(element.id, element.id);
    });
  }

  updatePermissions() {
    this.isSubmitted = true;
    let data = {
      permissions: this.permissionId.getKeys()
    };
    this.service.updatePermission(this.role.id, data).subscribe((res: any) => {
      if (res.status == 1)
        Message.success(res.message);
      else
        Message.error(res.message);

      this.isSubmitted = false;
    });
  }

  togglePermissions(id) {
    if (this.permissionId.has(id))
      this.permissionId.remove(id);
    else
      this.permissionId.put(id, id);
  }

  loadPermissions() {
    this.service.permissions().subscribe((res) => {
      this.permissions = res;
    });
  }

  loadGroups() {
    this.service.groups().subscribe((res) => {
      this.groups = res;
    });
  }

  ngOnInit() {
    this.loadPermissions();
    this.loadGroups();
  }

  ngOnChanges() {
    this.setPermission();
  }
}
