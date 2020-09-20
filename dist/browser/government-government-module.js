(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["government-government-module"],{

/***/ "./src/app/settings/government/create/create.component.html":
/*!******************************************************************!*\
  !*** ./src/app/settings/government/create/create.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">\r\n      اضافة محافظة جديدة\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة محافظة جديدة</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <!-- form start -->\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\" autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">اسم المحافظة<span\r\n                style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n             <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اسم المحافظة</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>الدولة\r\n                <span style=\"color: red\">*</span>\r\n              </label>\r\n              <select class=\"form-control\" formControlName=\"country_id\">\r\n                <option value=\"\" selected=\"selected\"> -- اختر الدولة --</option>\r\n\r\n                <option value=\"{{row.id}}\" *ngFor='let row of rows'>{{row.name}}</option>\r\n\r\n              </select>\r\n              <div *ngIf=\"(country_id.touched || country_id.dirty) && country_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اختر الدولة</p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n       \r\n           \r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\" >حفظ</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      \r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/government/create/create.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/settings/government/create/create.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2dvdmVybm1lbnQvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/government/create/create.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/government/create/create.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_government_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/government.service */ "./src/app/settings/government/services/government.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");







var CreateComponent = /** @class */ (function () {
    function CreateComponent(service, router, toastr, generalService) {
        this.service = service;
        this.router = router;
        this.toastr = toastr;
        this.generalService = generalService;
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.rows = [];
        this.data = { name: '', country_id: '' };
        this.isSubmitClick = false;
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
            ]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generalService.getAllCountries().subscribe(function (res) {
            _this.rows = res.data;
        });
    };
    CreateComponent.prototype.create = function () {
        var _this = this;
        this.nameError = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.isSubmitClick = true;
        this.data.name = this.callForm.value.name;
        this.data.country_id = this.callForm.value.country_id;
        this.service.create(this.data).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
                _this.toastr.error(res.message, '');
            }
            else {
                _this.toastr.success(res.message, '');
                _this.errorMessage = '';
                _this.isSubmitClick = true;
            }
            (function (e) {
                _this.isSubmitClick = false;
                if (e.status == 400) {
                    _this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
                    for (var i = 0; i < e.error.errors.length; i++) {
                        if (e.error.errors[i].input === 'name') {
                            _this.nameError = e.error.errors[i].message;
                        }
                    }
                }
            });
        });
    };
    Object.defineProperty(CreateComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateComponent.prototype, "country_id", {
        get: function () {
            return this.callForm.get('country_id');
        },
        enumerable: true,
        configurable: true
    });
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-government',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/settings/government/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/settings/government/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_government_service__WEBPACK_IMPORTED_MODULE_3__["GovernmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/settings/government/edit/edit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/settings/government/edit/edit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-primary\">\r\n  <div class=\"box-header with-border\">\r\n    <h3 class=\"box-title\">تعديل المحافظة</h3>\r\n  </div>\r\n  <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n    <div class=\"box-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">اسم المحافظة</label>\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>الدولة\r\n          <span style=\"color: red\">*</span>\r\n        </label>\r\n        <select class=\"form-control\" formControlName=\"country_id\">\r\n          <option value=\"{{row.id}}\" *ngFor='let row of countries'>{{row.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"box-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n      &nbsp;\r\n      <a routerLink='/settings/government' class=\"btn btn-info\">الغاء</a>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/government/edit/edit.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/government/edit/edit.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2dvdmVybm1lbnQvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/government/edit/edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/government/edit/edit.component.ts ***!
  \************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_government_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/government.service */ "./src/app/settings/government/services/government.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(generalService, service, toastr, route, router) {
        this.generalService = generalService;
        this.service = service;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.data = { name: '', country_id: '' };
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.isSubmitClick = false;
        this.countries = [];
        this.sucreq = false;
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
            ]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            ]),
        });
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params.id;
        this.generalService.getAllCountries().subscribe(function (res) {
            _this.countries = res.data;
        });
        this.service.getItemById(this.id).subscribe(function (res) {
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
                _this.country_id.setValue(res.data.country_id);
            }
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.name.value,
            country_id: this.country_id.value,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                _this.router.navigate(['/settings/government/']).then(function () {
                    _this.toastr.success(res.message, '');
                });
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    Object.defineProperty(EditComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditComponent.prototype, "country_id", {
        get: function () {
            return this.callForm.get('country_id');
        },
        enumerable: true,
        configurable: true
    });
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/settings/government/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/settings/government/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"],
            _services_government_service__WEBPACK_IMPORTED_MODULE_2__["GovernmentService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/settings/government/government-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/government/government-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: GovernmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentRoutingModule", function() { return GovernmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/government/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/government/edit/edit.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/settings/government/create/create.component.ts");






var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'craete',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
];
var GovernmentRoutingModule = /** @class */ (function () {
    function GovernmentRoutingModule() {
    }
    GovernmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GovernmentRoutingModule);
    return GovernmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/government/government.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings/government/government.module.ts ***!
  \**********************************************************/
/*! exports provided: GovernmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentModule", function() { return GovernmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _government_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./government-routing.module */ "./src/app/settings/government/government-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/government/list/list.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create/create.component */ "./src/app/settings/government/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/government/edit/edit.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var GovernmentModule = /** @class */ (function () {
    function GovernmentModule() {
    }
    GovernmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                _government_routing_module__WEBPACK_IMPORTED_MODULE_4__["GovernmentRoutingModule"]
            ]
        })
    ], GovernmentModule);
    return GovernmentModule;
}());



/***/ }),

/***/ "./src/app/settings/government/list/list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/settings/government/list/list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">\r\n      اضافة محافظة جديدة\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div [hidden]=\"sucreq\">\r\n  <div class=\" modal fade\" id=\"modal-default\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">اضافة محافظة جديدة</h4>\r\n\r\n        </div>\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <!-- form start -->\r\n          <form role=\"form\" class=\" forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\" autocomplete=\"off\">\r\n            <div class=\"box-body\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">اسم المحافظة<span\r\n                  style=\"color: red\">*</span></label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n               <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                      <p>من فضلك ادخل اسم المحافظة</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>الدولة\r\n                  <span style=\"color: red\">*</span>\r\n                </label>\r\n                <select class=\"form-control\" formControlName=\"country_id\">\r\n                  <option value=\"\" selected=\"selected\"> -- اختر الدولة --</option>\r\n                  <option value=\"{{row.id}}\" *ngFor='let row of countries'>{{row.name}}</option>\r\n  \r\n                </select>\r\n                <div *ngIf=\"(country_id.touched || country_id.dirty) && country_id.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                      <p>من فضلك ادخل اختر الدولة</p>\r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n            </div>\r\n         \r\n             \r\n            <div class=\"box-footer\">\r\n              <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        \r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    <!-- <h3 class=\"box-title\">Data Table With Full Features</h3> -->\r\n  </div>\r\n  <!-- /.box-header -->\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  class=\"table table-bordered table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>الاسم</th>\r\n        <th>الدولة</th>\r\n        <th>ملاحظات</th>\r\n        <th>الاجراءات</th>\r\n\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let row of rows index as i\">\r\n        <td>{{ i + 1 }}</td>\r\n        <td>{{ row.name }}</td>\r\n        <td>{{ row.country.name }}</td>\r\n        <td>{{ row.notes }}</td>\r\n        <td>\r\n          <button class=\"btn btn-info\" type=\"button\" routerLink='/settings/government/edit/{{row.id}}'>\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n          &nbsp;\r\n          <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(row.id)\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>الاسم</th>\r\n        <th>الدولة</th>\r\n        <th>ملاحظات</th>\r\n        <th>الاجراءات</th>\r\n\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <!-- /.box-body -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/government/list/list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/settings/government/list/list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2dvdmVybm1lbnQvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/government/list/list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/government/list/list.component.ts ***!
  \************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_government_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/government.service */ "./src/app/settings/government/services/government.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(generalService, service, toastr) {
        this.generalService = generalService;
        this.service = service;
        this.toastr = toastr;
        this.isDtInitialized = false;
        this.data = { name: '', country_id: '' };
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rows = [];
        this.countries = [];
        this.sucreq = false;
        this.query = {
            page: '1',
            size: '10',
        };
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50),
            ]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
            ]),
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.generalService.getAllCountries().subscribe(function (res) {
            _this.countries = res.data;
        });
        this.callHttp();
    };
    ListComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll(this.query).subscribe(function (res) {
            console.log(res);
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                _this.toastr.success(res.message, '');
                var index = _this.rows.findIndex(function (v) { return v.id === id; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    ListComponent.prototype.create = function () {
        var _this = this;
        this.nameError = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.isSubmitClick = true;
        this.data.name = this.callForm.value.name;
        this.data.country_id = this.callForm.value.country_id;
        this.service.create(this.data).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.isSubmitClick = false;
                if (res.message.country_id)
                    _this.toastr.error(res.message.country_id, '');
                if (res.message.name)
                    _this.toastr.error(res.message.name, '');
            }
            else {
                _this.toastr.success(res.message, '');
                _this.errorMessage = '';
                _this.isSubmitClick = true;
                _this.callHttp();
            }
            ;
        });
    };
    Object.defineProperty(ListComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "country_id", {
        get: function () {
            return this.callForm.get('country_id');
        },
        enumerable: true,
        configurable: true
    });
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/settings/government/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/settings/government/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _services_government_service__WEBPACK_IMPORTED_MODULE_4__["GovernmentService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/settings/government/services/government.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/settings/government/services/government.service.ts ***!
  \********************************************************************/
/*! exports provided: GovernmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentService", function() { return GovernmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GovernmentService = /** @class */ (function () {
    function GovernmentService(http) {
        this.http = http;
    }
    GovernmentService.prototype.getAll = function (query) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', query.page)
            .set('size', query.size);
        return this.http.get('governments?api_token=123456789', { params: params });
    };
    GovernmentService.prototype.getItemById = function (id) {
        return this.http.get("governments/" + id + "?api_token=123456789");
    };
    GovernmentService.prototype.update = function (id, item) {
        return this.http.put("governments/" + id + "?api_token=123456789", item);
    };
    GovernmentService.prototype.create = function (item) {
        return this.http.post("governments?api_token=123456789", item);
    };
    GovernmentService.prototype.delete = function (id) {
        return this.http.delete("governments/" + id + "?api_token=123456789");
    };
    GovernmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GovernmentService);
    return GovernmentService;
}());



/***/ })

}]);
//# sourceMappingURL=government-government-module.js.map