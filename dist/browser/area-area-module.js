(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["area-area-module"],{

/***/ "./src/app/military/area/area-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/military/area/area-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AreaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaRoutingModule", function() { return AreaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _area_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../area/list/list.component */ "./src/app/military/area/list/list.component.ts");




var routes = [
    {
        path: "",
        component: _area_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
    }
];
var AreaRoutingModule = /** @class */ (function () {
    function AreaRoutingModule() {
    }
    AreaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AreaRoutingModule);
    return AreaRoutingModule;
}());



/***/ }),

/***/ "./src/app/military/area/area.module.ts":
/*!**********************************************!*\
  !*** ./src/app/military/area/area.module.ts ***!
  \**********************************************/
/*! exports provided: AreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaModule", function() { return AreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _area_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area-routing.module */ "./src/app/military/area/area-routing.module.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/military/area/list/list.component.ts");







var AreaModule = /** @class */ (function () {
    function AreaModule() {
    }
    AreaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _area_routing_module__WEBPACK_IMPORTED_MODULE_5__["AreaRoutingModule"],
            ]
        })
    ], AreaModule);
    return AreaModule;
}());



/***/ }),

/***/ "./src/app/military/area/list/list.component.html":
/*!********************************************************!*\
  !*** ./src/app/military/area/list/list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"box\">\r\n  <div class=\"box-header\">\r\n  </div>\r\n  <div class=\"box-body\">\r\n    <table datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" class=\"table table-bordered table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>{{ 'name' | trans }}</th>\r\n          <th>{{ 'government' | trans}}</th>\r\n          <th>{{ 'country' | trans}}</th>\r\n          <th>{{ 'notes' | trans}}</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows index as i\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ row.name }}</td>\r\n          <td>{{ row.government.name }}</td>\r\n          <td>{{ row.government.country.name }}</td>\r\n          <td>{{ row.notes }}</td>\r\n          <td>\r\n            <button class=\"btn btn-info\" type=\"button\" routerLink='/settings/country/edit/{{row.id}}'>\r\n              <i class=\"fa fa-edit\"></i>\r\n            </button>\r\n            &nbsp;\r\n            <button class=\"btn btn-danger\" type=\"button\" (click)=\"delete(row.id)\">\r\n              <i class=\"fa fa-trash-o\"></i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>{{ 'name' | trans }}</th>\r\n          <th>{{ 'government' | trans}}</th>\r\n          <th>{{ 'country' | trans}}</th>\r\n          <th>{{ 'notes' | trans}}</th>\r\n          <th>الاجراءات</th>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/military/area/list/list.component.scss":
/*!********************************************************!*\
  !*** ./src/app/military/area/list/list.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbGl0YXJ5L2FyZWEvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/military/area/list/list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/military/area/list/list.component.ts ***!
  \******************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_militaryArea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/militaryArea.service */ "./src/app/military/area/services/militaryArea.service.ts");
/* harmony import */ var src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/general.service */ "./src/app/shared/services/general.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ListComponent = /** @class */ (function () {
    function ListComponent(service, generalService, toastr) {
        this.service = service;
        this.generalService = generalService;
        this.toastr = toastr;
        this.errorMessage = '';
        this.nameError = '';
        this.governmentError = '';
        this.countryError = '';
        this.data = { name: '', government_id: '', notes: '' };
        this.isSubmitClick = false;
        this.governments = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.rows = [];
        this.callForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(50),
            ]),
            government_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](null, [
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
        this.generalService.getAllGovernments().subscribe(function (res) {
            _this.governments = res.data;
        });
        this.callHttp();
    };
    ListComponent.prototype.callHttp = function () {
        var _this = this;
        this.service.getAll().subscribe(function (res) {
            _this.rows = res.data;
            console.log(_this.rows);
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
        this.data.government_id = this.callForm.value.government_id;
        this.data.notes = this.callForm.value.notes;
        this.service.create(this.data).subscribe(function (res) {
            if (res.status == 0) {
                _this.errorMessage = res.message.name;
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
                _this.callHttp();
                _this.isSubmitClick = false;
            }
        });
    };
    Object.defineProperty(ListComponent.prototype, "government_id", {
        get: function () {
            return this.callForm.get('government_id');
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
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/military/area/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/military/area/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_militaryArea_service__WEBPACK_IMPORTED_MODULE_2__["militaryAreaService"],
            src_app_shared_services_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/military/area/services/militaryArea.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/military/area/services/militaryArea.service.ts ***!
  \****************************************************************/
/*! exports provided: militaryAreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "militaryAreaService", function() { return militaryAreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");




var militaryAreaService = /** @class */ (function () {
    function militaryAreaService(http) {
        this.http = http;
    }
    militaryAreaService.prototype.getAll = function () {
        return this.http.get("military-areas?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    militaryAreaService.prototype.getItemById = function (id) {
        return this.http.get("military-areas/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    militaryAreaService.prototype.update = function (id, data) {
        return this.http.put("military-areas/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    militaryAreaService.prototype.create = function (data) {
        return this.http.post("military-areas?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    militaryAreaService.prototype.delete = function (id) {
        return this.http.delete("military-areas/" + id + "?api_token=" + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    militaryAreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], militaryAreaService);
    return militaryAreaService;
}());



/***/ })

}]);
//# sourceMappingURL=area-area-module.js.map