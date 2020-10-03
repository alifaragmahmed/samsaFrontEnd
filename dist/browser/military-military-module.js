(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["military-military-module"],{

/***/ "./src/app/military/area-submission/area-submission.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/military/area-submission/area-submission.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة ادارة تجنيد\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة الجنيد </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة ادارة تجنيد</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة الجنيد </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>المنطقة</th>\r\n          <th>المحافظة</th>\r\n          <th>الدولة</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.military_area.name }}</td>\r\n          <td>{{ row.military_area.government.name }}</td>\r\n          <td>{{ row.military_area.government.country.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>المنطقة</th>\r\n          <th>المحافظة</th>\r\n          <th>الدولة</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/military/area-submission/area-submission.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/military/area-submission/area-submission.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L2FyZWEtc3VibWlzc2lvbi9hcmVhLXN1Ym1pc3Npb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/military/area-submission/area-submission.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/military/area-submission/area-submission.component.ts ***!
  \***********************************************************************/
/*! exports provided: AreaSubmissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaSubmissionComponent", function() { return AreaSubmissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _area_submission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area-submission.service */ "./src/app/military/area-submission/area-submission.service.ts");
/* harmony import */ var _shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/general.service */ "./src/app/shared/services/general.service.ts");







var AreaSubmissionComponent = /** @class */ (function () {
    function AreaSubmissionComponent(generaleServices, service, toastr) {
        this.generaleServices = generaleServices;
        this.service = service;
        this.toastr = toastr;
        this.errorMessage = '';
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { military_area_id: '', government_id: '', notes: '' };
        this.governments = [];
        this.militaryAreas = [];
        this.item = '';
        this.id = '';
        this.deletedId = '';
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            military_area_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            government_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    AreaSubmissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.generaleServices.getAllGovernments().subscribe(function (res) {
            _this.governments = res.data;
            console.log(res.data);
        });
        this.generaleServices.getAllMilitaryAres().subscribe(function (res) {
            console.log(res.data);
            _this.militaryAreas = res.data;
        });
        this.callHttp();
    };
    AreaSubmissionComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    AreaSubmissionComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.military_area_id.setValue(res.data.military_area_id);
                _this.government_id.setValue(res.data.government_id);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
                _this.item = res.data;
            }
        });
    };
    AreaSubmissionComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            military_area_id: this.callForm.value.military_area_id,
            government_id: this.callForm.value.government_id,
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
    AreaSubmissionComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.isSubmitClick = true;
        var itemData = {
            military_area_id: this.callForm.value.military_area_id,
            government_id: this.callForm.value.government_id,
            notes: this.callForm.value.notes
        };
        this.service.create(itemData).subscribe(function (res) {
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
    AreaSubmissionComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    AreaSubmissionComponent.prototype.delete = function () {
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
    AreaSubmissionComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(AreaSubmissionComponent.prototype, "military_area_id", {
        get: function () {
            return this.callForm.get('military_area_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSubmissionComponent.prototype, "government_id", {
        get: function () {
            return this.callForm.get('government_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaSubmissionComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    AreaSubmissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-area-submission',
            template: __webpack_require__(/*! ./area-submission.component.html */ "./src/app/military/area-submission/area-submission.component.html"),
            styles: [__webpack_require__(/*! ./area-submission.component.scss */ "./src/app/military/area-submission/area-submission.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"], _area_submission_service__WEBPACK_IMPORTED_MODULE_5__["MilitaryAreaSubmissionService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AreaSubmissionComponent);
    return AreaSubmissionComponent;
}());



/***/ }),

/***/ "./src/app/military/area-submission/area-submission.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/military/area-submission/area-submission.service.ts ***!
  \*********************************************************************/
/*! exports provided: MilitaryAreaSubmissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryAreaSubmissionService", function() { return MilitaryAreaSubmissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var MilitaryAreaSubmissionService = /** @class */ (function () {
    function MilitaryAreaSubmissionService(http) {
        this.http = http;
    }
    MilitaryAreaSubmissionService.prototype.getAll = function () {
        return this.http.get("military-area-submission?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    MilitaryAreaSubmissionService.prototype.getItemById = function (id) {
        return this.http.get("military-area-submission/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    MilitaryAreaSubmissionService.prototype.update = function (id, data) {
        return this.http.put("military-area-submission/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    MilitaryAreaSubmissionService.prototype.create = function (data) {
        return this.http.post("military-area-submission?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    MilitaryAreaSubmissionService.prototype.delete = function (id) {
        return this.http.delete("military-area-submission/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    MilitaryAreaSubmissionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MilitaryAreaSubmissionService);
    return MilitaryAreaSubmissionService;
}());



/***/ }),

/***/ "./src/app/military/military-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/military/military-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MilitaryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryRoutingModule", function() { return MilitaryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _military_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./military.component */ "./src/app/military/military.component.ts");
/* harmony import */ var _military_status_military_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./military-status/military-status.component */ "./src/app/military/military-status/military-status.component.ts");
/* harmony import */ var _area_submission_area_submission_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area-submission/area-submission.component */ "./src/app/military/area-submission/area-submission.component.ts");






var routes = [
    {
        path: "",
        component: _military_component__WEBPACK_IMPORTED_MODULE_3__["MilitaryComponent"],
        children: [
            {
                path: 'area',
                loadChildren: './area/area.module#AreaModule'
            },
            {
                path: 'status',
                component: _military_status_military_status_component__WEBPACK_IMPORTED_MODULE_4__["MilitaryStatusComponent"]
            },
            {
                path: 'area-submission',
                component: _area_submission_area_submission_component__WEBPACK_IMPORTED_MODULE_5__["AreaSubmissionComponent"]
            }
        ]
    }
];
var MilitaryRoutingModule = /** @class */ (function () {
    function MilitaryRoutingModule() {
    }
    MilitaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MilitaryRoutingModule);
    return MilitaryRoutingModule;
}());



/***/ }),

/***/ "./src/app/military/military-status/military-status.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/military/military-status/military-status.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة  حالة تجنيد\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة الجنيد </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة حالة تجنيد</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة الجنيد </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/military/military-status/military-status.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/military/military-status/military-status.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L21pbGl0YXJ5LXN0YXR1cy9taWxpdGFyeS1zdGF0dXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/military/military-status/military-status.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/military/military-status/military-status.component.ts ***!
  \***********************************************************************/
/*! exports provided: MilitaryStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryStatusComponent", function() { return MilitaryStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _military_status_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./military-status.service */ "./src/app/military/military-status/military-status.service.ts");






var MilitaryStatusComponent = /** @class */ (function () {
    function MilitaryStatusComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.errorMessage = '';
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: '', notes: '' };
        this.item = '';
        this.id = '';
        this.deletedId = '';
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    MilitaryStatusComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    MilitaryStatusComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    MilitaryStatusComponent.prototype.getItemData = function (id) {
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
    MilitaryStatusComponent.prototype.onSubmit = function () {
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
    MilitaryStatusComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.isSubmitClick = true;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes
        };
        this.service.create(itemData).subscribe(function (res) {
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
    MilitaryStatusComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    MilitaryStatusComponent.prototype.delete = function () {
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
    MilitaryStatusComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(MilitaryStatusComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MilitaryStatusComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    MilitaryStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-military-status',
            template: __webpack_require__(/*! ./military-status.component.html */ "./src/app/military/military-status/military-status.component.html"),
            styles: [__webpack_require__(/*! ./military-status.component.scss */ "./src/app/military/military-status/military-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_military_status_service__WEBPACK_IMPORTED_MODULE_5__["MilitaryStatusService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MilitaryStatusComponent);
    return MilitaryStatusComponent;
}());



/***/ }),

/***/ "./src/app/military/military-status/military-status.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/military/military-status/military-status.service.ts ***!
  \*********************************************************************/
/*! exports provided: MilitaryStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryStatusService", function() { return MilitaryStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var MilitaryStatusService = /** @class */ (function () {
    function MilitaryStatusService(http) {
        this.http = http;
    }
    MilitaryStatusService.prototype.getAll = function () {
        return this.http.get("military-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    MilitaryStatusService.prototype.getItemById = function (id) {
        return this.http.get("military-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    MilitaryStatusService.prototype.update = function (id, data) {
        return this.http.put("military-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    MilitaryStatusService.prototype.create = function (data) {
        return this.http.post("military-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    MilitaryStatusService.prototype.delete = function (id) {
        return this.http.delete("military-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    MilitaryStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MilitaryStatusService);
    return MilitaryStatusService;
}());



/***/ }),

/***/ "./src/app/military/military.component.html":
/*!**************************************************!*\
  !*** ./src/app/military/military.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-body box-profile\">\r\n          <h3 class=\"profile-username text-center\">الاعدادات الرئيسية</h3>\r\n          <ul class=\"list-group list-group-unbordered\">\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/military/area\"><i class=\"fa fa-circle-o\"></i>\r\n                مناطق التجنيد\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/military/status\"><i class=\"fa fa-circle-o\"></i>\r\n                حالات التجنيد\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/military/area-submission\"><i class=\"fa fa-circle-o\"></i>\r\n                 ادارة مناطق التجنيد\r\n              </a>\r\n            </li>\r\n            \r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/military/military.component.scss":
/*!**************************************************!*\
  !*** ./src/app/military/military.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L21pbGl0YXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/military/military.component.ts":
/*!************************************************!*\
  !*** ./src/app/military/military.component.ts ***!
  \************************************************/
/*! exports provided: MilitaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryComponent", function() { return MilitaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MilitaryComponent = /** @class */ (function () {
    function MilitaryComponent() {
    }
    MilitaryComponent.prototype.ngOnInit = function () {
    };
    MilitaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-military',
            template: __webpack_require__(/*! ./military.component.html */ "./src/app/military/military.component.html"),
            styles: [__webpack_require__(/*! ./military.component.scss */ "./src/app/military/military.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MilitaryComponent);
    return MilitaryComponent;
}());



/***/ }),

/***/ "./src/app/military/military.module.ts":
/*!*********************************************!*\
  !*** ./src/app/military/military.module.ts ***!
  \*********************************************/
/*! exports provided: MilitaryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MilitaryModule", function() { return MilitaryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _military_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./military-routing.module */ "./src/app/military/military-routing.module.ts");
/* harmony import */ var _military_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./military.component */ "./src/app/military/military.component.ts");
/* harmony import */ var _military_status_military_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./military-status/military-status.component */ "./src/app/military/military-status/military-status.component.ts");
/* harmony import */ var _area_submission_area_submission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./area-submission/area-submission.component */ "./src/app/military/area-submission/area-submission.component.ts");









var MilitaryModule = /** @class */ (function () {
    function MilitaryModule() {
    }
    MilitaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_military_component__WEBPACK_IMPORTED_MODULE_6__["MilitaryComponent"], _military_status_military_status_component__WEBPACK_IMPORTED_MODULE_7__["MilitaryStatusComponent"], _area_submission_area_submission_component__WEBPACK_IMPORTED_MODULE_8__["AreaSubmissionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _military_routing_module__WEBPACK_IMPORTED_MODULE_5__["MilitaryRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"]
            ]
        })
    ], MilitaryModule);
    return MilitaryModule;
}());



/***/ })

}]);
//# sourceMappingURL=military-military-module.js.map