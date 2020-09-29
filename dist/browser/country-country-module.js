(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["country-country-module"],{

/***/ "./src/app/settings/country/country-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/country/country-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CountryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryRoutingModule", function() { return CountryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/country/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/country/edit/edit.component.ts");





var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"]
    },
];
var CountryRoutingModule = /** @class */ (function () {
    function CountryRoutingModule() {
    }
    CountryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CountryRoutingModule);
    return CountryRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/country/country.module.ts":
/*!****************************************************!*\
  !*** ./src/app/settings/country/country.module.ts ***!
  \****************************************************/
/*! exports provided: CountryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryModule", function() { return CountryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _country_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./country-routing.module */ "./src/app/settings/country/country-routing.module.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/settings/country/create/create.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/country/list/list.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/country/edit/edit.component.ts");









var CountryModule = /** @class */ (function () {
    function CountryModule() {
    }
    CountryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _country_routing_module__WEBPACK_IMPORTED_MODULE_4__["CountryRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]
            ]
        })
    ], CountryModule);
    return CountryModule;
}());



/***/ }),

/***/ "./src/app/settings/country/create/create.component.html":
/*!***************************************************************!*\
  !*** ./src/app/settings/country/create/create.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">\r\n      اضافة دولة جديدة\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة دولة جديدة</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <!-- form start -->\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\" autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">اسم الدولة<span\r\n                style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n             <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                    <p>من فضلك ادخل اسم الدولة</p>\r\n                </div>\r\n               </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\" >حفظ</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      \r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/country/create/create.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/settings/country/create/create.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvdW50cnkvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/settings/country/create/create.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/settings/country/create/create.component.ts ***!
  \*************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/country.service */ "./src/app/settings/country/services/country.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var CreateComponent = /** @class */ (function () {
    function CreateComponent(countryService, router, toastr) {
        this.countryService = countryService;
        this.router = router;
        this.toastr = toastr;
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.data = { name: '', notes: '' };
        this.isSubmitClick = false;
        this.disapear = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigated = false;
            _this.router.navigate([_this.router.url]);
        }, 5000);
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50),
            ]),
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
        this.countryService.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                _this.errorMessage = res.message.name;
                _this.isSubmitClick = false;
                return;
            }
            else {
                _this.errorMessage = '';
                _this.isSubmitClick = true;
                _this.nonReload();
                // this.router.navigate(['/settings/country']).then(() => {
                //   this.toastr.success('تم انشاء البيانات بنجاح', '');
                // }).catch((e)=>{
                //     this.errorMessage = e.error.message;
                // })
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
    CreateComponent.prototype.ngOnDestroy = function () {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    };
    CreateComponent.prototype.nonReload = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
            };
            _this.mySubscription = _this.router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                    // Trick the Router into believing it's last link wasn't previously loaded
                    _this.router.navigated = false;
                }
            });
        }, 5000);
    };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-country',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/settings/country/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/settings/country/create/create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/settings/country/edit/edit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/settings/country/edit/edit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-primary\">\r\n  <div class=\"box-header with-border\">\r\n    <h3 class=\"box-title\">تعديل الدولة</h3>\r\n  </div>\r\n  <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\r\n    <div class=\"box-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">اسم الدولة</label>\r\n        <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"ادخل اسم الدولة\">\r\n      </div>\r\n  </div>\r\n    <div class=\"box-footer\">\r\n      <button type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n      &nbsp;\r\n      <a routerLink='/settings/country' class=\"btn btn-info\">الغاء</a>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/country/edit/edit.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/settings/country/edit/edit.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvdW50cnkvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/country/edit/edit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/settings/country/edit/edit.component.ts ***!
  \*********************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/country.service */ "./src/app/settings/country/services/country.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var EditComponent = /** @class */ (function () {
    function EditComponent(route, countryService, toastr, router) {
        this.route = route;
        this.countryService = countryService;
        this.toastr = toastr;
        this.router = router;
        this.errorMessage = '';
        this.nameError = '';
        this.data = { name: '', notes: '' };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
            ]),
        });
        this.id = this.route.snapshot.params.id;
        this.countryService.getItemById(this.id).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
            }
        });
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.name.value,
            notes: this.notes.value,
        };
        this.countryService.update(this.id, itemData).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                _this.router.navigate(['/settings/country']).then(function () {
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
    Object.defineProperty(EditComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-country',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/settings/country/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/settings/country/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_2__["CountryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/settings/country/list/list.component.html":
/*!***********************************************************!*\
  !*** ./src/app/settings/country/list/list.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة  دولة\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الدولة</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة  دولة</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الدولة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/country/list/list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/settings/country/list/list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvdW50cnkvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/country/list/list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/settings/country/list/list.component.ts ***!
  \*********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/country.service */ "./src/app/settings/country/services/country.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(generalService, service, toastr) {
        this.generalService = generalService;
        this.service = service;
        this.toastr = toastr;
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.data = { name: '', notes: '' };
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rows = [];
        this.item = '';
        this.id = '';
        this.deletedId = '';
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]()
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
        };
        this.callHttp();
    };
    ListComponent.prototype.callHttp = function () {
        var _this = this;
        this.generalService.getAllCountries().subscribe(function (res) {
            console.log(res);
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    ListComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
                _this.item = res.data;
            }
        });
    };
    ListComponent.prototype.reset = function () {
        this.callForm.reset();
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
    ListComponent.prototype.launchModal = function (id) {
        // console.log(id);
        this.deletedId = id;
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
            }
            else {
                _this.errorMessage = '';
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, '');
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
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
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = '';
                _this.toastr.success(res.message, '');
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    Object.defineProperty(ListComponent.prototype, "itemData", {
        get: function () {
            return this.service.shareData;
        },
        set: function (value) {
            this.service.shareData = value;
        },
        enumerable: true,
        configurable: true
    });
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
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/settings/country/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/settings/country/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _services_country_service__WEBPACK_IMPORTED_MODULE_4__["CountryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/settings/country/services/country.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/settings/country/services/country.service.ts ***!
  \**************************************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getAll = function (query) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('page', query.page)
            .set('size', query.size);
        return this.http.get("countries?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), { params: params });
    };
    CountryService.prototype.getItemById = function (id) {
        return this.http.get("countries/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CountryService.prototype.update = function (id, country) {
        return this.http.put("countries/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), country);
    };
    CountryService.prototype.create = function (country) {
        return this.http.post("countries?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), country);
    };
    CountryService.prototype.delete = function (countryId) {
        return this.http.delete("countries/" + countryId + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CountryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CountryService);
    return CountryService;
}());



/***/ })

}]);
//# sourceMappingURL=country-country-module.js.map