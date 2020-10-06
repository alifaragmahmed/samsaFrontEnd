(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-hashtable/fesm5/angular-hashtable.js ***!
  \*******************************************************************/
/*! exports provided: HashTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashTable", function() { return HashTable; });
/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-hashtable.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
* This class represents the class definition.
*/
/**
 * @template T, L
 */
var  /*
* This class represents the class definition.
*/
/**
 * @template T, L
 */
HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.put = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.table['v_' + key] = value;
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.table['v_' + key];
    };
    /**
     * @return {?}
     */
    HashTable.prototype.getAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var vector = Array.from(Object.keys(this.table), (/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return _this.table[k]; }));
        return vector;
    };
    /**
     * @return {?}
     */
    HashTable.prototype.getKeys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = Array.from(Object.keys(this.table), (/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return k.substring(2); }));
        return keys;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['v_' + key] !== 'undefined') {
            return true;
        }
        return false;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this.table['v_' + key];
        return this;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.putArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        this.table['a_' + key].push(value);
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.getArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        return this.table['a_' + key];
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.removeArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            this.table['a_' + key].splice(this.table['a_' + key].indexOf(value), 1);
        }
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.hasArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.hasinArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            if (this.table['a_' + key].indexOf(value) !== -1) {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    HashTable.prototype.size = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.table).length;
    };
    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /***************************************************/
    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /**
     * ***********************************************
     * @param {?} callback
     * @return {?}
     */
    HashTable.prototype.forEach = /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /**
     * ***********************************************
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        for (var key in this.table) {
            callback(key.substring(2), this.table[key]);
        }
    };
    return HashTable;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-hashtable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-hashtable.js.map


/***/ }),

/***/ "./src/app/user/components/role/permission/permission.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permission.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" id=\"permissionModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"assign required document\" }}</h4>\n      </div>\n      <div class=\"box box-primary\">\n          <div class=\"box-body\">\n             <ul class=\"w3-ul\">\n              <li *ngFor=\"let item of permissions\" >\n                <div class=\"media\">\n                  <div class=\"media-left\">\n                    <mat-slide-toggle\n                      [checked]=\"permissionId.has(item.id)\"\n                      (change)=\"togglePermissions(item.id)\" ></mat-slide-toggle>\n                  </div>\n                  <div class=\"media-body\">\n                    <h6 class=\"media-heading\">{{ item.name }}</h6>\n                    <p>\n                      {{ item.notes }}\n                    </p>\n                  </div>\n                </div>\n              </li>\n             </ul>\n          </div>\n          <div class=\"box-footer\">\n            <button [disabled]=\"isSubmitted\" (click)=\"updatePermissions()\" type=\"submit\" class=\"btn btn-primary\">\n              <i *ngIf=\"!isSubmitted\" >{{ \"add\" | trans }}</i>\n              <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\n            </button>\n            &nbsp;\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">{{ \"cancel\" | trans }}</button>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/components/role/permission/permission.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permission.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/components/role/permission/permission.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/permission/permission.component.ts ***!
  \*************************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/user/services/role.service.ts");





var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(service) {
        this.service = service;
        this.role = {};
        this.permissions = [];
        this.permissionId = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.isSubmitted = false;
    }
    PermissionComponent.prototype.setPermission = function () {
        var _this = this;
        this.permissionId = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        if (!this.role)
            return;
        if (!this.role.permissions)
            return;
        this.role.permissions.forEach(function (element) {
            _this.permissionId.put(element.id, element.id);
        });
    };
    PermissionComponent.prototype.updatePermissions = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = {
            permissions: this.permissionId.getKeys()
        };
        this.service.updatePermission(this.role.id, data).subscribe(function (res) {
            if (res.status == 1)
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            _this.isSubmitted = false;
        });
    };
    PermissionComponent.prototype.togglePermissions = function (id) {
        if (this.permissionId.has(id))
            this.permissionId.remove(id);
        else
            this.permissionId.put(id, id);
    };
    PermissionComponent.prototype.loadPermissions = function () {
        var _this = this;
        this.service.permissions().subscribe(function (res) {
            _this.permissions = res;
        });
    };
    PermissionComponent.prototype.ngOnInit = function () {
        this.loadPermissions();
    };
    PermissionComponent.prototype.ngOnChanges = function () {
        this.setPermission();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PermissionComponent.prototype, "role", void 0);
    PermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-permission',
            template: __webpack_require__(/*! ./permission.component.html */ "./src/app/user/components/role/permission/permission.component.html"),
            styles: [__webpack_require__(/*! ./permission.component.scss */ "./src/app/user/components/role/permission/permission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/user/components/role/role-form/role-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/role-form/role-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"{{ isUpdate? 'update' : 'create' }}Modal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit role\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add role\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer text-center\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\" >{{ \"close\" | trans }}</button>\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"send()\" >{{ \"add\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/user/components/role/role-form/role-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/role-form/role-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy9yb2xlL3JvbGUtZm9ybS9yb2xlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/role/role-form/role-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/components/role/role-form/role-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleFormComponent", function() { return RoleFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/user/services/role.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");






var RoleFormComponent = /** @class */ (function () {
    function RoleFormComponent(roleService) {
        this.roleService = roleService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.isSubmitted = false;
        this.requiredFields = [
            'name'
        ];
        this.resource = {};
        this.isUpdate = false;
    }
    RoleFormComponent.prototype.ngOnInit = function () {
    };
    RoleFormComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!_this.resource[element])
                valid = false;
        });
        return valid;
    };
    RoleFormComponent.prototype.send = function () {
        if (!this.isUpdate)
            this.store();
        else
            this.update();
    };
    RoleFormComponent.prototype.store = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.roleService.store(this.toFormData()).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.resource = {};
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    RoleFormComponent.prototype.update = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.roleService.update(this.resource.id, this.toFormData()).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    /**
     * convert object to form data
     *
     */
    RoleFormComponent.prototype.toFormData = function () {
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.resource); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.resource[key])
                data.append(key, this.resource[key]);
        }
        return data;
    };
    /**
     * close modal
     */
    RoleFormComponent.prototype.closeModal = function () {
        var id = this.isUpdate ? '#updateModal' : '#createModal';
        this.doc.jquery(id).modal('hide');
    };
    /**
     * load personal image
     */
    RoleFormComponent.prototype.viewImage = function (event) {
        _shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].loadImage(event, 'image', this.resource);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RoleFormComponent.prototype, "updateResources", void 0);
    RoleFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-form',
            template: __webpack_require__(/*! ./role-form.component.html */ "./src/app/user/components/role/role-form/role-form.component.html"),
            styles: [__webpack_require__(/*! ./role-form.component.scss */ "./src/app/user/components/role/role-form/role-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], RoleFormComponent);
    return RoleFormComponent;
}());



/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\n  <div class=\"box-header\">\n    <button mat-raised-button color=\"primary\" (click)=\"doc.jquery('#createModal').modal('show');\" style=\"margin: 5px\"  >\n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button>\n  </div>\n  <br>\n\n</div>\n\n<div class=\"mat-elevation-z8 w3-white\" style=\"padding: 7px\" >\n  <input  class=\"form-control\"\n  (keyup)=\"search($event.target.value)\" placeholder=\"{{ 'search' | trans }}\">\n  <br>\n  <table mat-table [dataSource]=\"dataSource\" matSort  class=\"\">\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"name\" sticky>\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"name\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"w3-margin-right\">\n              {{element.name}}\n          </span>\n        </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let element\">\n              <button mat-button color=\"info\"  (click)=\"edit(element)\" >\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button mat-button color=\"info\"  (click)=\"permission(element)\" >\n                <i class=\"fa fa-th-list\"></i>\n              </button>\n              <button mat-button color=\"warn\" *ngIf=\"element.can_delete\" (click)=\"destroy(element.id)\" >\n                <i class=\"fa fa-trash\"></i>\n              </button>\n          </td>\n     </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n\n\n\n  <app-role-form [updateResources]=\"updateResources\" [resource]=\"updateItem\" [isUpdate]=\"true\" ></app-role-form>\n  <app-role-form [updateResources]=\"updateResources\" [resource]=\"{}\" [isUpdate]=\"false\" ></app-role-form>\n\n  <app-permission [role]=\"permissionItem\" ></app-permission>\n"

/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\nth {\n  font-size: 14px;\n  font-weight: bold;\n  color: black; }\n\n.mat-elevation-z8 {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3JvbGUvcm9sZS1pbmRleC9FOlxccHJvamVjdHNcXHNhbXNhXFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFx1c2VyXFxjb21wb25lbnRzXFxyb2xlXFxyb2xlLWluZGV4XFxyb2xlLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWSxFQUFBOztBQUlkO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvcm9sZS9yb2xlLWluZGV4L3JvbGUtaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbnRoIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/components/role/role-index/role-index.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/role/role-index/role-index.component.ts ***!
  \*************************************************************************/
/*! exports provided: RoleIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleIndexComponent", function() { return RoleIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/role.service */ "./src/app/user/services/role.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");









var RoleIndexComponent = /** @class */ (function () {
    function RoleIndexComponent(roleService, router) {
        var _this = this;
        this.roleService = roleService;
        this.router = router;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        // Resources list
        this.resources = null;
        // init breadcrum
        this.breadcrumbList = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.removed = [];
        // update
        this.updateItem = {};
        this.permissionItem = {};
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.resources);
        // init breadcrum
        this.initBreadcrumb();
        this.initDisplayColumns();
        this.initMatDatatable();
        this.updateResources = function () {
            _this.loadResources();
        };
    }
    RoleIndexComponent.prototype.initMatDatatable = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    RoleIndexComponent.prototype.initBreadcrumb = function () {
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'roles' }
        ];
    };
    RoleIndexComponent.prototype.initDisplayColumns = function () {
        this.displayedColumns = [
            'name', 'action'
        ];
    };
    RoleIndexComponent.prototype.refreshDataSource = function (data) {
        this.resources = data;
        this.dataSource.data = data;
    };
    RoleIndexComponent.prototype.destroy = function (id) {
        var _this = this;
        this.doc.swal.confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('are you sure'), function () {
            _this.roleService.destroy(id).subscribe(function (res) {
                if (res.status == 1) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__["Message"].success(res.message);
                    _this.loadResources();
                }
                else
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__["Message"].error(res.message);
            });
        });
    };
    RoleIndexComponent.prototype.loadResources = function () {
        var _this = this;
        this.roleService.get().subscribe(function (res) {
            _this.resources = res;
            _this.dataSource.data = res;
            //
            _this.refreshDataSource(res);
        });
    };
    RoleIndexComponent.prototype.edit = function (item) {
        this.updateItem = item;
        this.doc.jquery('#updateModal').modal('show');
    };
    RoleIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
        this.searchKey = "";
    };
    RoleIndexComponent.prototype.showUpdateModal = function (item) {
        this.updateItem = item;
    };
    RoleIndexComponent.prototype.search = function (filterValue) {
        if (this.dataSource)
            this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    RoleIndexComponent.prototype.permission = function (item) {
        this.permissionItem = item;
        this.doc.jquery('#permissionModal').modal('show');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], RoleIndexComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], RoleIndexComponent.prototype, "sort", void 0);
    RoleIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-role-index',
            template: __webpack_require__(/*! ./role-index.component.html */ "./src/app/user/components/role/role-index/role-index.component.html"),
            styles: [__webpack_require__(/*! ./role-index.component.scss */ "./src/app/user/components/role/role-index/role-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RoleIndexComponent);
    return RoleIndexComponent;
}());



/***/ }),

/***/ "./src/app/user/components/user/user-form/user-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/user/user-form/user-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- form modal -->\n<div class=\"modal fade\" id=\"{{ isUpdate? 'update' : 'create' }}Modal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n          <span *ngIf=\"isUpdate\" >{{ \"edit user\" | trans }}</span>\n          <span *ngIf=\"!isUpdate\" >{{ \"add user\" | trans }}</span>\n\n        </h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <img src=\"{{ resource.image_url }}\" alt=\"\" style=\"width: 50px;\" class=\"w3-round\" >\n        <br>\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"image\" | trans }} </th>\n            <td>\n              <input type=\"file\"\n              (change)=\"viewImage($event)\"\n              class=\"form-control input-sm\"  [(ngModel)]=\"resource.image\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"email\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.email\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"password\" | trans }} *</th>\n            <td>\n              <input type=\"password\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.password\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"username\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.username\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"phone\" | trans }} </th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.phone\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"role\" | trans }} </th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.role_id\"  >\n                <option *ngFor=\"let item of roles\" value=\"{{ item.id }}\">{{ item.name }}</option>\n              </select>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer text-center\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\" >{{ \"close\" | trans }}</button>\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"send()\" >{{ \"add\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/user/components/user/user-form/user-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/user/user-form/user-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29tcG9uZW50cy91c2VyL3VzZXItZm9ybS91c2VyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user/components/user/user-form/user-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/components/user/user-form/user-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_user_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/user/services/role.service */ "./src/app/user/services/role.service.ts");







var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(userService, roleService) {
        this.userService = userService;
        this.roleService = roleService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.isSubmitted = false;
        this.requiredFields = [
            'name', 'email', 'password', 'username'
        ];
        this.resource = {};
        this.isUpdate = false;
        this.roles = null;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.loadRoles();
    };
    UserFormComponent.prototype.loadRoles = function () {
        var _this = this;
        this.roleService.get().subscribe(function (res) {
            _this.roles = res;
        });
    };
    UserFormComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!_this.resource[element])
                valid = false;
        });
        return valid;
    };
    UserFormComponent.prototype.send = function () {
        if (!this.isUpdate)
            this.store();
        else
            this.update();
    };
    UserFormComponent.prototype.store = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.userService.store(this.toFormData()).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.resource = {};
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    UserFormComponent.prototype.update = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.userService.update(this.resource.id, this.toFormData()).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    /**
     * convert object to form data
     *
     */
    UserFormComponent.prototype.toFormData = function () {
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.resource); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.resource[key])
                data.append(key, this.resource[key]);
        }
        return data;
    };
    /**
     * close modal
     */
    UserFormComponent.prototype.closeModal = function () {
        var id = this.isUpdate ? '#updateModal' : '#createModal';
        this.doc.jquery(id).modal('hide');
    };
    /**
     * load personal image
     */
    UserFormComponent.prototype.viewImage = function (event) {
        _shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].loadImage(event, 'image', this.resource);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "resource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "isUpdate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserFormComponent.prototype, "updateResources", void 0);
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user/components/user/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.scss */ "./src/app/user/components/user/user-form/user-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_user_services_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/user/components/user/user-index/user-index.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/user/user-index/user-index.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\n  <div class=\"box-header\">\n    <button class=\"btn btn-primary\" (click)=\"doc.jquery('#createModal').modal('show');\" style=\"margin: 5px\"  >\n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button>\n  </div>\n  <br>\n\n</div>\n\n<div class=\"mat-elevation-z8 w3-white\" style=\"padding: 7px\" >\n  <input  class=\"form-control\"\n  (keyup)=\"search($event.target.value)\" placeholder=\"{{ 'search' | trans }}\">\n  <br>\n  <table mat-table [dataSource]=\"dataSource\" matSort  class=\"\">\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"image\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <img src=\"{{ element.image_url }}\" alt=\"\" height=\"20px\" class=\"w3-round\" >\n        </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"name\" sticky>\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"name\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"w3-margin-right\">\n              {{element.name}}\n          </span>\n        </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"email\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email  }} </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"password\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"password\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-button color=\"info\"  style=\"margin-left: 5px;margin-right: 5px\" (click)=\"doc.jquery('.row-'+element.id).toggle(600)\"  >\n            <i class=\"fa fa-eye\"></i>\n          </button>\n          <span style=\"display: none\" class=\"row-{{ element.id }}\" >{{element.password  }}</span>\n        </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"username\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username  }} </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"phone\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"phone\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.phone  }} </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{ \"role\" | trans }}</th>\n        <td mat-cell *matCellDef=\"let element\"> {{ element.role? element.role.name : ''  }} </td>\n      </ng-container>\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> </th>\n          <td mat-cell *matCellDef=\"let element\">\n              <button mat-button color=\"info\"  (click)=\"edit(element)\" >\n                <i class=\"fa fa-edit\"></i>\n              </button>\n              <button mat-button color=\"warn\"  (click)=\"destroy(element.id)\" >\n                <i class=\"fa fa-trash\"></i>\n              </button>\n          </td>\n     </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n\n\n\n  <app-user-form [updateResources]=\"updateResources\" [resource]=\"updateItem\" [isUpdate]=\"true\" ></app-user-form>\n  <app-user-form [updateResources]=\"updateResources\" [resource]=\"{}\" [isUpdate]=\"false\" ></app-user-form>\n"

/***/ }),

/***/ "./src/app/user/components/user/user-index/user-index.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/user/components/user/user-index/user-index.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\nth {\n  font-size: 14px;\n  font-weight: bold;\n  color: black; }\n\n.mat-elevation-z8 {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb21wb25lbnRzL3VzZXIvdXNlci1pbmRleC9FOlxccHJvamVjdHNcXHNhbXNhXFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFx1c2VyXFxjb21wb25lbnRzXFx1c2VyXFx1c2VyLWluZGV4XFx1c2VyLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWSxFQUFBOztBQUlkO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NvbXBvbmVudHMvdXNlci91c2VyLWluZGV4L3VzZXItaW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbnRoIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/user/components/user/user-index/user-index.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/user/components/user/user-index/user-index.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIndexComponent", function() { return UserIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/user/services/user.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");









var UserIndexComponent = /** @class */ (function () {
    function UserIndexComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        // Resources list
        this.resources = null;
        // init breadcrum
        this.breadcrumbList = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.removed = [];
        // update
        this.updateItem = {};
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.resources);
        // init breadcrum
        this.initBreadcrumb();
        this.initDisplayColumns();
        this.initMatDatatable();
        this.updateResources = function () {
            _this.loadResources();
        };
    }
    UserIndexComponent.prototype.initMatDatatable = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    UserIndexComponent.prototype.initBreadcrumb = function () {
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'users' }
        ];
    };
    UserIndexComponent.prototype.initDisplayColumns = function () {
        this.displayedColumns = [
            'image', 'name', 'email', 'password', 'username', 'phone', 'role', "action"
        ];
    };
    UserIndexComponent.prototype.refreshDataSource = function (data) {
        this.resources = data;
        this.dataSource.data = data;
    };
    UserIndexComponent.prototype.destroy = function (id) {
        var _this = this;
        this.doc.swal.confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('are you sure'), function () {
            _this.userService.destroy(id).subscribe(function (res) {
                if (res.status == 1) {
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__["Message"].success(res.message);
                    _this.loadResources();
                }
                else
                    src_app_shared_message__WEBPACK_IMPORTED_MODULE_8__["Message"].error(res.message);
            });
        });
    };
    UserIndexComponent.prototype.loadResources = function () {
        var _this = this;
        this.userService.get().subscribe(function (res) {
            _this.resources = res;
            _this.dataSource.data = res;
            //
            _this.refreshDataSource(res);
        });
    };
    UserIndexComponent.prototype.edit = function (item) {
        this.updateItem = item;
        this.doc.jquery('#updateModal').modal('show');
    };
    UserIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
        this.searchKey = "";
    };
    UserIndexComponent.prototype.showUpdateModal = function (item) {
        this.updateItem = item;
    };
    UserIndexComponent.prototype.search = function (filterValue) {
        if (this.dataSource)
            this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], UserIndexComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], UserIndexComponent.prototype, "sort", void 0);
    UserIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-index',
            template: __webpack_require__(/*! ./user-index.component.html */ "./src/app/user/components/user/user-index/user-index.component.html"),
            styles: [__webpack_require__(/*! ./user-index.component.scss */ "./src/app/user/components/user/user-index/user-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserIndexComponent);
    return UserIndexComponent;
}());



/***/ }),

/***/ "./src/app/user/user-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user-routing.module.ts ***!
  \*********************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_role_role_index_role_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/role/role-index/role-index.component */ "./src/app/user/components/role/role-index/role-index.component.ts");
/* harmony import */ var _components_user_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user/user-index/user-index.component */ "./src/app/user/components/user/user-index/user-index.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");






var routes = [
    {
        path: "",
        component: _user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"],
        children: [
            {
                path: '',
                component: _components_user_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_4__["UserIndexComponent"]
            },
            {
                path: 'role',
                component: _components_role_role_index_role_index_component__WEBPACK_IMPORTED_MODULE_3__["RoleIndexComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <!-- navbar list -->\n    <div class=\"box box-primary material-shadow\">\n      <div class=\"box-body box-profile\">\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/application.gif\" alt=\"User profile picture\">\n\n        <h3 class=\"profile-username text-center\">{{ \"users\" | trans }}</h3>\n\n\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/users' >\n                <b>{{ \"users\" | trans }}</b>\n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-users\" ></i>\n                </a>\n            </a>\n          </li>\n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/users/role' >\n                <b>{{ \"roles\" | trans }}</b>\n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-th-list\" ></i>\n                </a>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n\n  </div>\n  <!-- /.col -->\n  <div class=\"col-md-9\">\n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _components_user_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user/user-index/user-index.component */ "./src/app/user/components/user/user-index/user-index.component.ts");
/* harmony import */ var _components_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user-form/user-form.component */ "./src/app/user/components/user/user-form/user-form.component.ts");
/* harmony import */ var _components_role_role_index_role_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/role/role-index/role-index.component */ "./src/app/user/components/role/role-index/role-index.component.ts");
/* harmony import */ var _components_role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/role/role-form/role-form.component */ "./src/app/user/components/role/role-form/role-form.component.ts");
/* harmony import */ var _components_role_permission_permission_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/role/permission/permission.component */ "./src/app/user/components/role/permission/permission.component.ts");












var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _components_user_user_index_user_index_component__WEBPACK_IMPORTED_MODULE_7__["UserIndexComponent"],
                _components_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__["UserFormComponent"],
                _components_role_role_index_role_index_component__WEBPACK_IMPORTED_MODULE_9__["RoleIndexComponent"],
                _components_role_role_form_role_form_component__WEBPACK_IMPORTED_MODULE_10__["RoleFormComponent"],
                _components_role_permission_permission_component__WEBPACK_IMPORTED_MODULE_11__["PermissionComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map