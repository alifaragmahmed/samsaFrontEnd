(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["qualification-types-qualification-types-module"],{

/***/ "./src/app/settings/qualification-types/edit/edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/qualification-types/edit/edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/settings/qualification-types/edit/edit.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/settings/qualification-types/edit/edit.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3F1YWxpZmljYXRpb24tdHlwZXMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/qualification-types/edit/edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/qualification-types/edit/edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/settings/qualification-types/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/settings/qualification-types/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/settings/qualification-types/list/list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/qualification-types/list/list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-default\">\r\n  <div class=\"box-body\">\r\n    <button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#modal-default\">\r\n      اضافة نوع مؤهل\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"modal-default\"  [hidden]=\"hideModal\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title\">اضافة نوع مؤهل</h4>\r\n      </div>\r\n      <div class=\"box box-primary\">\r\n        <div class=\"box-header with-border\">\r\n          <div [hidden]=\"!errorMessage\" class=\"alert alert-danger\">{{errorMessage}}</div>\r\n        </div>\r\n        <form role=\"form\" [hidden] class=\"forms-sample create\" [formGroup]=\"callForm\" (ngSubmit)=\"create()\"\r\n          autocomplete=\"off\">\r\n          <div class=\"box-body\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'qualification_name' | trans }}<span\r\n                  style=\"color: red\">*</span></label>\r\n              <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'qualification_name' | trans }}\">\r\n              <div *ngIf=\"(name.touched || name.dirty) && name.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"qualification_id.errors?.required\">\r\n                  <p>من فضلك ادخل نوع المؤهل</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'select_qualification' | trans}}<span\r\n                  style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"qualification_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of qualifications'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(qualification_id.touched || qualification_id.dirty) && qualification_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"qualification_id.errors?.required\">\r\n                  <p>من فضلك اختر المؤهل الدراسى</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'select_academic_year' | trans }}<span\r\n                  style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"academic_year_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of academicYears'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(academic_year_id.touched || academic_year_id.dirty) && academic_year_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"academic_year_id.errors?.required\">\r\n                  <p>من فضلك اختر العام الدراسى</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'select_level_name' | trans }}<span style=\"color: red\">*</span></label>\r\n              <select class=\"form-control\" formControlName=\"level_id\">\r\n                <option value=\"{{row.id}}\" *ngFor='let row of levels'>{{row.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"(level_id.touched || level_id.dirty) && level_id.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"level_id.errors?.required\">\r\n                  <p>من فضلك ادخل اختر المستوى الدراسى</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'grade' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"grade\" type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'grade' | trans }}\">\r\n              <div *ngIf=\"(grade.touched || grade.dirty) && grade.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"grade.errors?.required\">\r\n                  <p>من فضلك ادخل اسم درجة القبول</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'percentage' | trans }}<span style=\"color: red\">*</span></label>\r\n              <input formControlName=\"percentage\" type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                placeholder=\"{{ 'percentage' | trans }}\">\r\n              <div *ngIf=\"(percentage.touched || percentage.dirty) && percentage.invalid\">\r\n                <div class=\"alert alert-danger\" *ngIf=\"percentage.errors?.required\">\r\n                  <p>من فضلك ادخل نسبة القبول</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">{{ 'notes' | trans }}</label>\r\n              <textarea formControlName=\"notes\" type=\"text\" class=\"form-control\"\r\n                placeholder=\"{{ 'notes' | trans }}\">\r\n               </textarea> \r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"box-footer\">\r\n            <button [disabled]=\"callForm.invalid || isSubmitClick\" type=\"submit\" id=\"modalDismiss\"  class=\"btn btn-primary\">حفظ</button>\r\n            &nbsp;\r\n            <button type=\"button\" id=\"cancel\" class=\"btn btn-danger\" data-dismiss=\"modal\" >cancel</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>{{ 'name' | trans }}</th>\r\n          <th>{{ 'qualification' | trans}}</th>\r\n          <th>{{ 'level name' | trans}}</th>\r\n          <th>{{ 'grade' | trans}}</th>\r\n          <th>{{ 'percentage' | trans}}</th>\r\n          <th>{{ 'notes' | trans}}</th>\r\n          <th>الاجراءات</th>\r\n\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.qualification.name }}</td>\r\n          <td>{{ row.level.name }}</td>\r\n          <td>{{ row.grade }}</td>\r\n          <td>{{ row.percentage }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" routerLink='/settings/country/edit/{{row.id}}'>\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>{{ 'name' | trans }}</th>\r\n          <th>{{ 'qualification' | trans}}</th>\r\n          <th>{{ 'level name' | trans}}</th>\r\n          <th>{{ 'grade' | trans}}</th>\r\n          <th>{{ 'percentage' | trans}}</th>\r\n          <th>{{ 'notes' | trans}}</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/settings/qualification-types/list/list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/settings/qualification-types/list/list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3F1YWxpZmljYXRpb24tdHlwZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/qualification-types/list/list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/qualification-types/list/list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var _services_qualificationType_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/qualificationType.service */ "./src/app/settings/qualification-types/services/qualificationType.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var ListComponent = /** @class */ (function () {
    function ListComponent(generalService, service, toastr, renderer, document) {
        this.generalService = generalService;
        this.service = service;
        this.toastr = toastr;
        this.renderer = renderer;
        this.document = document;
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.data = {
            name: '',
            grade: '',
            qualification_id: '',
            academic_year_id: '',
            percentage: '',
            notes: '',
            level_id: ''
        };
        this.hideModal = false;
        this.modal = '';
        this.qualifications = [];
        this.academicYears = [];
        this.levels = [];
        this.isSubmitClick = false;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.rows = [];
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            qualification_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            academic_year_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            level_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            grade: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            percentage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [])
        });
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
        this.callHttp();
        this.generalService.getAllQualifications().subscribe(function (res) {
            if (res.status == 1)
                _this.qualifications = res.data;
        });
        this.generalService.getAllLevels().subscribe(function (res) {
            if (res.status == 1)
                _this.levels = res.data;
        });
        this.generalService.getAllAcademicYears().subscribe(function (res) {
            if (res.status == 1)
                _this.academicYears = res.data;
        });
    };
    ListComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
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
                document.getElementById("cancel").click();
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
        this.data.grade = this.callForm.value.grade;
        this.data.qualification_id = this.callForm.value.qualification_id;
        this.data.academic_year_id = this.callForm.value.academic_year_id;
        this.data.percentage = this.callForm.value.percentage;
        this.data.level_id = this.callForm.value.level_id;
        this.data.notes = this.callForm.value.notes;
        this.service.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                _this.errorMessage = res.message.name;
                _this.errorMessage = res.message.grade;
                _this.errorMessage = res.message.qualification_id;
                _this.errorMessage = res.message.academic_year_id;
                _this.errorMessage = res.message.level_id;
                _this.errorMessage = res.message.percentage;
                _this.isSubmitClick = false;
                return;
            }
            else {
                _this.errorMessage = '';
                _this.isSubmitClick = true;
                _this.toastr.success(res.message, '');
                _this.dtTrigger.unsubscribe();
                document.getElementById("cancel").click();
                _this.hideModal = true;
                _this.callHttp();
                _this.modal = 'modal';
                _this.isSubmitClick = false;
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
    Object.defineProperty(ListComponent.prototype, "grade", {
        get: function () {
            return this.callForm.get('grade');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "qualification_id", {
        get: function () {
            return this.callForm.get('qualification_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "academic_year_id", {
        get: function () {
            return this.callForm.get('academic_year_id');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "percentage", {
        get: function () {
            return this.callForm.get('percentage');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListComponent.prototype, "level_id", {
        get: function () {
            return this.callForm.get('level_id');
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
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/settings/qualification-types/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/settings/qualification-types/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_2__["GeneralService"],
            _services_qualificationType_service__WEBPACK_IMPORTED_MODULE_3__["qualificationTypeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            Document])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/settings/qualification-types/qualification-types-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/settings/qualification-types/qualification-types-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: QualificationTypesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationTypesRoutingModule", function() { return QualificationTypesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/qualification-types/edit/edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/qualification-types/list/list.component.ts");





var routes = [
    {
        path: '',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"]
    },
    {
        path: 'edit/:id',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"]
    },
];
var QualificationTypesRoutingModule = /** @class */ (function () {
    function QualificationTypesRoutingModule() {
    }
    QualificationTypesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], QualificationTypesRoutingModule);
    return QualificationTypesRoutingModule;
}());



/***/ }),

/***/ "./src/app/settings/qualification-types/qualification-types.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/settings/qualification-types/qualification-types.module.ts ***!
  \****************************************************************************/
/*! exports provided: QualificationTypesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualificationTypesModule", function() { return QualificationTypesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _qualification_types_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./qualification-types-routing.module */ "./src/app/settings/qualification-types/qualification-types-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/settings/qualification-types/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/settings/qualification-types/edit/edit.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");








var QualificationTypesModule = /** @class */ (function () {
    function QualificationTypesModule() {
    }
    QualificationTypesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _qualification_types_routing_module__WEBPACK_IMPORTED_MODULE_3__["QualificationTypesRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]
            ]
        })
    ], QualificationTypesModule);
    return QualificationTypesModule;
}());



/***/ }),

/***/ "./src/app/settings/qualification-types/services/qualificationType.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/settings/qualification-types/services/qualificationType.service.ts ***!
  \************************************************************************************/
/*! exports provided: qualificationTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qualificationTypeService", function() { return qualificationTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var qualificationTypeService = /** @class */ (function () {
    function qualificationTypeService(http) {
        this.http = http;
    }
    qualificationTypeService.prototype.getAll = function () {
        return this.http.get('qualification-types?api_token=123456789');
    };
    qualificationTypeService.prototype.getItemById = function (id) {
        return this.http.get("qualification-types/" + id + "?api_token=123456789");
    };
    qualificationTypeService.prototype.update = function (id, data) {
        return this.http.put("qualification-types/" + id + "?api_token=123456789", data);
    };
    qualificationTypeService.prototype.create = function (data) {
        return this.http.post("qualification-types?api_token=123456789", data);
    };
    qualificationTypeService.prototype.delete = function (id) {
        return this.http.delete("qualification-types/" + id + "?api_token=123456789");
    };
    qualificationTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], qualificationTypeService);
    return qualificationTypeService;
}());



/***/ })

}]);
//# sourceMappingURL=qualification-types-qualification-types-module.js.map