(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registeration-methods-registeration-methods-module"],{

/***/ "./src/app/settings/registeration-methods/list/list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/settings/registeration-methods/list/list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">\r\n      اضافة وسيلة تعارف\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة وسيلة تعارف</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n        <div *ngIf=\"item == ''\">\r\n          <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n            autocomplete=\"off\">\r\n            <div class=\"box-body\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                  placeholder=\"{{ 'name' | trans }}\">\r\n                <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اسم وسيلة التعارف</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n                <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                  placeholder=\"{{ 'notes' | trans }}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n              <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n              &nbsp;\r\n              <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n        <div *ngIf=\"item != ''\">\r\n          <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n            autocomplete=\"off\">\r\n            <div class=\"box-body\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                  placeholder=\"{{ 'name' | trans }}\">\r\n                <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اسم وسيلة التعارف</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n                <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                  placeholder=\"{{ 'notes' | trans }}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"box-footer\">\r\n              <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n              &nbsp;\r\n              <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete(row.id)\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n                <!-- /.modal-content -->\r\n              </div>\r\n              <!-- /.modal-dialog -->\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/registeration-methods/list/list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/settings/registeration-methods/list/list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3JlZ2lzdGVyYXRpb24tbWV0aG9kcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/registeration-methods/list/list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/settings/registeration-methods/list/list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_RegMethodService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/RegMethodService.service */ "./src/app/settings/registeration-methods/services/RegMethodService.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ListComponent = /** @class */ (function () {
    function ListComponent(toastr, service, router, route) {
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.route = route;
        this.errorMessage = '';
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.rows = [];
        this.data = { name: '', notes: '' };
        this.item = '';
        this.id = '';
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, []),
        });
    }
    ListComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.item = res.data;
                _this.name.setValue(res.data.name);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
            }
        });
    };
    ListComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    ListComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    ListComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancel").click();
                _this.callHttp();
                _this.toastr.success(res.message, '');
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    ListComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.isSubmitClick = true;
        this.data.notes = this.callForm.value.notes;
        this.data.name = this.callForm.value.name;
        this.service.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                if (res.message.name)
                    _this.toastr.error(res.message, '');
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
                return;
            }
            else {
                _this.errorMessage = '';
                _this.isSubmitClick = true;
                _this.toastr.success(res.message, '');
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, '');
                var index = _this.rows.findIndex(function (v) { return v.id === id; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    Object.defineProperty(ListComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/settings/registeration-methods/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/settings/registeration-methods/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_RegMethodService_service__WEBPACK_IMPORTED_MODULE_2__["RegMethodService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/settings/registeration-methods/registeration-methods-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/settings/registeration-methods/registeration-methods-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: RegisterationMethodsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationMethodsRoutingModule", function() { return RegisterationMethodsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/registeration-methods/list/list.component.ts");




var routes = [
    {
        path: "",
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    }
];
var RegisterationMethodsRoutingModule = /** @class */ (function () {
    function RegisterationMethodsRoutingModule() {
    }
    RegisterationMethodsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegisterationMethodsRoutingModule);
    return RegisterationMethodsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/registeration-methods/registeration-methods.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/settings/registeration-methods/registeration-methods.module.ts ***!
  \********************************************************************************/
/*! exports provided: RegisterationMethodsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationMethodsModule", function() { return RegisterationMethodsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _registeration_methods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registeration-methods-routing.module */ "./src/app/settings/registeration-methods/registeration-methods-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/registeration-methods/list/list.component.ts");







var RegisterationMethodsModule = /** @class */ (function () {
    function RegisterationMethodsModule() {
    }
    RegisterationMethodsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _registeration_methods_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterationMethodsRoutingModule"]
            ]
        })
    ], RegisterationMethodsModule);
    return RegisterationMethodsModule;
}());



/***/ }),

/***/ "./src/app/settings/registeration-methods/services/RegMethodService.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/settings/registeration-methods/services/RegMethodService.service.ts ***!
  \*************************************************************************************/
/*! exports provided: RegMethodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegMethodService", function() { return RegMethodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var RegMethodService = /** @class */ (function () {
    function RegMethodService(http) {
        this.http = http;
    }
    RegMethodService.prototype.getAll = function () {
        return this.http.get("registration-methods?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegMethodService.prototype.getItemById = function (id) {
        return this.http.get("registration-methods/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegMethodService.prototype.update = function (id, data) {
        return this.http.put("registration-methods/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegMethodService.prototype.create = function (data) {
        return this.http.post("registration-methods?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegMethodService.prototype.delete = function (id) {
        return this.http.delete("registration-methods/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegMethodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegMethodService);
    return RegMethodService;
}());



/***/ })

}]);
//# sourceMappingURL=registeration-methods-registeration-methods-module.js.map