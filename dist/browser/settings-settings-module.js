(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "./src/app/settings/case-constraint/case-constraint.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/settings/case-constraint/case-constraint.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة حالة قيد\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة القيد</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة حالة قيد</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة القيد</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete(row.id)\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/case-constraint/case-constraint.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/settings/case-constraint/case-constraint.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2Nhc2UtY29uc3RyYWludC9jYXNlLWNvbnN0cmFpbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/case-constraint/case-constraint.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/settings/case-constraint/case-constraint.component.ts ***!
  \***********************************************************************/
/*! exports provided: CaseConstraintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseConstraintComponent", function() { return CaseConstraintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_CaseCoonstraintService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/CaseCoonstraintService.service */ "./src/app/settings/case-constraint/services/CaseCoonstraintService.service.ts");






var CaseConstraintComponent = /** @class */ (function () {
    function CaseConstraintComponent(toastr, service) {
        this.toastr = toastr;
        this.service = service;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: "", notes: "" };
        this.item = "";
        this.id = "";
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    CaseConstraintComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
        };
        this.callHttp();
    };
    CaseConstraintComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    CaseConstraintComponent.prototype.getItemData = function (id) {
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
    CaseConstraintComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                document.getElementById("cancel").click();
                _this.callHttp();
                _this.item = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    CaseConstraintComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        this.data.notes = this.callForm.value.notes;
        this.data.name = this.callForm.value.name;
        this.service.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                if (res.message.name)
                    _this.toastr.error(res.message, "");
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = true;
                _this.toastr.success(res.message, "");
                document.getElementById("cancel").click();
                _this.dtTrigger.unsubscribe();
                _this.callHttp();
            }
        });
    };
    CaseConstraintComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    CaseConstraintComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === id; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    Object.defineProperty(CaseConstraintComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CaseConstraintComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    CaseConstraintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-case-constraint",
            template: __webpack_require__(/*! ./case-constraint.component.html */ "./src/app/settings/case-constraint/case-constraint.component.html"),
            styles: [__webpack_require__(/*! ./case-constraint.component.scss */ "./src/app/settings/case-constraint/case-constraint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_CaseCoonstraintService_service__WEBPACK_IMPORTED_MODULE_5__["CaseCoonstraintService"]])
    ], CaseConstraintComponent);
    return CaseConstraintComponent;
}());



/***/ }),

/***/ "./src/app/settings/case-constraint/services/CaseCoonstraintService.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/settings/case-constraint/services/CaseCoonstraintService.service.ts ***!
  \*************************************************************************************/
/*! exports provided: CaseCoonstraintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseCoonstraintService", function() { return CaseCoonstraintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var CaseCoonstraintService = /** @class */ (function () {
    function CaseCoonstraintService(http) {
        this.http = http;
    }
    CaseCoonstraintService.prototype.getAll = function () {
        return this.http.get("case-constraint?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CaseCoonstraintService.prototype.getItemById = function (id) {
        return this.http.get("case-constraint/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CaseCoonstraintService.prototype.update = function (id, data) {
        return this.http.put("case-constraint/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    CaseCoonstraintService.prototype.create = function (data) {
        return this.http.post("case-constraint?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    CaseCoonstraintService.prototype.delete = function (id) {
        return this.http.delete("case-constraint/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    CaseCoonstraintService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CaseCoonstraintService);
    return CaseCoonstraintService;
}());



/***/ }),

/***/ "./src/app/settings/constraint-status/constraint-status.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/settings/constraint-status/constraint-status.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة موقف قيد\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n      data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\"> اضافة موقف قيد</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم وسيلة التعارف</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم وسيلة التعارف</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete(row.id)\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\" data-dismiss=\"modal\">الغاء\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/constraint-status/constraint-status.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/settings/constraint-status/constraint-status.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2NvbnN0cmFpbnQtc3RhdHVzL2NvbnN0cmFpbnQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/constraint-status/constraint-status.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/settings/constraint-status/constraint-status.component.ts ***!
  \***************************************************************************/
/*! exports provided: ConstraintStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstraintStatusComponent", function() { return ConstraintStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_ConstraintStatusService_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/ConstraintStatusService.service */ "./src/app/settings/constraint-status/services/ConstraintStatusService.service.ts");








var ConstraintStatusComponent = /** @class */ (function () {
    function ConstraintStatusComponent(toastr, service, router, route) {
        this.toastr = toastr;
        this.service = service;
        this.router = router;
        this.route = route;
        this.errorMessage = '';
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: '', notes: '' };
        this.item = '';
        this.id = '';
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    ConstraintStatusComponent.prototype.getItemData = function (id) {
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
    ConstraintStatusComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    ConstraintStatusComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    ConstraintStatusComponent.prototype.onSubmit = function () {
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
    ConstraintStatusComponent.prototype.create = function () {
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
    ConstraintStatusComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    ConstraintStatusComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
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
    Object.defineProperty(ConstraintStatusComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConstraintStatusComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    ConstraintStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-constraint-status',
            template: __webpack_require__(/*! ./constraint-status.component.html */ "./src/app/settings/constraint-status/constraint-status.component.html"),
            styles: [__webpack_require__(/*! ./constraint-status.component.scss */ "./src/app/settings/constraint-status/constraint-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_ConstraintStatusService_service__WEBPACK_IMPORTED_MODULE_6__["ConstraintStatusService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ConstraintStatusComponent);
    return ConstraintStatusComponent;
}());



/***/ }),

/***/ "./src/app/settings/constraint-status/services/ConstraintStatusService.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/settings/constraint-status/services/ConstraintStatusService.service.ts ***!
  \****************************************************************************************/
/*! exports provided: ConstraintStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstraintStatusService", function() { return ConstraintStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var ConstraintStatusService = /** @class */ (function () {
    function ConstraintStatusService(http) {
        this.http = http;
    }
    ConstraintStatusService.prototype.getAll = function () {
        return this.http.get("constraint-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ConstraintStatusService.prototype.getItemById = function (id) {
        return this.http.get("constraint-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ConstraintStatusService.prototype.update = function (id, data) {
        return this.http.put("constraint-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    ConstraintStatusService.prototype.create = function (data) {
        return this.http.post("constraint-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    ConstraintStatusService.prototype.delete = function (id) {
        return this.http.delete("constraint-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ConstraintStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConstraintStatusService);
    return ConstraintStatusService;
}());



/***/ }),

/***/ "./src/app/settings/departments/Department.service.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/departments/Department.service.ts ***!
  \************************************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var DepartmentService = /** @class */ (function () {
    function DepartmentService(http) {
        this.http = http;
    }
    DepartmentService.prototype.getAll = function () {
        return this.http.get("departments?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DepartmentService.prototype.getItemById = function (id) {
        return this.http.get("departments/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DepartmentService.prototype.update = function (id, data) {
        return this.http.put("departments/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    DepartmentService.prototype.create = function (data) {
        return this.http.post("departments?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    DepartmentService.prototype.delete = function (id) {
        return this.http.delete("departments/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DepartmentService);
    return DepartmentService;
}());



/***/ }),

/***/ "./src/app/settings/departments/departments.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/settings/departments/departments.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة قسم دراسى\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم القسم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'level' | trans }}<span style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"level_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of levels'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(level_id.touched || level_id.dirty) && level_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"level_id.errors?.required\">\r\n                  <p>من فضلك اختر المستوى الدراسى </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة قسم دراسى</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الوظيفة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'level' | trans }}<span style=\"color: red\">*</span></label>\r\n             \r\n                <select class=\"form-control\" formControlName=\"level_id\">\r\n                  <option value=\"{{row.id}}\" *ngFor='let row of levels'>{{row.name}}</option>\r\n                </select>\r\n                <div *ngIf=\"(level_id.touched || level_id.dirty) && level_id.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"level_id.errors?.required\">\r\n                    <p>من فضلك اختر المستوى الدراسى </p>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n         \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>المستوى الدراسى</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.level.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>المستوى الدراسى</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/departments/departments.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/settings/departments/departments.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2RlcGFydG1lbnRzL2RlcGFydG1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/departments/departments.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/departments/departments.component.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Department.service */ "./src/app/settings/departments/Department.service.ts");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");







var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent(toastr, service, generalService) {
        this.toastr = toastr;
        this.service = service;
        this.generalService = generalService;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: "", level_id: "", notes: "" };
        this.levels = [];
        this.item = "";
        this.id = "";
        this.deletedId = "";
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            level_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
        };
        this.generalService.getAllLevels().subscribe(function (res) {
            _this.levels = res.data;
        });
        this.callHttp();
    };
    DepartmentsComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    DepartmentsComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
            level_id: this.callForm.value.level_id
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = "";
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    DepartmentsComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
            level_id: this.callForm.value.level_id
        };
        console.log(itemData);
        this.service.create(itemData).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.toastr.error(res.message, "");
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    DepartmentsComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    DepartmentsComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                document.getElementById("cancello").click();
                _this.toastr.error(res.message, "");
            }
        });
    };
    DepartmentsComponent.prototype.getItemData = function (id) {
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
    DepartmentsComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(DepartmentsComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartmentsComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DepartmentsComponent.prototype, "level_id", {
        get: function () {
            return this.callForm.get("level_id");
        },
        enumerable: true,
        configurable: true
    });
    DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-departments',
            template: __webpack_require__(/*! ./departments.component.html */ "./src/app/settings/departments/departments.component.html"),
            styles: [__webpack_require__(/*! ./departments.component.scss */ "./src/app/settings/departments/departments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _Department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"],
            src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"]])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());



/***/ }),

/***/ "./src/app/settings/divisions/divisions.component.html":
/*!*************************************************************!*\
  !*** ./src/app/settings/divisions/divisions.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة شعبة دراسية\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الوظيفة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'level' | trans }}<span style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"level_id\" (click)=\"felterDepartments(level_id)\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of levels'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(level_id.touched || level_id.dirty) && level_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"level_id.errors?.required\">\r\n                  <p>من فضلك اختر المستوى الدراسى </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'department' | trans }}<span style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"department_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of departments'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(department_id.touched || department_id.dirty) && department_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"department_id.errors?.required\">\r\n                  <p>من فضلك اختر القسم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة شعبة دراسية</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الوظيفة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'level' | trans }}<span style=\"color: red\">*</span></label>\r\n             \r\n                <select class=\"form-control\" formControlName=\"level_id\" (click)=\"felterDepartments(level_id)\">\r\n                  <option value=\"{{row.id}}\" *ngFor='let row of levels'>{{row.name}}</option>\r\n                </select>\r\n                <div *ngIf=\"(level_id.touched || level_id.dirty) && level_id.invalid\">\r\n                  <div class=\"alert alert-danger\" *ngIf=\"level_id.errors?.required\">\r\n                    <p>من فضلك اختر المستوى الدراسى </p>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'department' | trans }}<span style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"department_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of departments'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(department_id.touched || department_id.dirty) && department_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"department_id.errors?.required\">\r\n                  <p>من فضلك اختر القسم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>القسم</th>\r\n          <th>المستوى الدراسى</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.department.name }}</td>\r\n          <td>{{ row.department.level.name }}</td>\r\n\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>القسم</th>\r\n          <th>المستوى الدراسى</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/divisions/divisions.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/settings/divisions/divisions.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2RpdmlzaW9ucy9kaXZpc2lvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/divisions/divisions.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/settings/divisions/divisions.component.ts ***!
  \***********************************************************/
/*! exports provided: DivisionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionsComponent", function() { return DivisionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _divisions_servic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./divisions.servic */ "./src/app/settings/divisions/divisions.servic.ts");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");







var DivisionsComponent = /** @class */ (function () {
    function DivisionsComponent(generalService, service, toastr) {
        this.generalService = generalService;
        this.service = service;
        this.toastr = toastr;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: "", department_id: "", notes: "" };
        this.levels = [];
        this.departments = [];
        this.item = "";
        this.id = "";
        this.deletedId = "";
    }
    DivisionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
        };
        this.generalService.getAllLevels().subscribe(function (res) {
            _this.levels = res.data;
            console.log(res);
        });
        this.generalService.getAllDepartments().subscribe(function (res) {
            // this.departments = res.data;
            console.log(res);
        });
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            department_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            level_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
        });
        this.callHttp();
    };
    DivisionsComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    DivisionsComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
                _this.level_id.setValue(res.data.department.level_id);
                _this.department_id.setValue(res.data.department_id);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
                _this.item = res.data;
            }
        });
    };
    DivisionsComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
            department_id: this.callForm.value.department_id,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = "";
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    DivisionsComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        this.data.notes = this.callForm.value.notes;
        this.data.department_id = this.callForm.value.department_id;
        this.data.name = this.callForm.value.name;
        this.service.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                _this.toastr.error(res.message, "");
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    DivisionsComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    DivisionsComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    DivisionsComponent.prototype.launchModal = function (id) {
        // console.log(id);
        this.deletedId = id;
    };
    DivisionsComponent.prototype.felterDepartments = function (level_id) {
        var _this = this;
        this.service.getDepartmantByLevelId(level_id.value).subscribe(function (res) {
            console.log(res);
            _this.departments = res.data;
        });
    };
    Object.defineProperty(DivisionsComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DivisionsComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DivisionsComponent.prototype, "department_id", {
        get: function () {
            return this.callForm.get("department_id");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DivisionsComponent.prototype, "level_id", {
        get: function () {
            return this.callForm.get("level_id");
        },
        enumerable: true,
        configurable: true
    });
    DivisionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-divisions",
            template: __webpack_require__(/*! ./divisions.component.html */ "./src/app/settings/divisions/divisions.component.html"),
            styles: [__webpack_require__(/*! ./divisions.component.scss */ "./src/app/settings/divisions/divisions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_6__["GeneralService"],
            _divisions_servic__WEBPACK_IMPORTED_MODULE_5__["DivisionService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], DivisionsComponent);
    return DivisionsComponent;
}());



/***/ }),

/***/ "./src/app/settings/divisions/divisions.servic.ts":
/*!********************************************************!*\
  !*** ./src/app/settings/divisions/divisions.servic.ts ***!
  \********************************************************/
/*! exports provided: DivisionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivisionService", function() { return DivisionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var DivisionService = /** @class */ (function () {
    function DivisionService(http) {
        this.http = http;
    }
    DivisionService.prototype.getAll = function () {
        return this.http.get("divisions?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DivisionService.prototype.getItemById = function (id) {
        return this.http.get("divisions/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DivisionService.prototype.update = function (id, data) {
        return this.http.put("divisions/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    DivisionService.prototype.create = function (data) {
        return this.http.post("divisions?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    DivisionService.prototype.delete = function (id) {
        return this.http.delete("divisions/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DivisionService.prototype.getDepartmantByLevelId = function (level_id) {
        return this.http.get("department/" + level_id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    DivisionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DivisionService);
    return DivisionService;
}());



/***/ }),

/***/ "./src/app/settings/languages/languages.component.html":
/*!*************************************************************!*\
  !*** ./src/app/settings/languages/languages.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة  لغة\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم اللغة</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة  لغة</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم اللغة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/languages/languages.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/settings/languages/languages.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2xhbmd1YWdlcy9sYW5ndWFnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/languages/languages.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/settings/languages/languages.component.ts ***!
  \***********************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _languages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages.service */ "./src/app/settings/languages/languages.service.ts");






var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent(service, toastr) {
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
    LanguagesComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    LanguagesComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    LanguagesComponent.prototype.getItemData = function (id) {
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
    LanguagesComponent.prototype.onSubmit = function () {
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
    LanguagesComponent.prototype.create = function () {
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
    LanguagesComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    LanguagesComponent.prototype.delete = function () {
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
    LanguagesComponent.prototype.launchModal = function (id) {
        // console.log(id);
        this.deletedId = id;
    };
    Object.defineProperty(LanguagesComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguagesComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    LanguagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/settings/languages/languages.component.html"),
            styles: [__webpack_require__(/*! ./languages.component.scss */ "./src/app/settings/languages/languages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_languages_service__WEBPACK_IMPORTED_MODULE_5__["LanguagesService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/settings/languages/languages.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/settings/languages/languages.service.ts ***!
  \*********************************************************/
/*! exports provided: LanguagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesService", function() { return LanguagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var LanguagesService = /** @class */ (function () {
    function LanguagesService(http) {
        this.http = http;
    }
    LanguagesService.prototype.getAll = function () {
        return this.http.get("languages?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LanguagesService.prototype.getItemById = function (id) {
        return this.http.get("languages/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LanguagesService.prototype.update = function (id, data) {
        return this.http.put("languages/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    LanguagesService.prototype.create = function (data) {
        return this.http.post("languages?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    LanguagesService.prototype.delete = function (id) {
        return this.http.delete("languages/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LanguagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LanguagesService);
    return LanguagesService;
}());



/***/ }),

/***/ "./src/app/settings/levels/levels.component.html":
/*!*******************************************************!*\
  !*** ./src/app/settings/levels/levels.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة مستوى دراسى\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم وسيلة التعارف</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة مستوى دراسى</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم وسيلة التعارف</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete(row.id)\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/levels/levels.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/settings/levels/levels.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2xldmVscy9sZXZlbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/levels/levels.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/levels/levels.component.ts ***!
  \*****************************************************/
/*! exports provided: LevelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelsComponent", function() { return LevelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_LevelService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/LevelService.service */ "./src/app/settings/levels/services/LevelService.service.ts");






var LevelsComponent = /** @class */ (function () {
    function LevelsComponent(service, toastr) {
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
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    LevelsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    LevelsComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    LevelsComponent.prototype.getItemData = function (id) {
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
    LevelsComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                document.getElementById("cancel").click();
                _this.callHttp();
                _this.item = '';
                _this.toastr.success(res.message, '');
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    LevelsComponent.prototype.create = function () {
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
            console.log(res);
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
    LevelsComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    LevelsComponent.prototype.delete = function (id) {
        var _this = this;
        this.service.delete(id).subscribe(function (res) {
            _this.isSubmitClick = false;
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
    Object.defineProperty(LevelsComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LevelsComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    LevelsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-levels',
            template: __webpack_require__(/*! ./levels.component.html */ "./src/app/settings/levels/levels.component.html"),
            styles: [__webpack_require__(/*! ./levels.component.scss */ "./src/app/settings/levels/levels.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_LevelService_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], LevelsComponent);
    return LevelsComponent;
}());



/***/ }),

/***/ "./src/app/settings/levels/services/LevelService.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/settings/levels/services/LevelService.service.ts ***!
  \******************************************************************/
/*! exports provided: LevelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelService", function() { return LevelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var LevelService = /** @class */ (function () {
    function LevelService(http) {
        this.http = http;
    }
    LevelService.prototype.getAll = function () {
        return this.http.get("levels?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LevelService.prototype.getItemById = function (id) {
        return this.http.get("levels/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LevelService.prototype.update = function (id, data) {
        return this.http.put("levels/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    LevelService.prototype.create = function (data) {
        return this.http.post("levels?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    LevelService.prototype.delete = function (id) {
        return this.http.delete("levels/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    LevelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LevelService);
    return LevelService;
}());



/***/ }),

/***/ "./src/app/settings/nationality/nationality.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/settings/nationality/nationality.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة جنسية\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الجنسية </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            \r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة جنسية</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الجنسية </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/nationality/nationality.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/settings/nationality/nationality.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL25hdGlvbmFsaXR5L25hdGlvbmFsaXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/nationality/nationality.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/nationality/nationality.component.ts ***!
  \***************************************************************/
/*! exports provided: NationalityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalityComponent", function() { return NationalityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _nationality_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nationality.service */ "./src/app/settings/nationality/nationality.service.ts");






var NationalityComponent = /** @class */ (function () {
    function NationalityComponent(toastr, service) {
        this.toastr = toastr;
        this.service = service;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: "", notes: "" };
        this.levels = [];
        this.departments = [];
        this.item = "";
        this.id = "";
        this.deletedId = "";
    }
    NationalityComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
        };
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
        this.callHttp();
    };
    NationalityComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    NationalityComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = "";
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    NationalityComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        this.data.notes = this.callForm.value.notes;
        this.data.name = this.callForm.value.name;
        this.service.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                _this.toastr.error(res.message, "");
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    NationalityComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    NationalityComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    NationalityComponent.prototype.getItemData = function (id) {
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
    NationalityComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(NationalityComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NationalityComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    NationalityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nationality',
            template: __webpack_require__(/*! ./nationality.component.html */ "./src/app/settings/nationality/nationality.component.html"),
            styles: [__webpack_require__(/*! ./nationality.component.scss */ "./src/app/settings/nationality/nationality.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _nationality_service__WEBPACK_IMPORTED_MODULE_5__["NationalityService"]])
    ], NationalityComponent);
    return NationalityComponent;
}());



/***/ }),

/***/ "./src/app/settings/nationality/nationality.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/settings/nationality/nationality.service.ts ***!
  \*************************************************************/
/*! exports provided: NationalityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalityService", function() { return NationalityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var NationalityService = /** @class */ (function () {
    function NationalityService(http) {
        this.http = http;
    }
    NationalityService.prototype.getAll = function () {
        return this.http.get("nationalities?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    NationalityService.prototype.getItemById = function (id) {
        return this.http.get("nationalities/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    NationalityService.prototype.update = function (id, data) {
        return this.http.put("nationalities/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    NationalityService.prototype.create = function (data) {
        return this.http.post("nationalities?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    NationalityService.prototype.delete = function (id) {
        return this.http.delete("nationalities/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    NationalityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NationalityService);
    return NationalityService;
}());



/***/ }),

/***/ "./src/app/settings/parent-jobs/parent-jobs.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/settings/parent-jobs/parent-jobs.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة وظيفة\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الوظيفة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة وظيفة</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الوظيفة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/parent-jobs/parent-jobs.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/settings/parent-jobs/parent-jobs.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3BhcmVudC1qb2JzL3BhcmVudC1qb2JzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/parent-jobs/parent-jobs.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/parent-jobs/parent-jobs.component.ts ***!
  \***************************************************************/
/*! exports provided: ParentJobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentJobsComponent", function() { return ParentJobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _parent_jobs_servic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parent-jobs.servic */ "./src/app/settings/parent-jobs/parent-jobs.servic.ts");






var ParentJobsComponent = /** @class */ (function () {
    function ParentJobsComponent(service, toastr) {
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
    ParentJobsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    ParentJobsComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            console.log(res);
            _this.dtTrigger.next();
        });
    };
    ParentJobsComponent.prototype.getItemData = function (id) {
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
    ParentJobsComponent.prototype.onSubmit = function () {
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
    ParentJobsComponent.prototype.create = function () {
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
    ParentJobsComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    ParentJobsComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
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
    ParentJobsComponent.prototype.launchModal = function (id) {
        // console.log(id);
        this.deletedId = id;
    };
    Object.defineProperty(ParentJobsComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ParentJobsComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    ParentJobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent-jobs',
            template: __webpack_require__(/*! ./parent-jobs.component.html */ "./src/app/settings/parent-jobs/parent-jobs.component.html"),
            styles: [__webpack_require__(/*! ./parent-jobs.component.scss */ "./src/app/settings/parent-jobs/parent-jobs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parent_jobs_servic__WEBPACK_IMPORTED_MODULE_5__["ParentJobsService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ParentJobsComponent);
    return ParentJobsComponent;
}());



/***/ }),

/***/ "./src/app/settings/parent-jobs/parent-jobs.servic.ts":
/*!************************************************************!*\
  !*** ./src/app/settings/parent-jobs/parent-jobs.servic.ts ***!
  \************************************************************/
/*! exports provided: ParentJobsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentJobsService", function() { return ParentJobsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var ParentJobsService = /** @class */ (function () {
    function ParentJobsService(http) {
        this.http = http;
    }
    ParentJobsService.prototype.getAll = function () {
        return this.http.get("parent-jobs?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ParentJobsService.prototype.getItemById = function (id) {
        return this.http.get("parent-jobs/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ParentJobsService.prototype.update = function (id, data) {
        return this.http.put("parent-jobs/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    ParentJobsService.prototype.create = function (data) {
        return this.http.post("parent-jobs?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    ParentJobsService.prototype.delete = function (id) {
        return this.http.delete("parent-jobs/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    ParentJobsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ParentJobsService);
    return ParentJobsService;
}());



/***/ }),

/***/ "./src/app/settings/registeration-status/Registeration.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/settings/registeration-status/Registeration.service.ts ***!
  \************************************************************************/
/*! exports provided: RegisterationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationService", function() { return RegisterationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RegisterationService = /** @class */ (function () {
    function RegisterationService(http) {
        this.http = http;
    }
    RegisterationService.prototype.getAll = function () {
        return this.http.get("registration-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegisterationService.prototype.getItemById = function (id) {
        return this.http.get("registration-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegisterationService.prototype.update = function (id, data) {
        return this.http.put("registration-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegisterationService.prototype.create = function (data) {
        return this.http.post("registration-status?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RegisterationService.prototype.delete = function (id) {
        return this.http.delete("registration-status/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RegisterationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterationService);
    return RegisterationService;
}());



/***/ }),

/***/ "./src/app/settings/registeration-status/registeration-status.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/settings/registeration-status/registeration-status.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة حالة تقديم\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة حالة تقديم</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة التقديم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم حالة التقديم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            \r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>الاوراق المطلوبة</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>\r\n            <ul *ngFor=\"let row of row.required_documents\">\r\n              <li>{{ row.required_document.name }}</li>\r\n            </ul>\r\n          </td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            &nbsp;\r\n            <button title=\"{{'assign required documents' | trans}}\" class=\"btn btn-success\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-info\" (click)=\"getItemInfo(row.id)\">\r\n              <i class=\"fa fa-newspaper-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-info fade in\" id=\"modal-info\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                      <div class=\"text-center w3-block modal-title w3-xlarge\" >\r\n                        {{ 'select required documents' | trans }}\r\n                        <br>\r\n                        <span>{{ row.name }}</span>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"box box-primary\">\r\n                    <div class=\"box-header with-border\">\r\n                      <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n                    </div>\r\n            \r\n                    <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n                      autocomplete=\"off\">\r\n                      <div class=\"box-body\">\r\n                        \r\n                      </div>\r\n                      <div class=\"box-footer\">\r\n                        <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n                        &nbsp;\r\n                        <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>الاوراق المطلوبة</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/registeration-status/registeration-status.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/settings/registeration-status/registeration-status.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3JlZ2lzdGVyYXRpb24tc3RhdHVzL3JlZ2lzdGVyYXRpb24tc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/registeration-status/registeration-status.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/settings/registeration-status/registeration-status.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RegisterationStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationStatusComponent", function() { return RegisterationStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _Registeration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Registeration.service */ "./src/app/settings/registeration-status/Registeration.service.ts");
/* harmony import */ var _required_documents_required_document_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../required-documents/required-document.service */ "./src/app/settings/required-documents/required-document.service.ts");







var RegisterationStatusComponent = /** @class */ (function () {
    function RegisterationStatusComponent(toastr, service, requiredDocumentService) {
        this.toastr = toastr;
        this.service = service;
        this.requiredDocumentService = requiredDocumentService;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: "", notes: "" };
        this.levels = [];
        this.departments = [];
        this.item = "";
        this.id = "";
        this.deletedId = "";
        this.requiredDocuments = [];
    }
    RegisterationStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
        this.requiredDocumentService.getAll().subscribe(function (res) {
            _this.requiredDocuments = res;
            console.log(_this.requiredDocuments);
        });
        this.callHttp();
    };
    RegisterationStatusComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            console.log(res);
            _this.dtTrigger.next();
        });
    };
    RegisterationStatusComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = "";
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    RegisterationStatusComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        this.data.notes = this.callForm.value.notes;
        this.data.name = this.callForm.value.name;
        this.service.create(this.data).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.toastr.error(res.message.name, "");
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    RegisterationStatusComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    RegisterationStatusComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    RegisterationStatusComponent.prototype.getItemData = function (id) {
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
    RegisterationStatusComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    RegisterationStatusComponent.prototype.getItemInfo = function (id) {
        this.service.getItemById(id).subscribe(function (res) {
            console.log(res);
        });
    };
    Object.defineProperty(RegisterationStatusComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterationStatusComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    RegisterationStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-registeration-status",
            template: __webpack_require__(/*! ./registeration-status.component.html */ "./src/app/settings/registeration-status/registeration-status.component.html"),
            styles: [__webpack_require__(/*! ./registeration-status.component.scss */ "./src/app/settings/registeration-status/registeration-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _Registeration_service__WEBPACK_IMPORTED_MODULE_5__["RegisterationService"],
            _required_documents_required_document_service__WEBPACK_IMPORTED_MODULE_6__["RequiredDocumentsService"]])
    ], RegisterationStatusComponent);
    return RegisterationStatusComponent;
}());



/***/ }),

/***/ "./src/app/settings/relative-relations/RelativeRelation.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/settings/relative-relations/RelativeRelation.service.ts ***!
  \*************************************************************************/
/*! exports provided: RelativeRelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeRelation", function() { return RelativeRelation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RelativeRelation = /** @class */ (function () {
    function RelativeRelation(http) {
        this.http = http;
    }
    RelativeRelation.prototype.getAll = function () {
        return this.http.get("relations?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RelativeRelation.prototype.getItemById = function (id) {
        return this.http.get("relations/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RelativeRelation.prototype.update = function (id, data) {
        return this.http.put("relations/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RelativeRelation.prototype.create = function (data) {
        return this.http.post("relations?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RelativeRelation.prototype.delete = function (id) {
        return this.http.delete("relations/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RelativeRelation = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RelativeRelation);
    return RelativeRelation;
}());



/***/ }),

/***/ "./src/app/settings/relative-relations/relative-relations.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/settings/relative-relations/relative-relations.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة صلة قرابة\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم صلة القرابة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة صلة قرابة</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم صلة القرابة </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/relative-relations/relative-relations.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/settings/relative-relations/relative-relations.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3JlbGF0aXZlLXJlbGF0aW9ucy9yZWxhdGl2ZS1yZWxhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/relative-relations/relative-relations.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/settings/relative-relations/relative-relations.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RelativeRelationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelativeRelationsComponent", function() { return RelativeRelationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _RelativeRelation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RelativeRelation.service */ "./src/app/settings/relative-relations/RelativeRelation.service.ts");






var RelativeRelationsComponent = /** @class */ (function () {
    function RelativeRelationsComponent(toastr, service) {
        this.toastr = toastr;
        this.service = service;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { name: "", notes: "" };
        this.levels = [];
        this.item = "";
        this.id = "";
        this.deletedId = "";
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [])
        });
    }
    RelativeRelationsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
        };
        this.callHttp();
    };
    RelativeRelationsComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            console.log(res);
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    RelativeRelationsComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = "";
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    RelativeRelationsComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
        };
        this.service.create(itemData).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.toastr.error(res.message, "");
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    RelativeRelationsComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    RelativeRelationsComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                document.getElementById("cancello").click();
                _this.toastr.error(res.message, "");
            }
        });
    };
    RelativeRelationsComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.isSubmitClick = false;
                _this.name.setValue(res.data.name);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
                _this.item = res.data;
            }
        });
    };
    RelativeRelationsComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(RelativeRelationsComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RelativeRelationsComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    RelativeRelationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-relative-relations',
            template: __webpack_require__(/*! ./relative-relations.component.html */ "./src/app/settings/relative-relations/relative-relations.component.html"),
            styles: [__webpack_require__(/*! ./relative-relations.component.scss */ "./src/app/settings/relative-relations/relative-relations.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _RelativeRelation_service__WEBPACK_IMPORTED_MODULE_5__["RelativeRelation"]])
    ], RelativeRelationsComponent);
    return RelativeRelationsComponent;
}());



/***/ }),

/***/ "./src/app/settings/required-documents/required-document.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/settings/required-documents/required-document.service.ts ***!
  \**************************************************************************/
/*! exports provided: RequiredDocumentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentsService", function() { return RequiredDocumentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RequiredDocumentsService = /** @class */ (function () {
    function RequiredDocumentsService(http) {
        this.http = http;
    }
    RequiredDocumentsService.prototype.getAll = function () {
        return this.http.get("adminision/required_documents?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RequiredDocumentsService.prototype.getItemById = function (id) {
        return this.http.get("adminision/required_documents/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RequiredDocumentsService.prototype.update = function (id, data) {
        return this.http.put("adminision/required_documents/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RequiredDocumentsService.prototype.create = function (data) {
        return this.http.post("adminision/required_documents?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    RequiredDocumentsService.prototype.delete = function (id) {
        return this.http.delete("adminision/required_documents/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    RequiredDocumentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequiredDocumentsService);
    return RequiredDocumentsService;
}());



/***/ }),

/***/ "./src/app/settings/required-documents/required-documents.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/settings/required-documents/required-documents.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\" (click) = \"reset()\">\r\n      اضافة اوراق تقديم\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافةاوراق تقديم</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الورقة المطلوبة</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">نوع النسخة<span style=\"color: red\">*</span></label>\r\n              <li class=\"d-inline-block mr-2\">\r\n                    <fieldset>\r\n                        <div class=\"vs-radio-con\">\r\n                            <input type=\"radio\" formControlName=\"type\" checked=\"\" value=\"original\">\r\n                            <span class=\"vs-radio\">\r\n                                <span class=\"vs-radio--border\"></span>\r\n                                <span class=\"vs-radio--circle\"></span>\r\n                            </span>\r\n                            <span class=\"\">{{ 'original' | trans }}</span>\r\n                        </div>\r\n                    </fieldset>\r\n                </li>\r\n                <li class=\"d-inline-block mr-2\">\r\n                    <fieldset>\r\n                        <div class=\"vs-radio-con\"  >\r\n                            <input type=\"radio\" namformControlNamee=\"type\" value=\"copy\">\r\n                            <span class=\"vs-radio\">\r\n                                <span class=\"vs-radio--border\"></span>\r\n                                <span class=\"vs-radio--circle\"></span>\r\n                            </span>\r\n                            <span class=\"\">{{ 'copy' | trans }}</span>\r\n                        </div>\r\n                    </fieldset>\r\n                </li>\r\n                <li class=\"d-inline-block mr-2\">\r\n                    <fieldset>\r\n                        <div class=\"vs-radio-con\" >\r\n                            <input type=\"radio\" formControlName=\"type\" value=\"both\">\r\n                            <span class=\"vs-radio\">\r\n                                <span class=\"vs-radio--border\"></span>\r\n                                <span class=\"vs-radio--circle\"></span>\r\n                            </span>\r\n                            <span class=\"\">{{ 'both' | trans }}</span>\r\n                        </div>\r\n                    </fieldset>\r\n                </li>\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم اللغة </p>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"form-group\">\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" formControlName=\"type\"  id=\"optionsRadios1\" value=\"original\" checked=\"\">\r\n                  {{ 'original' | trans }}\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" formControlName=\"type\"  id=\"optionsRadios2\" value=\"copy\">\r\n                  {{ 'copy' | trans }}\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" formControlName=\"type\" id=\"optionsRadios3\" value=\"both\">\r\n                  {{ 'both' | trans }}\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">ملاحظات</label>\r\n                <textarea class=\"form-control\" formControlName=\"notes\" rows=\"10\" cols=\"50\">  \r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم الورقة المطلوبة</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" formControlName=\"type\"  id=\"optionsRadios1\" value=\"original\" checked=\"\">\r\n                  {{ 'original' | trans }}\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" formControlName=\"type\"  id=\"optionsRadios2\" value=\"copy\">\r\n                  {{ 'copy' | trans }}\r\n                </label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <label>\r\n                  <input type=\"radio\" formControlName=\"type\" id=\"optionsRadios3\" value=\"both\">\r\n                  {{ 'both' | trans }}\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>نوع النسخة</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.type | trans }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>الاسم</th>\r\n          <th>ملاحظات</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/required-documents/required-documents.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/settings/required-documents/required-documents.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3JlcXVpcmVkLWRvY3VtZW50cy9yZXF1aXJlZC1kb2N1bWVudHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/required-documents/required-documents.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/settings/required-documents/required-documents.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RequiredDocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentsComponent", function() { return RequiredDocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _required_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./required-document.service */ "./src/app/settings/required-documents/required-document.service.ts");






var RequiredDocumentsComponent = /** @class */ (function () {
    function RequiredDocumentsComponent(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.errorMessage = '';
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.data = { type: '', name: '', notes: '' };
        this.item = '';
        this.id = '';
        this.deletedId = '';
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    RequiredDocumentsComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
    };
    RequiredDocumentsComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res;
            console.log(res);
            _this.dtTrigger.next();
        });
    };
    RequiredDocumentsComponent.prototype.getItemData = function (id) {
        var _this = this;
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
                _this.type.setValue(res.data.type);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
                _this.item = res.data;
            }
        });
    };
    RequiredDocumentsComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
            type: this.callForm.value.type
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.dtTrigger.unsubscribe();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = '';
                _this.toastr.success(res.message, '');
            }
            else {
                _this.toastr.error(res.message, '');
            }
        });
    };
    RequiredDocumentsComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = '';
        if (this.callForm.invalid) {
            this.errorMessage = 'من فضلك ادخل بيانات صحيحة';
            return;
        }
        this.isSubmitClick = true;
        var itemData = {
            name: this.callForm.value.name,
            notes: this.callForm.value.notes,
            type: this.callForm.value.type
        };
        this.service.create(itemData).subscribe(function (res) {
            if (res.status == 0) {
                if (res.message.name)
                    _this.toastr.error(res.message.name, '');
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
    RequiredDocumentsComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    RequiredDocumentsComponent.prototype.delete = function () {
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
    RequiredDocumentsComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(RequiredDocumentsComponent.prototype, "name", {
        get: function () {
            return this.callForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequiredDocumentsComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get('notes');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RequiredDocumentsComponent.prototype, "type", {
        get: function () {
            return this.callForm.get('type');
        },
        enumerable: true,
        configurable: true
    });
    RequiredDocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-documents',
            template: __webpack_require__(/*! ./required-documents.component.html */ "./src/app/settings/required-documents/required-documents.component.html"),
            styles: [__webpack_require__(/*! ./required-documents.component.scss */ "./src/app/settings/required-documents/required-documents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_required_document_service__WEBPACK_IMPORTED_MODULE_5__["RequiredDocumentsService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RequiredDocumentsComponent);
    return RequiredDocumentsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translation/translation.component */ "./src/app/settings/translation/translation.component.ts");
/* harmony import */ var _levels_levels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./levels/levels.component */ "./src/app/settings/levels/levels.component.ts");
/* harmony import */ var _case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./case-constraint/case-constraint.component */ "./src/app/settings/case-constraint/case-constraint.component.ts");
/* harmony import */ var _constraint_status_constraint_status_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constraint-status/constraint-status.component */ "./src/app/settings/constraint-status/constraint-status.component.ts");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/settings/languages/languages.component.ts");
/* harmony import */ var _parent_jobs_parent_jobs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parent-jobs/parent-jobs.component */ "./src/app/settings/parent-jobs/parent-jobs.component.ts");
/* harmony import */ var _divisions_divisions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./divisions/divisions.component */ "./src/app/settings/divisions/divisions.component.ts");
/* harmony import */ var _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nationality/nationality.component */ "./src/app/settings/nationality/nationality.component.ts");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/settings/departments/departments.component.ts");
/* harmony import */ var _relative_relations_relative_relations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./relative-relations/relative-relations.component */ "./src/app/settings/relative-relations/relative-relations.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/users.component */ "./src/app/settings/users/users.component.ts");
/* harmony import */ var _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./registeration-status/registeration-status.component */ "./src/app/settings/registeration-status/registeration-status.component.ts");
/* harmony import */ var _required_documents_required_documents_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./required-documents/required-documents.component */ "./src/app/settings/required-documents/required-documents.component.ts");

















var routes = [
    {
        // RegisterationMethodsModule
        path: "",
        component: _settings_component__WEBPACK_IMPORTED_MODULE_3__["SettingsComponent"],
        children: [
            {
                path: 'city',
                loadChildren: './city/city.module#CityModule'
            },
            {
                path: "country",
                loadChildren: './country/country.module#CountryModule'
            },
            {
                path: "government",
                loadChildren: './government/government.module#GovernmentModule'
            },
            {
                path: "academic-year",
                loadChildren: './academic-year/academic-year.module#AcademicYearModule'
            },
            {
                path: "qualifications",
                loadChildren: './qualification/qualification.module#QualificationModule'
            },
            {
                path: "qualification-types",
                loadChildren: './qualification-types/qualification-types.module#QualificationTypesModule'
            },
            {
                path: "roles",
                loadChildren: './roles/roles.module#RolesModule'
            },
            {
                path: "registration-methods",
                loadChildren: './registeration-methods/registeration-methods.module#RegisterationMethodsModule'
            },
            {
                path: "registration-status",
                component: _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_15__["RegisterationStatusComponent"]
            },
            {
                path: "translations",
                component: _translation_translation_component__WEBPACK_IMPORTED_MODULE_4__["TranslationComponent"]
            },
            {
                path: "levels",
                component: _levels_levels_component__WEBPACK_IMPORTED_MODULE_5__["LevelsComponent"]
            },
            {
                path: "case-constraints",
                component: _case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_6__["CaseConstraintComponent"]
            },
            {
                path: "constraint-status",
                component: _constraint_status_constraint_status_component__WEBPACK_IMPORTED_MODULE_7__["ConstraintStatusComponent"]
            },
            {
                path: 'languages',
                component: _languages_languages_component__WEBPACK_IMPORTED_MODULE_8__["LanguagesComponent"]
            },
            {
                path: 'parent-jobs',
                component: _parent_jobs_parent_jobs_component__WEBPACK_IMPORTED_MODULE_9__["ParentJobsComponent"]
            },
            {
                path: 'divisions',
                component: _divisions_divisions_component__WEBPACK_IMPORTED_MODULE_10__["DivisionsComponent"]
            },
            {
                path: 'nationalities',
                component: _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_11__["NationalityComponent"]
            },
            {
                path: 'departments',
                component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_12__["DepartmentsComponent"]
            },
            {
                path: 'relative-realtions',
                component: _relative_relations_relative_relations_component__WEBPACK_IMPORTED_MODULE_13__["RelativeRelationsComponent"]
            },
            {
                path: 'users',
                component: _users_users_component__WEBPACK_IMPORTED_MODULE_14__["UsersComponent"]
            },
            {
                path: 'required-documents',
                component: _required_documents_required_documents_component__WEBPACK_IMPORTED_MODULE_16__["RequiredDocumentsComponent"]
            }
        ]
    }
];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--    <aside class=\"main-sidebar\">-->\r\n<!--      &lt;!&ndash; sidebar: style can be found in sidebar.less &ndash;&gt;-->\r\n<!--      <section class=\"sidebar\">-->\r\n<!--        &lt;!&ndash; Sidebar user panel &ndash;&gt;-->\r\n<!--        <div class=\"user-panel\">-->\r\n<!--          <div class=\"pull-left image\">-->\r\n<!--            <img src=\"../../dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">-->\r\n<!--          </div>-->\r\n<!--          <div class=\"pull-left info\">-->\r\n<!--            <p>Alexander Pierce</p>-->\r\n<!--            <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>-->\r\n<!--          </div>-->\r\n<!--        </div>-->\r\n\r\n<!--        &lt;!&ndash; sidebar menu: : style can be found in sidebar.less &ndash;&gt;-->\r\n<!--        <ul class=\"sidebar-menu tree\" data-widget=\"tree\">-->\r\n<!--          <li class=\"header\">الاعدادات الرئيسية</li>-->\r\n<!--          <li><a routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i> الدول </a></li>-->\r\n<!--          <li><a routerLink=\"/settings/city\"><i class=\"fa fa-circle-o\"></i> المدن </a></li>-->\r\n<!--        </ul>-->\r\n<!--      </section>-->\r\n<!--      &lt;!&ndash; /.sidebar &ndash;&gt;-->\r\n<!--    </aside>-->\r\n<div class=\"content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n\r\n      <!-- Profile Image -->\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-body box-profile\">\r\n          <h3 class=\"profile-username text-center\">الاعدادات الرئيسية</h3>\r\n          <ul class=\"list-group list-group-unbordered\">\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/users\"><i class=\"fa fa-circle-o\"></i>\r\n                المستخدمين\r\n              </a>\r\n            </li>\r\n\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/country\"><i class=\"fa fa-circle-o\"></i>\r\n                الدول\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/government\"><i class=\"fa fa-circle-o\"></i>\r\n                المحافظات\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/city\"><i class=\"fa fa-circle-o\"></i>\r\n                المدن\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/academic-year\"><i class=\"fa fa-circle-o\"></i>\r\n                الاعوام الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/levels\"><i class=\"fa fa-circle-o\"></i>\r\n                 المستويات الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualifications\"><i class=\"fa fa-circle-o\"></i>\r\n                المؤهلات الدراسية\r\n              </a>\r\n            </li>\r\n            \r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/qualification-types\"><i class=\"fa fa-circle-o\"></i>\r\n                انواع المؤهلات الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/divisions\"><i class=\"fa fa-circle-o\"></i>\r\n                  الشعب الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/departments\"><i class=\"fa fa-circle-o\"></i>\r\n                  الاقسام الدراسية\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/registration-methods\"><i class=\"fa fa-circle-o\"></i>\r\n                وسائل التعارف\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/required-documents\"><i class=\"fa fa-circle-o\"></i>\r\n                 الاوراق المطلوبة\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/registration-status\"><i class=\"fa fa-circle-o\"></i>\r\n                 حالات التقديم\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/case-constraints\"><i class=\"fa fa-circle-o\"></i>\r\n                حالات القيد\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/constraint-status\"><i class=\"fa fa-circle-o\"></i>\r\n              مواقف القيد\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/languages\"><i class=\"fa fa-circle-o\"></i>\r\n              اللغات\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/translations\"><i class=\"fa fa-circle-o\"></i>\r\n                الترجمة\r\n              </a>\r\n            </li>\r\n            <li class=\"list-group-item\">\r\n              <a class=\"active\" routerLink=\"/settings/parent-jobs\"><i class=\"fa fa-circle-o\"></i>\r\n                وظائف اولياء الامور\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <!-- /.box-body -->\r\n      </div>\r\n      <!-- /.box -->\r\n\r\n\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/settings/settings-routing.module.ts");
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _translation_translation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translation/translation.component */ "./src/app/settings/translation/translation.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _levels_levels_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./levels/levels.component */ "./src/app/settings/levels/levels.component.ts");
/* harmony import */ var _case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./case-constraint/case-constraint.component */ "./src/app/settings/case-constraint/case-constraint.component.ts");
/* harmony import */ var _constraint_status_constraint_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constraint-status/constraint-status.component */ "./src/app/settings/constraint-status/constraint-status.component.ts");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/settings/languages/languages.component.ts");
/* harmony import */ var _parent_jobs_parent_jobs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parent-jobs/parent-jobs.component */ "./src/app/settings/parent-jobs/parent-jobs.component.ts");
/* harmony import */ var _divisions_divisions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./divisions/divisions.component */ "./src/app/settings/divisions/divisions.component.ts");
/* harmony import */ var _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nationality/nationality.component */ "./src/app/settings/nationality/nationality.component.ts");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/settings/departments/departments.component.ts");
/* harmony import */ var _relative_relations_relative_relations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./relative-relations/relative-relations.component */ "./src/app/settings/relative-relations/relative-relations.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/users.component */ "./src/app/settings/users/users.component.ts");
/* harmony import */ var _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./registeration-status/registeration-status.component */ "./src/app/settings/registeration-status/registeration-status.component.ts");
/* harmony import */ var _required_documents_required_documents_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./required-documents/required-documents.component */ "./src/app/settings/required-documents/required-documents.component.ts");




















var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"],
                _translation_translation_component__WEBPACK_IMPORTED_MODULE_6__["TranslationComponent"],
                _levels_levels_component__WEBPACK_IMPORTED_MODULE_8__["LevelsComponent"],
                _case_constraint_case_constraint_component__WEBPACK_IMPORTED_MODULE_9__["CaseConstraintComponent"],
                _constraint_status_constraint_status_component__WEBPACK_IMPORTED_MODULE_10__["ConstraintStatusComponent"],
                _languages_languages_component__WEBPACK_IMPORTED_MODULE_11__["LanguagesComponent"],
                _parent_jobs_parent_jobs_component__WEBPACK_IMPORTED_MODULE_12__["ParentJobsComponent"],
                _divisions_divisions_component__WEBPACK_IMPORTED_MODULE_13__["DivisionsComponent"],
                _nationality_nationality_component__WEBPACK_IMPORTED_MODULE_14__["NationalityComponent"],
                _departments_departments_component__WEBPACK_IMPORTED_MODULE_15__["DepartmentsComponent"],
                _relative_relations_relative_relations_component__WEBPACK_IMPORTED_MODULE_16__["RelativeRelationsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_17__["UsersComponent"],
                _registeration_status_registeration_status_component__WEBPACK_IMPORTED_MODULE_18__["RegisterationStatusComponent"],
                _required_documents_required_documents_component__WEBPACK_IMPORTED_MODULE_19__["RequiredDocumentsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingsRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
            ],
            exports: [_settings_component__WEBPACK_IMPORTED_MODULE_5__["SettingsComponent"]],
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/translation/translation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-10 col-md-10 col-sm-12\">\r\n    <div class=\"w3-white material-shadow box box-primary\">\r\n      <div class=\"box-header w3-xlarge\">\r\n        {{ \"translations\" | trans }}\r\n      </div>\r\n      <br>\r\n      <div class=\"border-bottom-dashed\" ></div>\r\n      <br>\r\n \r\n      <div class=\"box-body w3-padding\" > \r\n          <table class=\" table\" > \r\n              <tr class=\"w3-border-bottom\" >\r\n                  <th>#</th>\r\n                  <th>{{ \"key\" | trans }}</th>\r\n                  <th>{{ \"name_en\" | trans }}</th>\r\n                  <th>{{ \"name_ar\" | trans }}</th>\r\n                </tr>\r\n          </table>\r\n        <div style=\"height: 400px;overflow: auto;\">\r\n            <table class=\" table\" > \r\n                <tr  *ngIf=\"!translationList\" >\r\n                  <th colspan=\"4\" >\r\n                    <div class=\"text-center w3-padding\" >\r\n                      <i class=\"w3-xlarge fa fa-spinner fa-spin w3-text-indigo\"></i>\r\n                    </div>\r\n                  </th>\r\n                </tr>\r\n                \r\n                <tr *ngFor=\"let item of translationList index as i\" >\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>\r\n                    <input type=\"text\" class=\"w3-input w3-block\" readonly style=\"border: none;border: 1px dashed gray;\" [(ngModel)]=\"item.key\" >\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" class=\"w3-input w3-block\" style=\"border: none;border: 1px dashed gray;\" [(ngModel)]=\"item.name_en\" >\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"text\" class=\"w3-input w3-block\" style=\"border: none;border: 1px dashed gray;\" [(ngModel)]=\"item.name_ar\" >\r\n                  </td> \r\n                </tr>\r\n              </table>\r\n        </div>\r\n        <br>\r\n      </div>\r\n      <div class=\"box-footer\">\r\n        <button class=\"btn btn-primary\" [disabled]=\"isUpdate\" (click)=\"updateTranslation()\" >{{ \"save changes\" | trans }}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n \r\n"

/***/ }),

/***/ "./src/app/settings/translation/translation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3RyYW5zbGF0aW9uL3RyYW5zbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/translation/translation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/settings/translation/translation.component.ts ***!
  \***************************************************************/
/*! exports provided: TranslationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationComponent", function() { return TranslationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _shared_translation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/translation */ "./src/app/shared/translation.ts");
/* harmony import */ var _shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/translation.service */ "./src/app/shared/services/translation.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/message */ "./src/app/shared/message.ts");






var TranslationComponent = /** @class */ (function () {
    function TranslationComponent(translationService) {
        this.translationService = translationService;
        this.isUpdate = false;
    }
    TranslationComponent.prototype.ngOnInit = function () {
        this.submitNotExistTranslation();
        this.loadTranslations();
    };
    /**
     * load translations and update the cache
     */
    TranslationComponent.prototype.loadTranslations = function () {
        var _this = this;
        this.translationService.getList().subscribe(function (r) {
            _this.translationList = r;
        });
    };
    /**
     * load translations and update the cache
     */
    TranslationComponent.prototype.loadِAppTranslations = function () {
        this.translationService.get().subscribe(function (r) {
            _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].set(_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_CACHE_KEY, r);
        });
    };
    /**
     * update keys not exists
     */
    TranslationComponent.prototype.submitNotExistTranslation = function () {
        var _this = this;
        if (!_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].getNewKeys())
            return;
        var data = {
            data: _shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].getNewKeys()
        };
        this.translationService.update(data).subscribe(function (r) {
            _this.loadTranslations();
            //
            _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].remove(_shared_translation__WEBPACK_IMPORTED_MODULE_3__["Translation"].TRANSLATION_CACHE_NOT_EXISTS_KEY);
        });
    };
    /**
     * update new words
     */
    TranslationComponent.prototype.updateTranslation = function () {
        var _this = this;
        var data = {
            data: this.translationList
        };
        this.isUpdate = true;
        this.translationService.update(data).subscribe(function (r) {
            var data = r;
            if (data.status == 1)
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(data.message);
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
            _this.isUpdate = false;
            _this.loadTranslations();
            _this.loadِAppTranslations();
        });
    };
    TranslationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-translation',
            template: __webpack_require__(/*! ./translation.component.html */ "./src/app/settings/translation/translation.component.html"),
            styles: [__webpack_require__(/*! ./translation.component.scss */ "./src/app/settings/translation/translation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]])
    ], TranslationComponent);
    return TranslationComponent;
}());



/***/ }),

/***/ "./src/app/settings/users/users.component.html":
/*!*****************************************************!*\
  !*** ./src/app/settings/users/users.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">\r\n      اضافة مستخدم\r\n    </button>\r\n    <button style=\"display: none;\" type=\"button\" id=\"openModal\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default-edit\">\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default-edit\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">تعديل البيانات</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"onSubmit()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'username' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"username\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'username' | trans }}\">\r\n              <div *ngIf=\"(username.touched || username.dirty) && username.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"username.errors?.required\">\r\n                  <p>من فضلك ادخل اسم المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'phone' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"phone\" type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'phone' | trans }}\">\r\n              <div *ngIf=\"(phone.touched || phone.dirty) && phone.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"phone.errors?.required\">\r\n                  <p>من فضلك ادخل تليفون المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'roles' | trans }}<span style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"role_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of roles'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(role_id.touched || role_id.dirty) && role_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"role_id.errors?.required\">\r\n                  <p>من فضلك اختر وظيفة المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'password' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'password' | trans }}\">\r\n                <div *ngIf=\"(password.touched || errorMessage) && password.invalid\" class=\"custom-error alert alert-danger\">\r\n                  <span *ngIf=\"password.errors.required\">من فضلك ادخل كلمة المرور</span>\r\n                  <span *ngIf=\"password.errors.minlength\">كلمة المرور يجب ان لا تقل عن 8 احرف</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'email' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'email' | trans }}\">\r\n              <div *ngIf=\"(email.touched || email.dirty) && email.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"email.errors?.required\">\r\n                  <p>من فضلك ادخل البريد الاليكترونى  </p>\r\n                </div>\r\n                <div class=\"alert alert-danger\" *ngIf=\"email.errors?.email\">\r\n                  <p>من فضلك ادخل  بريد اليكترونى صحيح </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            \r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">تعديل</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancell\" class=\"btn btn-danger\" data-dismiss=\"modal\">الغاء</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"modal-default\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة مستخدم</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"name.errors?.required\">\r\n                  <p>من فضلك ادخل اسم المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'username' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"username\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'username' | trans }}\">\r\n              <div *ngIf=\"(username.touched || username.dirty) && username.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"username.errors?.required\">\r\n                  <p>من فضلك ادخل اسم المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'phone' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"phone\" type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'phone' | trans }}\">\r\n              <div *ngIf=\"(phone.touched || phone.dirty) && phone.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"phone.errors?.required\">\r\n                  <p>من فضلك ادخل تليفون المستخدم </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'email' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'email' | trans }}\">\r\n              <div *ngIf=\"(email.touched || email.dirty) && email.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"email.errors?.required\">\r\n                  <p>من فضلك ادخل البريد الاليكترونى  </p>\r\n                </div>\r\n                <div class=\"alert alert-danger\" *ngIf=\"email.errors?.email\">\r\n                  <p>من فضلك ادخل  بريد اليكترونى صحيح </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'password' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"password\" type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'password' | trans }}\">\r\n                <div *ngIf=\"(password.touched || errorMessage) && password.invalid\" class=\"custom-error alert alert-danger\">\r\n                  <span *ngIf=\"password.errors.required\">من فضلك ادخل كلمة المرور</span>\r\n                  <span *ngIf=\"password.errors.minlength\">كلمة المرور يجب ان لا تقل عن 8 احرف</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n                </textarea>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>{{'image' | trans}}</th>\r\n          <th>{{ 'name' | trans}}</th>\r\n          <th>{{'username' | trans}}</th>\r\n          <th>{{'roles' | trans}}</th>\r\n          <th>{{'phone' | trans}}</th>\r\n          <th>{{'email' | trans}}</th>\r\n          <th>{{ 'notes' | trans}}</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>\r\n            <div class=\"user-panel\">\r\n              <div class=\"image\">\r\n                <img src=\"{{publicUrl +'/'+ row.image}}\" class=\"img-circle\" alt=\"User Image\">\r\n              </div>\r\n            </div>\r\n            <!-- <img src=\"{{publicUrl +'/'+ row.image}}\" class=\"user-image\"> -->\r\n          </td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.username }}</td>\r\n          <td>{{ row.role.name }}</td>\r\n          <td>{{ row.phone }}</td>\r\n          <td>{{ row.email }}</td>\r\n\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" (click)=\"getItemData(row.id)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#modal-danger\" (click)=\"launchModal(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n            <div class=\"modal modal-danger fade\" id=\"modal-danger\">\r\n              <div class=\"modal-dialog\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span></button>\r\n                    <h4 class=\"modal-title\">هل انت متأكد من حذف هذا العنصر</h4>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <p>عند حذف هذا العنصر لايمكن استرجاعه مرة اخرى&hellip;</p>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-outline\" (click)=\"delete()\">حذف</button>\r\n                    &nbsp;\r\n                    <button type=\"button\" id=\"cancello\" class=\"btn btn-outline pull-left\"\r\n                      data-dismiss=\"modal\">الغاء</button>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>{{'image' | trans}}</th>\r\n          <th>{{ 'name' | trans}}</th>\r\n          <th>{{'username' | trans}}</th>\r\n          <th>{{'roles' | trans}}</th>\r\n          <th>{{'phone' | trans}}</th>\r\n          <th>{{'email' | trans}}</th>\r\n          <th>{{ 'notes' | trans}}</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/users/users.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/settings/users/users.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/users/users.component.ts":
/*!***************************************************!*\
  !*** ./src/app/settings/users/users.component.ts ***!
  \***************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.service */ "./src/app/settings/users/users.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var UsersComponent = /** @class */ (function () {
    function UsersComponent(toastr, service) {
        this.toastr = toastr;
        this.service = service;
        this.publicUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].publicUrl;
        this.errorMessage = "";
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        // public data: IReqUsers = { name: "", notes: "" };
        this.roles = [];
        this.item = "";
        this.id = "";
        this.deletedId = "";
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
            ]),
            role_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: "full_numbers",
            pageLength: 10,
        };
        this.service.getAllRoles().subscribe(function (res) {
            _this.roles = res.data;
        });
        this.callHttp();
    };
    UsersComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            console.log(res.data);
            _this.rows = res.data;
            _this.dtTrigger.next();
        });
    };
    UsersComponent.prototype.onSubmit = function () {
        var _this = this;
        var itemData = {
            name: this.callForm.value.name,
            username: this.callForm.value.username,
            image: this.callForm.value.image,
            password: this.callForm.value.password,
            phone: this.callForm.value.phone,
            email: this.callForm.value.email,
            notes: this.callForm.value.notes,
            role_id: this.callForm.value.role_id,
        };
        this.service.update(this.id, itemData).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancell").click();
                _this.callHttp();
                _this.isSubmitClick = false;
                _this.item = "";
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
            }
            else {
                _this.toastr.error(res.message, "");
            }
        });
    };
    UsersComponent.prototype.create = function () {
        var _this = this;
        this.errorMessage = "";
        if (this.callForm.invalid) {
            this.errorMessage = "من فضلك ادخل بيانات صحيحة";
            return;
        }
        this.isSubmitClick = true;
        var itemData = {
            name: this.callForm.value.name,
            username: this.callForm.value.username,
            image: this.callForm.value.image,
            password: this.callForm.value.password,
            phone: this.callForm.value.phone,
            email: this.callForm.value.email,
            notes: this.callForm.value.notes,
            role_id: this.callForm.value.role_id,
        };
        console.log(itemData);
        this.service.create(itemData).subscribe(function (res) {
            console.log(res);
            if (res.status == 0) {
                _this.toastr.error(res.message, "");
                _this.errorMessage = res.message;
                _this.isSubmitClick = false;
            }
            else {
                _this.errorMessage = "";
                _this.isSubmitClick = false;
                _this.toastr.success(res.message, "");
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.callHttp();
            }
        });
    };
    UsersComponent.prototype.reset = function () {
        this.callForm.reset();
    };
    UsersComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.deletedId).subscribe(function (res) {
            if (res.status == 1) {
                document.getElementById("cancello").click();
                _this.toastr.success(res.message, "");
                var index = _this.rows.findIndex(function (v) { return v.id === _this.deletedId; });
                _this.rows.splice(index, 1);
            }
            else {
                document.getElementById("cancello").click();
                _this.toastr.error(res.message, "");
            }
        });
    };
    UsersComponent.prototype.getItemData = function (id) {
        var _this = this;
        console.log(id);
        this.id = id;
        this.service.getItemById(id).subscribe(function (res) {
            console.log(res);
            if (res.status == 1) {
                _this.name.setValue(res.data.name);
                _this.username.setValue(res.data.username);
                _this.phone.setValue(res.data.phone);
                _this.email.setValue(res.data.email);
                _this.name.setValue(res.data.name);
                _this.role_id.setValue(res.data.role.id);
                _this.password.setValue(res.data.password);
                _this.notes.setValue(res.data.notes);
                document.getElementById("openModal").click();
                _this.item = res.data;
            }
        });
    };
    UsersComponent.prototype.launchModal = function (id) {
        this.deletedId = id;
    };
    Object.defineProperty(UsersComponent.prototype, "name", {
        get: function () {
            return this.callForm.get("name");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "role_id", {
        get: function () {
            return this.callForm.get("role_id");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "username", {
        get: function () {
            return this.callForm.get("username");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "phone", {
        get: function () {
            return this.callForm.get("phone");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "email", {
        get: function () {
            return this.callForm.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "password", {
        get: function () {
            return this.callForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "notes", {
        get: function () {
            return this.callForm.get("notes");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersComponent.prototype, "image", {
        get: function () {
            return this.callForm.get("image");
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/settings/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/settings/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _users_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/settings/users/users.service.ts":
/*!*************************************************!*\
  !*** ./src/app/settings/users/users.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("users?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserService.prototype.getAllRoles = function () {
        return this.http.get("roles?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserService.prototype.getRoleById = function (id) {
        return this.http.get("roles/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserService.prototype.getItemById = function (id) {
        return this.http.get("users/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserService.prototype.update = function (id, data) {
        return this.http.put("users/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    UserService.prototype.create = function (data) {
        return this.http.post("users?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("users/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=settings-settings-module.js.map