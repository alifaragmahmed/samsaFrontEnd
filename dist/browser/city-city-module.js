(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["city-city-module"],{

/***/ "./src/app/settings/city/city-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/city/city-routing.module.ts ***!
  \******************************************************/
/*! exports provided: CityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityRoutingModule", function() { return CityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/settings/city/create/create.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/city/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/city/list/list.component.ts");






var routes = [
    {
        path: 'create',
        component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    },
];
var CityRoutingModule = /** @class */ (function () {
    function CityRoutingModule() {
    }
    CityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CityRoutingModule);
    return CityRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/city/city.module.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/city/city.module.ts ***!
  \**********************************************/
/*! exports provided: CityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityModule", function() { return CityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _city_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./city-routing.module */ "./src/app/settings/city/city-routing.module.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/settings/city/create/create.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/city/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/city/edit/edit.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var CityModule = /** @class */ (function () {
    function CityModule() {
    }
    CityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _city_routing_module__WEBPACK_IMPORTED_MODULE_4__["CityRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"]
            ]
        })
    ], CityModule);
    return CityModule;
}());



/***/ }),

/***/ "./src/app/settings/city/create/create.component.html":
/*!************************************************************!*\
  !*** ./src/app/settings/city/create/create.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--<div class=\"box box-default\">-->\r\n<!--  <div class=\"box-header with-border\">-->\r\n<!--    <h3 class=\"box-title\">اضافة مدينة</h3>-->\r\n<!--  </div>-->\r\n<!--  <div class=\"box-body\">-->\r\n<!--    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">-->\r\n<!--      اضافة مدينة-->\r\n<!--    </button>-->\r\n<!--  </div>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"modal fade\" id=\"modal-default\">-->\r\n<!--  <div class=\"modal-dialog\">-->\r\n<!--    <div class=\"modal-content\">-->\r\n<!--      <div class=\"modal-header\">-->\r\n<!--        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\r\n<!--          <span aria-hidden=\"true\">&times;</span></button>-->\r\n<!--        <h4 class=\"modal-title\">Default Modal</h4>-->\r\n<!--      </div>-->\r\n<!--      <form class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\" autocomplete=\"off\">-->\r\n<!--                            <div class=\"form-group row\">-->\r\n<!--                                <div class=\"col-lg-6\">-->\r\n<!--                                    <label for=\"name_en\"><span>الاسم</span><span-->\r\n<!--                                            style=\"color: red\">*</span></label>-->\r\n<!--                                    <input formControlName=\"name\" type=\"text\" id=\"name\" class=\"form-control\" maxlength=\"50\">-->\r\n<!--                                </div>-->\r\n<!--                                -->\r\n<!--                            </div>-->\r\n<!--                            -->\r\n<!--                            <button [disabled]=\"GameForm.invalid || isSubmitClick\" type=\"submit\"-->\r\n<!--                                class=\"btn btn-primary btn-block\">-->\r\n<!--                                <span i18n=\"Create Admin User\">Create Game </span>-->\r\n<!--                                <img *ngIf=\"isSubmitClick\" src=\"assets/img/preloader-white.svg\" style=\"height: 16px;\">-->\r\n<!--                            </button>-->\r\n<!--                        </form>-->\r\n<!--      <div class=\"modal-footer\">-->\r\n<!--        -->\r\n<!--      </div>-->\r\n<!--    </div>-->\r\n<!--    &lt;!&ndash; /.modal-content &ndash;&gt;-->\r\n<!--  </div>-->\r\n<!--  &lt;!&ndash; /.modal-dialog &ndash;&gt;-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/settings/city/create/create.component.scss":
/*!************************************************************!*\
  !*** ./src/app/settings/city/create/create.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NpdHkvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/city/create/create.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/settings/city/create/create.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/city.service */ "./src/app/settings/city/services/city.service.ts");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(cityService, router) {
        this.cityService = cityService;
        this.router = router;
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.isSubmitClick = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-city',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/settings/city/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/settings/city/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_3__["CityService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/settings/city/edit/edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/settings/city/edit/edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-primary\">\r\n  <div class=\"box-header with-border\">\r\n    <h3 class=\"box-title\">تعديل المحافظة</h3>\r\n  </div>\r\n  <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n    <div class=\"box-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">اسم المحافظة          \r\n          <span style=\"color: red\">*</span>\r\n        </label>\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>الدولة\r\n          <span style=\"color: red\">*</span>\r\n        </label>\r\n        <select class=\"form-control\" formControlName=\"country_id\" (click)=\"getGovernments(country_id)\">\r\n          <option value=\"{{row.id}}\" *ngFor='let row of countries'>{{row.name}}</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>المحافظة\r\n          <span style=\"color: red\">*</span>\r\n        </label>\r\n        <select class=\"form-control\" formControlName=\"government_id\">\r\n          <option value=\"{{row.id}}\" *ngFor='let row of governments'>{{row.name}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"box-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n      &nbsp;\r\n      <a routerLink='/settings/city' class=\"btn btn-info\">الغاء</a>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/city/edit/edit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/settings/city/edit/edit.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NpdHkvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/city/edit/edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/city/edit/edit.component.ts ***!
  \******************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/city.service */ "./src/app/settings/city/services/city.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var EditComponent = /** @class */ (function () {
    function EditComponent(service, generalService, toastr, route, router) {
        this.service = service;
        this.generalService = generalService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.data = { name: '', government_id: '', country_id: '' };
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.isSubmitClick = false;
        this.countries = [];
        this.governments = [];
        this.sucreq = false;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            government_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
        });
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.generalService.getAllCountries().subscribe(function (res) {
            _this.countries = res.data;
        });
        this.generalService.getAllGovernments().subscribe(function (res) {
            _this.governments = res.data;
        });
        this.service.getItemById(this.id).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
                _this.country_id.setValue(res.data.government.country.id);
                _this.government_id.setValue(res.data.government_id);
            }
        });
    };
    EditComponent.prototype.getGovernments = function (country_id) {
        var _this = this;
        this.generalService.getCountryGovernments(country_id.value).subscribe(function (res) {
            _this.governments = res.data;
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.name.value,
            government_id: this.government_id.value,
            country_id: this.country_id.value,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                _this.router.navigate(['/settings/city/']).then(function () {
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
    Object.defineProperty(EditComponent.prototype, "government_id", {
        get: function () {
            return this.callForm.get('government_id');
        },
        enumerable: true,
        configurable: true
    });
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/settings/city/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/settings/city/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_5__["CityService"],
            src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/settings/city/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/settings/city/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة مدينة جديدة\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div [hidden]=\"sucreq\">\r\n  <div class=\" modal fade\" id=\"modal-default\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">اضافة مدينة جديدة</h4>\r\n\r\n        </div>\r\n        <div class=\"box box-primary\">\r\n          <div class=\"box-header with-border\">\r\n            <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n          </div>\r\n          <!-- /.box-header -->\r\n          <!-- form start -->\r\n          <form role=\"form\" #f=\"ngForm\" class=\" forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\" autocomplete=\"off\">\r\n            <div class=\"box-body\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">اسم المدينة<span\r\n                  style=\"color: red\">*</span></label>\r\n                <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n               <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                      <p>من فضلك ادخل اسم المدينة</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label>الدولة\r\n                  <span style=\"color: red\">*</span>\r\n                </label>\r\n                <select class=\"form-control\" formControlName=\"country_id\" (click)=\"getGovernments(country_id)\">\r\n                  <option  value=\"{{row.id}}\" *ngFor='let row of countries'>{{row.name}}</option>\r\n                </select>\r\n                <div *ngIf=\"(country_id.touched || country_id.dirty) && country_id.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                      <p>من فضلك ادخل اختر الدولة</p>\r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>المحافظة\r\n                  <span style=\"color: red\">*</span>\r\n                </label>\r\n                <select class=\"form-control\" formControlName=\"government_id\">\r\n                  <option value=\"{{row.id}}\" *ngFor='let row of governments'>{{row.name}}</option>\r\n                </select>\r\n                <div *ngIf=\"(government_id.touched || government_id.dirty) && government_id.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                      <p>من فضلك ادخل اختر المحافظة</p>\r\n                  </div>\r\n                </div>\r\n  \r\n              </div>\r\n            </div>\r\n         \r\n             \r\n            <div class=\"box-footer\">\r\n              <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        \r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" class=\" forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">اسم المدينة<span\r\n                style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n             <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اسم المدينة</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label>الدولة\r\n                <span style=\"color: red\">*</span>\r\n              </label>\r\n              <select class=\"form-control\" formControlName=\"country_id\" (click)=\"getGovernments(country_id)\">\r\n                <option  value=\"{{row.id}}\" *ngFor='let row of countries'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(country_id.touched || country_id.dirty) && country_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اختر الدولة</p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>المحافظة\r\n                <span style=\"color: red\">*</span>\r\n              </label>\r\n              <select class=\"form-control\" formControlName=\"government_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of governments'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(government_id.touched || government_id.dirty) && government_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اختر المحافظة</p>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n       \r\n           \r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    <h3 class=\"box-title\">المدن</h3>\r\n  </div>\r\n  <!-- /.box-header -->\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"  class=\"table table-bordered table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>الاسم</th>\r\n        <th>المحافظة</th>\r\n        <th>الدولة</th>\r\n        <th>ملاحظات</th>\r\n        <th>الاجراءات</th>\r\n\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let row of rows index as i\">\r\n        <td>{{ i + 1 }}</td>\r\n        <td>{{ row.name }}</td>\r\n        <td>{{ row.governments.name }}</td>\r\n        <td>{{ row.governments.country.name }}</td>\r\n        <td>{{ row.notes }}</td>\r\n        <td>\r\n          <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n            <i class=\"fa fa-edit\"></i>\r\n          </button>\r\n          &nbsp;\r\n          <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n            <i class=\"fa fa-trash-o\"></i>\r\n          </button>\r\n          <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n            <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span></button>\r\n                  <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                  &nbsp;\r\n                  <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                    data-dismiss=\"modal\">الغاء</button>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <tfoot>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>الاسم</th>\r\n        <th>المحافظة</th>\r\n        <th>الدولة</th>\r\n        <th>ملاحظات</th>\r\n        <th>الاجراءات</th>\r\n\r\n      </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <!-- /.box-body -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/city/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/settings/city/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NpdHkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/city/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/city/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/city.service */ "./src/app/settings/city/services/city.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(service, generalService, toastr) {
        this.service = service;
        this.generalService = generalService;
        this.toastr = toastr;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.rows = [];
        this.id = '';
        this.deletedId = '';
        this.paging = {
            page: '1',
            size: '10',
        };
        this.countries = [];
        this.governments = [];
        this.isSubmitClick = false;
        this.data = { name: '', government_id: '', country_id: '' };
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50),
            ]),
            country_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            government_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
        this.generalService.getAllCountries().subscribe(function (res) {
            _this.countries = res.data;
        });
        this.generalService.getAllGovernments().subscribe(function (res) {
            _this.governments = res.data;
        });
    };
    ListComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll(this.paging).subscribe(function (res) {
            console.log(res.data);
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    ListComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, '');
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    ListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.data.name = this.callForm.value.name;
        this.data.country_id = this.callForm.value.country_id;
        this.data.government_id = this.callForm.value.government_id;
        this.service.update(this.id, this.data).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.dtTrigger.unsubscribe();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, '');
                _this.callForm.reset();
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    ListComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    ListComponent.prototype.getGovernments = function (country_id) {
        var _this = this;
        this.generalService.getCountryGovernments(country_id.value).subscribe(function (res) {
            console.log(res);
            _this.governments = res.data;
        });
    };
    ListComponent.prototype.create = function () {
        var _this = this;
        this.nameError = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.callForm.reset();
        this.isSubmitClick = true;
        this.data.name = this.callForm.value.name;
        this.data.country_id = this.callForm.value.country_id;
        this.data.government_id = this.callForm.value.government_id;
        this.service.create(this.data).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = '';
                _this.isSubmitClick = true;
                _this.toastr.success(res.messgae, '');
                _this.dtTrigger.unsubscribe();
                _this.callHttp();
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
    ListComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("openModal").click();
                _this.name.setValue(res.data.name);
                _this.country_id.setValue(res.data.government.country.id);
                _this.government_id.setValue(res.data.government_id);
                // this.item = res.data;
            }
        });
    };
    ListComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(ListComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "government_id", {
        get: function () {
            return this.callForm.get('government_id');
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
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/settings/city/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/settings/city/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"],
            src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/settings/city/services/city.service.ts":
/*!********************************************************!*\
  !*** ./src/app/settings/city/services/city.service.ts ***!
  \********************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var CityService = /** @class */ (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getAll = function (query) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', query.page)
            .set('size', query.size);
        return this.http.get("cities?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), { params: params });
    };
    CityService.prototype.getItemById = function (id) {
        return this.http.get("cities/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CityService.prototype.update = function (id, city) {
        return this.http.put("cities/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), city);
    };
    CityService.prototype.create = function (city) {
        return this.http.post("cities?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), city);
    };
    CityService.prototype.delete = function (id) {
        return this.http.delete("cities/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CityService);
    return CityService;
}());



/***/ })

}]);
//# sourceMappingURL=city-city-module.js.map