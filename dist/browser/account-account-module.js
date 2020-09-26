(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/account/account-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_safe_safe_index_safe_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/safe/safe-index/safe-index.component */ "./src/app/account/components/safe/safe-index/safe-index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_services_service_index_service_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/services/service-index/service-index.component */ "./src/app/account/components/services/service-index/service-index.component.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _components_academic_year_index_academic_year_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/academic-year-index/academic-year-index.component */ "./src/app/account/components/academic-year-index/academic-year-index.component.ts");
/* harmony import */ var _components_store_store_index_store_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/store/store-index/store-index.component */ "./src/app/account/components/store/store-index/store-index.component.ts");








var routes = [
    {
        path: 'safe',
        component: _components_safe_safe_index_safe_index_component__WEBPACK_IMPORTED_MODULE_1__["SafeIndexComponent"]
    },
    {
        path: "setting",
        component: _account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
        children: [
            {
                path: 'services',
                component: _components_services_service_index_service_index_component__WEBPACK_IMPORTED_MODULE_4__["ServiceIndexComponent"]
            },
            {
                path: 'stores',
                component: _components_store_store_index_store_index_component__WEBPACK_IMPORTED_MODULE_7__["StoreIndexComponent"]
            },
            {
                path: 'academic_year_expenses',
                component: _components_academic_year_index_academic_year_index_component__WEBPACK_IMPORTED_MODULE_6__["AcademicYearIndexComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <!-- navbar list -->\n    <div class=\"box box-primary material-shadow\">\n      <div class=\"box-body box-profile\">\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/account_settings.gif\" alt=\"User profile picture\">\n\n        <h3 class=\"profile-username text-center\">{{ \"account_setting\" | trans }}</h3>\n \n\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/account/setting/services' >\n                <b>{{ \"services\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-trophy\" ></i> \n                </a>\n            </a>\n          </li> \n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/account/setting/stores' >\n                <b>{{ \"stores\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-bank\" ></i> \n                </a>\n            </a>\n          </li> \n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/account/setting/academic_year_expenses' >\n                <b>{{ \"academic_year_expenses\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-money\" ></i> \n                </a>\n            </a>\n          </li> \n        </ul> \n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n \n  </div>\n  <!-- /.col -->\n  <div class=\"col-md-9\"> \n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/*!************************************************!*\
  !*** ./src/app/account/account.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.scss */ "./src/app/account/account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/account/account-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_services_service_index_service_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/services/service-index/service-index.component */ "./src/app/account/components/services/service-index/service-index.component.ts");
/* harmony import */ var _components_services_service_create_service_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/services/service-create/service-create.component */ "./src/app/account/components/services/service-create/service-create.component.ts");
/* harmony import */ var _components_safe_safe_index_safe_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/safe/safe-index/safe-index.component */ "./src/app/account/components/safe/safe-index/safe-index.component.ts");
/* harmony import */ var _components_safe_installment_installment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/safe/installment/installment.component */ "./src/app/account/components/safe/installment/installment.component.ts");
/* harmony import */ var _components_safe_student_installment_student_installment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/safe/student-installment/student-installment.component */ "./src/app/account/components/safe/student-installment/student-installment.component.ts");
/* harmony import */ var _components_safe_student_payment_student_payment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/safe/student-payment/student-payment.component */ "./src/app/account/components/safe/student-payment/student-payment.component.ts");
/* harmony import */ var _components_safe_student_service_student_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/safe/student-service/student-service.component */ "./src/app/account/components/safe/student-service/student-service.component.ts");
/* harmony import */ var _components_safe_available_service_available_service_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/safe/available-service/available-service.component */ "./src/app/account/components/safe/available-service/available-service.component.ts");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _components_academic_year_index_academic_year_index_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/academic-year-index/academic-year-index.component */ "./src/app/account/components/academic-year-index/academic-year-index.component.ts");
/* harmony import */ var _components_safe_send_note_send_note_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/safe/send-note/send-note.component */ "./src/app/account/components/safe/send-note/send-note.component.ts");
/* harmony import */ var _components_services_service_form_service_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/services/service-form/service-form.component */ "./src/app/account/components/services/service-form/service-form.component.ts");
/* harmony import */ var _components_store_store_index_store_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/store/store-index/store-index.component */ "./src/app/account/components/store/store-index/store-index.component.ts");
/* harmony import */ var _components_store_store_create_store_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/store/store-create/store-create.component */ "./src/app/account/components/store/store-create/store-create.component.ts");
/* harmony import */ var _components_store_store_update_store_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/store/store-update/store-update.component */ "./src/app/account/components/store/store-update/store-update.component.ts");




















var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_services_service_index_service_index_component__WEBPACK_IMPORTED_MODULE_4__["ServiceIndexComponent"],
                _components_services_service_create_service_create_component__WEBPACK_IMPORTED_MODULE_5__["ServiceCreateComponent"],
                _components_safe_safe_index_safe_index_component__WEBPACK_IMPORTED_MODULE_6__["SafeIndexComponent"],
                _components_safe_installment_installment_component__WEBPACK_IMPORTED_MODULE_7__["InstallmentComponent"],
                _components_safe_student_installment_student_installment_component__WEBPACK_IMPORTED_MODULE_8__["StudentInstallmentComponent"],
                _components_safe_student_payment_student_payment_component__WEBPACK_IMPORTED_MODULE_9__["StudentPaymentComponent"],
                _components_safe_student_service_student_service_component__WEBPACK_IMPORTED_MODULE_10__["StudentServiceComponent"],
                _components_safe_available_service_available_service_component__WEBPACK_IMPORTED_MODULE_11__["AvailableServiceComponent"],
                _account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
                _components_academic_year_index_academic_year_index_component__WEBPACK_IMPORTED_MODULE_14__["AcademicYearIndexComponent"],
                _components_safe_send_note_send_note_component__WEBPACK_IMPORTED_MODULE_15__["SendNoteComponent"],
                _components_services_service_form_service_form_component__WEBPACK_IMPORTED_MODULE_16__["ServiceFormComponent"],
                _components_store_store_index_store_index_component__WEBPACK_IMPORTED_MODULE_17__["StoreIndexComponent"],
                _components_store_store_create_store_create_component__WEBPACK_IMPORTED_MODULE_18__["StoreCreateComponent"],
                _components_store_store_update_store_update_component__WEBPACK_IMPORTED_MODULE_19__["StoreUpdateComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _account_routing_module__WEBPACK_IMPORTED_MODULE_2__["AccountRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_13__["DataTablesModule"]
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/components/academic-year-index/academic-year-index.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/account/components/academic-year-index/academic-year-index.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\n  <div class=\"box-header\">\n    \n    <button *ngIf=\"showRemoveButton\" (click)=\"removeServices()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-trash\" ></span>\n    </button>\n  </div>\n  <table  class=\"table table-bordered text-center\">\n    <tr>\n      <td>{{ \"level\" | trans }}</td>\n      <td>\n        <select style=\"width: 100px\" class=\"form-control input-sm\" (change)=\"loadAcademicYearExpenses()\" [(ngModel)]=\"academicYearExpense.level_id\" >\n          <option *ngFor=\"let item of levels\" value=\"{{ item.id }}\" >{{ item.name }}</option>\n        </select>\n      </td>\n      <td>{{ \"division\" | trans }}</td>\n      <td>\n        <select readonly style=\"width: 100px\" class=\"form-control input-sm\" [(ngModel)]=\"academicYearExpense.division_id\" >\n            <option *ngFor=\"let item of divisions\" value=\"{{ item.id }}\" >{{ item.name }}</option>\n        </select>\n      </td>\n    </tr>\n  </table>\n  <br>\n  <table  class=\"table table-bordered text-center\">\n    <thead> \n\n      <tr>\n        <th></th>\n        <th>#</th>\n        <th>{{ \"name\" | trans }}</th>\n        <th>{{ \"priorty\" | trans }}</th> \n        <th>{{ \"value\" | trans }}</th>\n        <th>{{ \"term\" | trans }}</th>\n        <th>{{ \"store\" | trans }}</th>\n        <th>{{ \"discount\" | trans }}</th>\n        <th></th>\n      </tr>\n    </thead>\n\n    <tbody *ngIf=\"academicYearExpense.details\" >\n      <tr *ngFor=\"let item of academicYearExpense.details index as i\" >\n        <td>\n          <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check\" (click)=\"toggleFromTrash(item.id)\"  >\n        </td>\n        <td>{{ i + 1 }}</td>\n        <td>\n            <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\"    > \n        </td>\n        <td>\n            <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.priorty\"     >  \n        </td>\n        <td>\n            <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.value\"      >  \n        </td> \n        <td> \n            <select style=\"width: 100px\" class=\"form-control input-sm\" [(ngModel)]=\"item.term_id\"   >\n                <option *ngFor=\"let row of terms\" value=\"{{ row.id }}\" >{{ row.name }}</option>\n            </select> \n        </td>\n        <td>\n            <input *ngIf=\"item.store\" readonly type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.store.name\"    > \n            <input type=\"hidden\" class=\"form-control input-sm\" [(ngModel)]=\"item.store_id\"    >   \n        </td>\n        <td>\n            <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.discount\"   >  \n        </td> \n        <td> \n          <button class=\"btn btn-danger fa fa-trash\" (click)=\"removeRow(item, i)\" ></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <br>\n  <button class=\"btn btn-default\" (click)=\"addRow()\" style=\"margin: 5px\"  > \n    <span class=\"fa fa-plus\" ></span> \n  </button> \n  <button class=\"btn btn-primary\" [disabled]=\"updateItem\" (click)=\"viewChanges()\" style=\"margin: 5px\"  > \n    {{ \"save\" | trans }}\n  </button> \n</div>\n\n \n<!-- remove modal -->\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"remove services\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\n            <br>\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\n        </div>\n        <div class=\"modal-footer\"> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n "

/***/ }),

/***/ "./src/app/account/components/academic-year-index/academic-year-index.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/account/components/academic-year-index/academic-year-index.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9hY2FkZW1pYy15ZWFyLWluZGV4L2FjYWRlbWljLXllYXItaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/components/academic-year-index/academic-year-index.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/account/components/academic-year-index/academic-year-index.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AcademicYearIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicYearIndexComponent", function() { return AcademicYearIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_academic_year_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/academic-year.service */ "./src/app/account/services/academic-year.service.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _services_division_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/division.service */ "./src/app/account/services/division.service.ts");
/* harmony import */ var _services_term_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/term.service */ "./src/app/account/services/term.service.ts");











var AcademicYearIndexComponent = /** @class */ (function () {
    function AcademicYearIndexComponent(academicService) {
        this.academicService = academicService;
        // datable trigger
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        // Rows list
        this.academicYearExpense = {
            level_id: 1
        };
        // init breadcrum
        this.breadcrumbList = [];
        // show create modal
        this.showCreateModal = false;
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new angular_hashtable__WEBPACK_IMPORTED_MODULE_4__["HashTable"]();
        this.removed = [];
        this.self = this;
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: _shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('academic_years_expenses') }
        ];
    }
    AcademicYearIndexComponent.prototype.setAccountSettings = function () {
        this.levels = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].get(_services_level_service__WEBPACK_IMPORTED_MODULE_8__["LevelService"].LEVEL_PREFIX);
        this.divisions = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].get(_services_division_service__WEBPACK_IMPORTED_MODULE_9__["DivisionService"].DIVISION_PREFIX);
        this.terms = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].get(_services_term_service__WEBPACK_IMPORTED_MODULE_10__["TermService"].TERPM_PREFIX);
    };
    AcademicYearIndexComponent.prototype.toggleFromTrash = function (id) {
        if (this.trashList.has(id)) {
            this.trashList.remove(id);
        }
        else {
            this.trashList.put(id, id);
        }
        if (this.trashList.size() > 0)
            this.showRemoveButton = true;
        else
            this.showRemoveButton = false;
    };
    AcademicYearIndexComponent.prototype.removeRows = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.academicService.destroy(id_1).subscribe(function () {
                _this.removed.push(id_1);
                _this.trashList.remove(id_1);
                //
                _this.removeRows();
            });
        }
        else {
            this.removed = [];
            this.showRemoveButton = false;
            this.showRemoveModal = false;
            //
            this.dtTrigger.unsubscribe();
            this.loadAcademicYearExpenses();
        }
    };
    AcademicYearIndexComponent.prototype.loadAcademicYearExpenses = function () {
        var _this = this;
        var data = {
            level_id: this.academicYearExpense.level_id
        };
        this.academicService.get(data).subscribe(function (res) {
            _this.academicYearExpense = res;
            console.log(_this.academicYearExpense.details);
        });
    };
    AcademicYearIndexComponent.prototype.addRow = function () {
        var item = {
            value: 0,
            discount: 0,
            academic_year_expense_id: this.academicYearExpense.id
        };
        this.academicYearExpense.details.push(item);
    };
    AcademicYearIndexComponent.prototype.removeRow = function (item, index) {
        var _this = this;
        _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('are your sure'), function () {
            if (item.id) {
                _this.academicService.destroy(item.id).subscribe(function (r) {
                    var data = r;
                    if (data.status == 1) {
                        _this.academicYearExpense.details.splice(index, index + 1);
                        _this.loadAcademicYearExpenses();
                        _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(data.message);
                    }
                    else {
                        _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(data.message);
                    }
                });
            }
            else {
                _this.academicYearExpense.details.splice(index, index + 1);
            }
        });
    };
    AcademicYearIndexComponent.prototype.viewChanges = function () {
        this.updateAcademicYearExpense();
    };
    AcademicYearIndexComponent.prototype.updateAcademicYearExpense = function () {
        var _this = this;
        this.updateItem = true;
        this.academicService.update(this.academicYearExpense).subscribe(function (r) {
            var data = r;
            _this.loadAcademicYearExpenses();
            _shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(data.message);
            _this.updateItem = false;
        });
    };
    AcademicYearIndexComponent.prototype.ngOnInit = function () {
        this.setAccountSettings();
        this.loadAcademicYearExpenses();
    };
    AcademicYearIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-year-index',
            template: __webpack_require__(/*! ./academic-year-index.component.html */ "./src/app/account/components/academic-year-index/academic-year-index.component.html"),
            styles: [__webpack_require__(/*! ./academic-year-index.component.scss */ "./src/app/account/components/academic-year-index/academic-year-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_academic_year_service__WEBPACK_IMPORTED_MODULE_7__["AcademicYearService"]])
    ], AcademicYearIndexComponent);
    return AcademicYearIndexComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/available-service/available-service.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/account/components/safe/available-service/available-service.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal \" id=\"studentAvailableServices\" tabindex=\"-1\" role=\"dialog\"   >\n  <div class=\"modal-dialog modal-\" role=\"document\">\n    <div class=\"modal-content w3-animate-top\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title text-center\">{{ \"student available services\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-bordered\" >\n          <thead>\n            <tr class=\"w3-dark-gray\" >\n              <th>{{ \"#\" | trans }}</th>\n              <th>{{ \"name\" | trans }}</th>\n              <th>{{ \"additional_value\" | trans }}</th>\n              <th>{{ \"value\" | trans }}</th>\n              <th>{{ \"total\" | trans }}</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of services index as i\" >\n              <td>{{ i + 1 }}</td>\n              <td>{{ item.name }}</td>\n              <td>{{ item.additional_value | currency: ' EGP ' }}</td>\n              <td>{{ item.value | currency: ' EGP ' }}</td>\n              <td>{{ (item.value + item.additional_value) | currency: ' EGP ' }}</td>\n              <td>\n                <input type=\"checkbox\" class=\"w3-check\" >\n              </td>\n            </tr>\n            <tr>\n              <td>{{ \"total\" | trans }}</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td>{{ total | currency: ' EGP ' }}</td>\n              <td></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"document.getElementById('studentAvailableServices').style.display='none'\" >{{ \"close\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/account/components/safe/available-service/available-service.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/account/components/safe/available-service/available-service.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL2F2YWlsYWJsZS1zZXJ2aWNlL2F2YWlsYWJsZS1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/components/safe/available-service/available-service.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/account/components/safe/available-service/available-service.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AvailableServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableServiceComponent", function() { return AvailableServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvailableServiceComponent = /** @class */ (function () {
    function AvailableServiceComponent() {
        this.total = 0;
    }
    AvailableServiceComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        if (this.services)
            this.services.forEach(function (element) {
                _this.total += element.value;
                _this.total += element.additional_value;
            });
    };
    AvailableServiceComponent.prototype.ngOnInit = function () {
    };
    AvailableServiceComponent.prototype.ngOnChanges = function (changes) {
        this.calculateTotal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AvailableServiceComponent.prototype, "services", void 0);
    AvailableServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-available-service',
            template: __webpack_require__(/*! ./available-service.component.html */ "./src/app/account/components/safe/available-service/available-service.component.html"),
            styles: [__webpack_require__(/*! ./available-service.component.scss */ "./src/app/account/components/safe/available-service/available-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvailableServiceComponent);
    return AvailableServiceComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/installment/installment.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/account/components/safe/installment/installment.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal \" id=\"installmentSection\" tabindex=\"-1\" role=\"dialog\"   >\r\n  <div class=\"modal-dialog modal-\" role=\"document\">\r\n    <div class=\"modal-content w3-animate-top\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title text-center\">{{ \"installment\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table\">\r\n          <tr>\r\n            <td>\r\n              {{ \"old balance\" | trans }}\r\n            </td>\r\n            <td>\r\n              <input style=\"width: 60px\" class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"student.old_balance\" >\r\n            </td>\r\n            <td>\r\n              {{ \"current balance\" | trans }}\r\n            </td>\r\n            <td>\r\n              <input style=\"width: 60px\" class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"student.current_balance\" >\r\n            </td>\r\n            <td>\r\n              {{ \"paids\" | trans }}\r\n            </td>\r\n            <td>\r\n              <input style=\"width: 60px\" class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"student.paids\" >\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <table class=\"table table-bordered\" >\r\n          <thead>\r\n            <tr class=\"w3-dark-gray\" >\r\n              <th>{{ \"#\" | trans }}</th>\r\n              <th>{{ \"value\" | trans }}</th>\r\n              <th>{{ \"date\" | trans }}</th>\r\n              <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of studentInstallments index as i\"    >\r\n              <ng-container *ngIf='!item.deleted' >\r\n                  <td >{{ i + 1 }}</td>\r\n                  <td>\r\n                    <input class=\"form-control input-sm\" [readOnly]=\"item.paid == 1\" style=\"width: 60px\" [(ngModel)]=\"item.value\" >\r\n                  </td>\r\n                  <td>\r\n                    <input type=\"date\" class=\"form-control input-sm\" [readOnly]=\"item.paid == 1\" style=\"width: 150px\" [(ngModel)]=\"item.date\" >\r\n                  </td>\r\n                  <td>\r\n                    <button *ngIf=\"item.paid == 0\" (click)=\"removeRow(item)\" class=\"btn btn-default fa fa-trash w3-text-red\" ></button>\r\n                  </td>\r\n              </ng-container> \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <button class=\"btn btn-default fa fa-plus\" (click)=\"addRow()\" ></button>\r\n        <table class=\"table\" >\r\n          <tr>\r\n            <td>{{ \"total\" | trans }}</td>\r\n            <td></td>\r\n            <td></td>\r\n            <td>{{ total | currency: ' جنيه ' }}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"performUpdate()\" >{{ \"save\" | trans }}</button>\r\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"document.getElementById('installmentSection').style.display='none'\" >{{ \"close\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/account/components/safe/installment/installment.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/account/components/safe/installment/installment.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL2luc3RhbGxtZW50L2luc3RhbGxtZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/components/safe/installment/installment.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/account/components/safe/installment/installment.component.ts ***!
  \******************************************************************************/
/*! exports provided: InstallmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentComponent", function() { return InstallmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _services_student_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/student-account.service */ "./src/app/account/services/student-account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");






var InstallmentComponent = /** @class */ (function () {
    function InstallmentComponent(studentAccountService) {
        this.studentAccountService = studentAccountService;
        this.total = 0;
        this.studentInstallmentData = {};
    }
    /**
     * add row in the data and in installments arr
     */
    InstallmentComponent.prototype.addRow = function () {
        var item = this.createEmptyInstallmentObject(); //this.studentInstallments[this.studentInstallments.length - 1];
        this.studentInstallments.push(item);
    };
    /**
     * remove row from table and add deleted attribute
     * item.delted = 1
     * @param item
     */
    InstallmentComponent.prototype.removeRow = function (item) {
        item.deleted = 1;
    };
    /**
     * get installment type
     * @return type string
     */
    InstallmentComponent.prototype.getInstallmentType = function () {
        return this.student.old_balance > 0 ? "old" : "new";
    };
    /**
     * build request data of studentAccountService
     */
    InstallmentComponent.prototype.buildInstallmentRequestData = function () {
        this.studentInstallmentData.student_id = this.student.id;
        this.studentInstallmentData.type = this.getInstallmentType();
        this.studentInstallmentData.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].getApiToken();
        this.studentInstallmentData.data = this.studentInstallments;
    };
    /**
     * update installmenst of student
     */
    InstallmentComponent.prototype.update = function () {
        var _this = this;
        // update data of the api
        this.buildInstallmentRequestData();
        this.studentAccountService.updateStudentInstallments(this.studentInstallmentData).subscribe(function (r) {
            var data = r;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(data.message);
                _this.updateStudent();
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(data.message);
            }
        });
    };
    /**
     * validate on installments arr
     */
    InstallmentComponent.prototype.validate = function () {
        var valid = true;
        this.studentInstallments.forEach(function (element) {
            if (!element.date || element.price <= 0)
                valid = false;
        });
        return valid;
    };
    /**
     * perform update
     * validate and update
     */
    InstallmentComponent.prototype.performUpdate = function () {
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('please enter all data'));
        this.update();
    };
    /**
     * create empty object of installment to add new row
     */
    InstallmentComponent.prototype.createEmptyInstallmentObject = function () {
        return {
            date: '',
            value: 0,
            paid: 0
        };
    };
    /**
     * calculate total of installments
     */
    InstallmentComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.studentInstallments.forEach(function (element) {
            _this.total += element.value;
        });
    };
    InstallmentComponent.prototype.ngOnInit = function () {
        this.updateStudent();
    };
    InstallmentComponent.prototype.ngOnChanges = function (changes) {
        this.calculateTotal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], InstallmentComponent.prototype, "studentInstallments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InstallmentComponent.prototype, "student", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InstallmentComponent.prototype, "updateStudent", void 0);
    InstallmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-installment',
            template: __webpack_require__(/*! ./installment.component.html */ "./src/app/account/components/safe/installment/installment.component.html"),
            styles: [__webpack_require__(/*! ./installment.component.scss */ "./src/app/account/components/safe/installment/installment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_account_service__WEBPACK_IMPORTED_MODULE_3__["StudentAccountService"]])
    ], InstallmentComponent);
    return InstallmentComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/safe-index/safe-index.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/account/components/safe/safe-index/safe-index.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-10 col-md-10 col-sm-12\">\r\n    <div class=\"w3-white material-shadow safe-box\">\r\n      <div class=\"safe-box-header w3-xlarge\">\r\n        {{ \"get money from safe\" | trans }}\r\n      </div>\r\n      <br>\r\n      <div class=\"border-bottom-dashed\" ></div>\r\n      <br>\r\n\r\n      <div class=\"safe-box-body row\" >\r\n\r\n        <div class=\"col-lg-3 col-md-3 col-sm-12\" >\r\n          <img [src]=\"safeObject.image\" class=\"w3-block w3-round border-gray\" >\r\n          <br>\r\n          <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\r\n\r\n            <div \r\n            *ngIf=\"studentSearchId\"\r\n            class=\"alert alert-danger w3-block btn-margin-bottom text-center\" \r\n            [innerHTML]=\"safeObject.notes\" >\r\n\r\n            </div>\r\n            <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\" [disabled]=\"!studentSearchId\"  onclick=\"document.getElementById('studentPayments').style.display='block'\" >{{ \"student payments\" | trans }}</button>\r\n\r\n            <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\" [disabled]=\"!studentSearchId\"   onclick=\"document.getElementById('studentServices').style.display='block'\"  >{{ \"student services\" | trans }}</button>\r\n\r\n            <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\" [disabled]=\"!studentSearchId\"   onclick=\"document.getElementById('studentInstallment').style.display='block'\"  >{{ \"student installments\" | trans }}</button>\r\n\r\n            <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\" [disabled]=\"!studentSearchId\"   onclick=\"document.getElementById('installmentSection').style.display='block'\"   >{{ \"installments\" | trans }}</button>\r\n\r\n            <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\" [disabled]=\"!studentSearchId\"  (click)=\"doc.jq('#notesModal').modal('show')\" >{{ \"write note\" | trans }}</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-9 col-md-9 col-sm-12\" >\r\n\r\n          <div class=\"custom-panel w3-display-container w3-round\">\r\n            <div class=\"custom-panel-title\" >{{ \"search\" | trans }}</div>\r\n\r\n            <div class=\"custom-panel-body w3-display-container\"  >\r\n              <input class=\"w3-round-xxlarge w3-white w3-input border-gray search-input \" (keyup)=\"searchInputEvent()\" [(ngModel)]=\"searchKey\" >\r\n\r\n              <button\r\n              (click)=\"loadStudentAccountInfo(studentSearchId)\"\r\n              class=\"btn btn-default small-shadow w3-margin-left w3-margin-right w3-round-xxlarge\"  >{{ \"search\" | trans }}</button>\r\n\r\n              <div class=\"w3-display-topleft w3-padding\" *ngIf=\"studentSearchDialogLoader\" style=\"top: 12px;left:30%;z-index:10;\" >\r\n                <span class=\"fa fa-spin fa-spinner w3-text-indigo\" ></span>\r\n              </div>\r\n\r\n              <div class=\"w3-display-topright w3-white material-shadow\" *ngIf=\"studentSearchDialogShow\" style=\"top: 47px;right:11px;z-index:10;width: 60%\" >\r\n                <div class=\"w3-display-conitainer\">\r\n                  <span class=\"w3-display-topright w3-button fa fa-close\" (click)=\"studentSearchDialogShow=false\" ></span>\r\n                  <br>\r\n                  <ul class=\"w3-ul\" >\r\n                    <li *ngFor=\"let item of students\" style=\"cursor: pointer;\" class=\"w3-hover-light-gray w3-block text-right\"  >\r\n                      <div class=\"media\" (click)=\"selectStudent(item)\" >\r\n                        <div class=\"media-left\">\r\n                          <a href=\"#\">\r\n                            <img [src]=\"item.image\" style=\"width: 30px;height: 30px;\" class=\"w3-circle\" alt=\"\">\r\n                            <!--\r\n                            <span class=\"fa fa-user-circle w3-text-indigo w3-large\" ></span>\r\n                            -->\r\n                          </a>\r\n                        </div>\r\n                        <div class=\"media-body\">\r\n                          <h4 class=\"media-heading\" [innerHTML]=\"item.name\" ></h4>\r\n                          <span [innerHTML]=\"item.code\" class=\"w3-large\" ></span>\r\n                        </div>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"custom-panel w3-display-container w3-round\">\r\n            <div class=\"custom-panel-title\" >{{ \"student info\" | trans }}</div>\r\n\r\n            <div class=\"custom-panel-body\"  >\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                  <table class=\"table\" >\r\n                    <tr>\r\n                      <th>{{ \"student name\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.name\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"student code\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.code\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"national id\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.national_id\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"gpa\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.gpa\" >\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                  <table class=\"table\" >\r\n                    <tr>\r\n                      <th>{{ \"level\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly *ngIf=\"safeObject.level\" [(ngModel)]=\"safeObject.level.name\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"department\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly *ngIf=\"safeObject.division\" [(ngModel)]=\"safeObject.division.name\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"case constraint\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly *ngIf=\"safeObject.case_constraint\" [(ngModel)]=\"safeObject.case_constraint.name\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"constraint status\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly *ngIf=\"safeObject.constraint_status\" [(ngModel)]=\"safeObject.constraint_status.name\" >\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"custom-panel w3-display-container w3-round\">\r\n            <div class=\"custom-panel-title\" >{{ \"payment info\" | trans }}</div>\r\n\r\n            <div class=\"custom-panel-body\"  >\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                  <table class=\"table\" >\r\n                    <tr>\r\n                      <th>{{ \"date\" | trans }}</th>\r\n                      <td>\r\n                        <input type=\"date\" class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.date\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"required value\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.paid_value\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"value\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.paid_value\" >\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                  <table class=\"table\" >\r\n                    <tr>\r\n                      <th>{{ \"old balance\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.old_balance\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"current balance\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly  [(ngModel)]=\"safeObject.current_balance\" >\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>{{ \"paid value\" | trans }}</th>\r\n                      <td>\r\n                        <input class=\"custom-input w3-input border-bottom-dashed input-sm\" readonly [(ngModel)]=\"safeObject.paids\" >\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"custom-panel w3-display-container w3-round\">\r\n            <div class=\"custom-panel-body\"  > \r\n              <button class=\"btn btn-default small-shadow w3-margin-left\" [disabled]=\"!studentSearchId || safeObject.paid_value < 0 || !safeObject.paid_value\"   (click)=\"performPay()\" >{{ \"save & print\" | trans }}</button>\r\n              \r\n              <!--\r\n              <button class=\"btn btn-default small-shadow w3-margin-left\" [disabled]=\"!studentSearchId\"   onclick=\"document.getElementById('studentAvailableServices').style.display='block'\"  >{{ \"services\" | trans }}</button>\r\n              -->\r\n              <button class=\"btn btn-default small-shadow w3-margin-left\" routerLink=\"\" >{{ \"exit\" | trans }}</button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- student installments modal -->\r\n<app-student-installment [installments]=\"safeObject.installments? safeObject.installments : []\" [showStudentInstallment]=\"showStudentInstallment\" ></app-student-installment>\r\n\r\n<!-- student payments modal -->\r\n<app-student-payment [payments]=\"safeObject.payments? safeObject.payments : []\" ></app-student-payment>\r\n\r\n<!-- student services modal -->\r\n<app-student-service [services]=\"safeObject.services? safeObject.services : []\"  ></app-student-service>\r\n\r\n<!-- student services modal -->\r\n<app-installment [student]=\"safeObject\" [updateStudent]=\"updateStudent\" [studentInstallments]=\"safeObject.installments? safeObject.installments : []\" ></app-installment>\r\n\r\n<!-- student services modal -->\r\n<app-available-service [services]=\"availableServices\" ></app-available-service>\r\n\r\n<!-- notes modal -->\r\n<app-send-note [student]=\"safeObject\" [updateStudent]=\"updateStudent\" ></app-send-note>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/account/components/safe/safe-index/safe-index.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/account/components/safe/safe-index/safe-index.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9jb21wb25lbnRzL3NhZmUvc2FmZS1pbmRleC9FOlxccHJvamVjdHNcXHNhbXNhXFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxhY2NvdW50XFxjb21wb25lbnRzXFxzYWZlXFxzYWZlLWluZGV4XFxzYWZlLWluZGV4LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hY2NvdW50L2NvbXBvbmVudHMvc2FmZS9zYWZlLWluZGV4L3NhZmUtaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usd0JBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7Q0NWQyIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL3NhZmUtaW5kZXgvc2FmZS1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgcGFkZGluZzogMTBweFxyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZGFzaGVkIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsIHtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcclxuICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn0gXHJcbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xyXG4gIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuIl19 */"

/***/ }),

/***/ "./src/app/account/components/safe/safe-index/safe-index.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/account/components/safe/safe-index/safe-index.component.ts ***!
  \****************************************************************************/
/*! exports provided: SafeIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeIndexComponent", function() { return SafeIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_student_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/student-account.service */ "./src/app/account/services/student-account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/payment */ "./src/app/account/models/payment.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _helpers_safe_msg_builder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../helpers/safe-msg-builder */ "./src/app/account/helpers/safe-msg-builder.ts");








var SafeIndexComponent = /** @class */ (function () {
    function SafeIndexComponent(studentAcountService) {
        this.studentAcountService = studentAcountService;
        // init document 
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        this.safeObject = {};
        this.studentSearchDialogShow = false;
        this.studentSearchDialogLoader = false;
        this.showStudentInstallment = false;
        this.isWait = false;
        this.students = [];
        this.initSafeObject();
        // 
    }
    SafeIndexComponent.prototype.initSafeObject = function () {
        // set default image
        this.safeObject.image = '/assets/img/avatar.png';
        this.safeObject.notes = 'some notes here';
        this.safeObject.level = {};
        this.safeObject.case_constraint = {};
        this.safeObject.constraint_status = {};
        this.safeObject.paid_value = 0;
        this.safeObject.division = {};
    };
    SafeIndexComponent.prototype.searchInputEvent = function () {
        var _this = this;
        if (!this.searchKey)
            return;
        this.students = [];
        this.studentSearchDialogLoader = true;
        this.isWait = true;
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(function () {
            _this.searchAboutStudent();
        }, 500);
    };
    SafeIndexComponent.prototype.searchAboutStudent = function () {
        var _this = this;
        this.studentAcountService.search(this.searchKey).subscribe(function (r) {
            _this.studentSearchDialogLoader = false;
            _this.students = r;
            if (_this.students.length > 0) {
                _this.studentSearchDialogShow = true;
            }
        });
    };
    SafeIndexComponent.prototype.selectStudent = function (student) {
        this.studentSearchDialogShow = false;
        this.searchKey = student.name;
        this.studentSearchId = student.id;
        //
        this.loadStudentAccountInfo(student.id);
    };
    SafeIndexComponent.prototype.loadStudentAccountInfo = function (id) {
        var _this = this;
        if (!id)
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error('search about student first');
        this.studentAcountService.getStudentAccount(id).subscribe(function (r) {
            _this.safeObject = r;
            _this.buildSafeMsg();
            if (!_this.safeObject.image)
                _this.safeObject.image = '/assets/img/avatar.png';
            _this.loadAvailableServices();
        });
    };
    SafeIndexComponent.prototype.updateStudent = function () {
        if (this.safeObject)
            if (this.safeObject.id)
                this.loadStudentAccountInfo(this.safeObject.id);
    };
    /**
     * perform payment
     */
    SafeIndexComponent.prototype.performPay = function () {
        var _this = this;
        _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('are_you_sure'), function () {
            _this.payment = new _models_payment__WEBPACK_IMPORTED_MODULE_3__["Payment"](_this.safeObject.id, _this.safeObject.paid_value, _this.studentAcountService, function () {
                _this.updateStudent();
            });
            return _this.payment.pay();
        });
    };
    /**
     *  load available services for student
     */
    SafeIndexComponent.prototype.loadAvailableServices = function () {
        var _this = this;
        if (this.safeObject.id) {
            this.studentAcountService.getAvailabeServices(this.safeObject.id).subscribe(function (r) {
                _this.availableServices = r;
            });
        }
    };
    SafeIndexComponent.prototype.buildSafeMsg = function () {
        var builder = new _helpers_safe_msg_builder__WEBPACK_IMPORTED_MODULE_7__["SafeMsgBuilder"]();
        builder
            .setGender(this.safeObject.gender)
            .setName(this.safeObject.name)
            .setCode(this.safeObject.code)
            .setLevel(this.safeObject.level ? this.safeObject.level.name : '')
            .setDivision(this.safeObject.division ? this.safeObject.division.name : '')
            .setOldBalance(this.safeObject.old_balance)
            .setCurrentBalance(this.safeObject.current_balance)
            .setPaidValue(this.safeObject.paid_value)
            .say();
    };
    SafeIndexComponent.prototype.ngOnInit = function () {
    };
    SafeIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-safe-index',
            template: __webpack_require__(/*! ./safe-index.component.html */ "./src/app/account/components/safe/safe-index/safe-index.component.html"),
            styles: [__webpack_require__(/*! ./safe-index.component.scss */ "./src/app/account/components/safe/safe-index/safe-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_account_service__WEBPACK_IMPORTED_MODULE_1__["StudentAccountService"]])
    ], SafeIndexComponent);
    return SafeIndexComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/send-note/send-note.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/account/components/safe/send-note/send-note.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" id=\"notesModal\"  role=\"dialog\">\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\n    <div class=\"modal-content material-shadow\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">{{ \"write a notes for student\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n          <textarea class=\"form-control\" [(ngModel)]=\"newNotes\" ></textarea>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jq('#notesModal').modal('hide')\"  >{{ \"close\" | trans }}</button>\n        <button type=\"button\" class=\"btn btn-primary fa fa-send\" [disabled]=\"newNotesUpdate\" (click)=\"sendNotes()\" > {{ \"send notes\" | trans }} </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/account/components/safe/send-note/send-note.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/account/components/safe/send-note/send-note.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL3NlbmQtbm90ZS9zZW5kLW5vdGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/components/safe/send-note/send-note.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/account/components/safe/send-note/send-note.component.ts ***!
  \**************************************************************************/
/*! exports provided: SendNoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendNoteComponent", function() { return SendNoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_student_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student-account.service */ "./src/app/account/services/student-account.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");







var SendNoteComponent = /** @class */ (function () {
    function SendNoteComponent(studentAccountService) {
        this.studentAccountService = studentAccountService;
        // init document 
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        this.newNotesUpdate = false;
    }
    /**
     *  load available services for student
     */
    SendNoteComponent.prototype.sendNotes = function () {
        var _this = this;
        if (this.newNotes) {
            var data = {
                api_token: _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(),
                student_id: this.student.id,
                notes: this.newNotes
            };
            this.newNotesUpdate = true;
            this.studentAccountService.sendNotes(data).subscribe(function (r) {
                _this.newNotesUpdate = false;
                _this.newNotes = '';
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('done'));
                _this.updateStudent();
                _this.dismis();
            });
        }
        else
            _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('write some notes'));
    };
    /**
     * dismis notes Modal
     */
    SendNoteComponent.prototype.dismis = function () {
        this.doc.jquery('#notesModal').modal('hide');
    };
    SendNoteComponent.prototype.ngOnInit = function () {
    };
    SendNoteComponent.prototype.ngOnChanges = function (changes) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SendNoteComponent.prototype, "student", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SendNoteComponent.prototype, "updateStudent", void 0);
    SendNoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-note',
            template: __webpack_require__(/*! ./send-note.component.html */ "./src/app/account/components/safe/send-note/send-note.component.html"),
            styles: [__webpack_require__(/*! ./send-note.component.scss */ "./src/app/account/components/safe/send-note/send-note.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_account_service__WEBPACK_IMPORTED_MODULE_2__["StudentAccountService"]])
    ], SendNoteComponent);
    return SendNoteComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/student-installment/student-installment.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-installment/student-installment.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal \" id=\"studentInstallment\" tabindex=\"-1\" role=\"dialog\"   >\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content w3-animate-top\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title text-center\">{{ \"student installments\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <ul class=\"w3-ul\" >\r\n          <li *ngFor=\"let item of installments index as i\" class=\"row\" >\r\n            <span>{{ i + 1 }}) {{ item.date }}</span>\r\n            <input type=\"text\" style=\"border: none;outline: none;background: transparent;border-bottom: 2px dashed gray;width: 50px;padding-left: 10px;padding-right: 10px\"  readonly >\r\n            <span class=\"w3-text-red\">{{ item.value | currency }} جنيه</span>\r\n          </li>\r\n          <br>\r\n          <br>\r\n          <li class=\"row\" *ngIf=\"total > 0\" >\r\n            <span>{{ \"total\" | trans }}</span>\r\n            <input type=\"text\" style=\"border: none;outline: none;background: transparent;border-bottom: 2px dashed gray;width: 50px;padding-left: 10px;padding-right: 10px\"  readonly >\r\n            <span class=\"w3-text-red\">{{ total | currency }} جنيه</span>\r\n          </li>\r\n\r\n        </ul>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"document.getElementById('studentInstallment').style.display='none'\" >{{ \"close\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/account/components/safe/student-installment/student-installment.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-installment/student-installment.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL3N0dWRlbnQtaW5zdGFsbG1lbnQvc3R1ZGVudC1pbnN0YWxsbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/components/safe/student-installment/student-installment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-installment/student-installment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StudentInstallmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInstallmentComponent", function() { return StudentInstallmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentInstallmentComponent = /** @class */ (function () {
    function StudentInstallmentComponent() {
        this.total = 0;
    }
    StudentInstallmentComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.installments.forEach(function (element) {
            _this.total += element.value;
        });
    };
    StudentInstallmentComponent.prototype.ngOnInit = function () {
    };
    StudentInstallmentComponent.prototype.ngOnChanges = function (changes) {
        this.calculateTotal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StudentInstallmentComponent.prototype, "installments", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], StudentInstallmentComponent.prototype, "showStudentInstallment", void 0);
    StudentInstallmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-installment',
            template: __webpack_require__(/*! ./student-installment.component.html */ "./src/app/account/components/safe/student-installment/student-installment.component.html"),
            styles: [__webpack_require__(/*! ./student-installment.component.scss */ "./src/app/account/components/safe/student-installment/student-installment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentInstallmentComponent);
    return StudentInstallmentComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/student-payment/student-payment.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-payment/student-payment.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal \" id=\"studentPayments\" tabindex=\"-1\" role=\"dialog\"   >\r\n  <div class=\"modal-dialog modal-\" role=\"document\">\r\n    <div class=\"modal-content w3-animate-top\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title text-center\">{{ \"payments\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table table-bordered\" >\r\n          <thead>\r\n            <tr class=\"w3-dark-gray\" >\r\n              <th>{{ \"#\" | trans }}</th>\r\n              <th>{{ \"date\" | trans }}</th>\r\n              <th>{{ \"expenses_type\" | trans }}</th>\r\n              <th>{{ \"value\" | trans }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of payments index as i\" >\r\n              <td>{{ i + 1 }}</td>\r\n              <td>{{ item.date }}</td>\r\n              <td>{{ item.model_type | trans }}</td>\r\n              <td>{{ item.value | currency: ' EGP ' }}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>{{ \"total\" | trans }}</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>{{ total | currency: ' EGP ' }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"document.getElementById('studentPayments').style.display='none'\" >{{ \"close\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/account/components/safe/student-payment/student-payment.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-payment/student-payment.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL3N0dWRlbnQtcGF5bWVudC9zdHVkZW50LXBheW1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/components/safe/student-payment/student-payment.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-payment/student-payment.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentPaymentComponent", function() { return StudentPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentPaymentComponent = /** @class */ (function () {
    function StudentPaymentComponent() {
        this.total = 0;
    }
    StudentPaymentComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.payments.forEach(function (element) {
            _this.total += element.value;
        });
    };
    StudentPaymentComponent.prototype.ngOnInit = function () {
    };
    StudentPaymentComponent.prototype.ngOnChanges = function (changes) {
        this.calculateTotal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StudentPaymentComponent.prototype, "payments", void 0);
    StudentPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-payment',
            template: __webpack_require__(/*! ./student-payment.component.html */ "./src/app/account/components/safe/student-payment/student-payment.component.html"),
            styles: [__webpack_require__(/*! ./student-payment.component.scss */ "./src/app/account/components/safe/student-payment/student-payment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentPaymentComponent);
    return StudentPaymentComponent;
}());



/***/ }),

/***/ "./src/app/account/components/safe/student-service/student-service.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-service/student-service.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal \" id=\"studentServices\" tabindex=\"-1\" role=\"dialog\"   >\r\n  <div class=\"modal-dialog modal-\" role=\"document\">\r\n    <div class=\"modal-content w3-animate-top\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n        <h4 class=\"modal-title text-center\">{{ \"student services\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table table-bordered\" >\r\n          <thead>\r\n            <tr class=\"w3-dark-gray\" >\r\n              <th>{{ \"#\" | trans }}</th>\r\n              <th>{{ \"name\" | trans }}</th>\r\n              <th>{{ \"additional_value\" | trans }}</th>\r\n              <th>{{ \"value\" | trans }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of services index as i\" >\r\n              <td>{{ i + 1 }}</td>\r\n              <td>{{ item.name }}</td>\r\n              <td>{{ item.additional_value | currency: ' جنيه' }}</td>\r\n              <td>{{ item.valule | currency: ' جنيه' }}</td>\r\n            </tr>\r\n            <tr *ngIf=\"total > 0\" >\r\n              <td>{{ \"total\" | trans }}</td>\r\n              <td></td>\r\n              <td></td>\r\n              <td>{{ total | currency: ' EGP ' }}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"document.getElementById('studentServices').style.display='none'\" >{{ \"close\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/account/components/safe/student-service/student-service.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-service/student-service.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zYWZlL3N0dWRlbnQtc2VydmljZS9zdHVkZW50LXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/components/safe/student-service/student-service.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/account/components/safe/student-service/student-service.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StudentServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServiceComponent", function() { return StudentServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentServiceComponent = /** @class */ (function () {
    function StudentServiceComponent() {
        this.total = 0;
    }
    StudentServiceComponent.prototype.calculateTotal = function () {
        var _this = this;
        this.total = 0;
        this.services.forEach(function (element) {
            _this.total += element.value;
        });
    };
    StudentServiceComponent.prototype.ngOnInit = function () {
    };
    StudentServiceComponent.prototype.ngOnChanges = function (changes) {
        this.calculateTotal();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], StudentServiceComponent.prototype, "services", void 0);
    StudentServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-service',
            template: __webpack_require__(/*! ./student-service.component.html */ "./src/app/account/components/safe/student-service/student-service.component.html"),
            styles: [__webpack_require__(/*! ./student-service.component.scss */ "./src/app/account/components/safe/student-service/student-service.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentServiceComponent);
    return StudentServiceComponent;
}());



/***/ }),

/***/ "./src/app/account/components/services/service-create/service-create.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/account/components/services/service-create/service-create.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"createModal\"   role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"box box-primary modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" onclick=\"document.getElementById('createModal').style.display='none'\"  aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">{{ \"add service\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body\"> \r\n          <table class=\"table\" >\r\n            <tr>\r\n              <th>{{ \"name\" | trans }} *</th>\r\n              <td>\r\n                  <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" required  >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"type\" | trans }} *</th>\r\n              <td>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"item.type\" required >\r\n                  <option>-- {{ \"type\" | trans }} --</option>\r\n                  <option value=\"wz\" >{{ \"wz\" | trans }}</option>\r\n                  <option value=\"in\" >{{ \"in\" | trans }}</option>\r\n                </select>\r\n              </td>\r\n            </tr> \r\n            <tr>\r\n              <th>{{ \"value\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.value\" required  >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"except_level\" | trans }} </th>\r\n              <td>\r\n                <select \r\n                class=\"form-control input-sm\"\r\n                [(ngModel)]=\"item.except_level_id\">\r\n                  <option *ngFor=\"let item of levels\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                </select>  \r\n              </td>\r\n            </tr>  \r\n            <tr>\r\n              <th>{{ \"division\" | trans }} </th>\r\n              <td>\r\n                <select\r\n                class=\"form-control input-sm\" \r\n                [(ngModel)]=\"item.division_id\">\r\n                  <ng-container *ngFor=\"let item of divisions\">\r\n                    <option  value=\"{{ item.id }}\">{{ item.name + \"-\" + item.level }}</option>\r\n                  </ng-container> \r\n                </select>  \r\n              </td>\r\n            </tr>   \r\n            <tr>\r\n              <th>{{ \"copying\" | trans }}</th>\r\n              <td>\r\n                <input type=\"checkbox\" class=\"w3-check\" [(ngModel)]=\"item.copy\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"repeat\" | trans }}</th>\r\n              <td>\r\n                <input type=\"checkbox\" class=\"w3-check\" [(ngModel)]=\"item.repeat\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"additional_value\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.additional_value\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"installment_percent\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.installment_percent\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"from_installment\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.from_installment_id\"    >\r\n              </td>\r\n            </tr> \r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer text-right\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#createModal').modal('hide')\"  >{{ \"close\" | trans }}</button>\r\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"addService()\" >{{ \"add\" | trans }}</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal --> \r\n"

/***/ }),

/***/ "./src/app/account/components/services/service-create/service-create.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/account/components/services/service-create/service-create.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlLWNyZWF0ZS9zZXJ2aWNlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/components/services/service-create/service-create.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/services/service-create/service-create.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ServiceCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceCreateComponent", function() { return ServiceCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_index_service_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../service-index/service-index.component */ "./src/app/account/components/services/service-index/service-index.component.ts");
/* harmony import */ var _services_student_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/student-service.service */ "./src/app/account/services/student-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _services_division_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/division.service */ "./src/app/account/services/division.service.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _services_level_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/level.service */ "./src/app/account/services/level.service.ts");










var ServiceCreateComponent = /** @class */ (function () {
    function ServiceCreateComponent(studentService) {
        this.studentService = studentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_5__["AppModule"].doc;
        this.item = {};
        this.applicationSettings = _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationSettingService"];
        this.isSubmitted = false;
        this.showCreateModal = false;
        // this.initItem();
    }
    ServiceCreateComponent.prototype.initItem = function () {
        this.item = {
            name: '',
            value: 0,
            additional_value: 0,
            installment_percent: 0,
            except_level_id: null,
            division_id: null,
            copy: false,
            repeat: false,
            from_installment_id: null,
            type: null
        };
    };
    ServiceCreateComponent.prototype.validate = function () {
        var valid = true;
        if (!this.item.name ||
            !this.item.type)
            valid = false;
        return valid;
    };
    ServiceCreateComponent.prototype.ngOnInit = function () {
        this.levels = _shared_cache__WEBPACK_IMPORTED_MODULE_8__["Cache"].get(_services_level_service__WEBPACK_IMPORTED_MODULE_9__["LevelService"].LEVEL_PREFIX);
        this.divisions = _shared_cache__WEBPACK_IMPORTED_MODULE_8__["Cache"].get(_services_division_service__WEBPACK_IMPORTED_MODULE_7__["DivisionService"].DIVISION_PREFIX);
    };
    ServiceCreateComponent.prototype.addService = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error('please fill all data');
        this.isSubmitted = true;
        this.studentService.store(this.item).subscribe(function (res) {
            var r = res;
            if (r.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(r.message);
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(r.message);
            if (r.status == 1) {
                _this.initItem();
                _this.loadServices();
            }
            _this.isSubmitted = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _service_index_service_index_component__WEBPACK_IMPORTED_MODULE_1__["ServiceIndexComponent"])
    ], ServiceCreateComponent.prototype, "parent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceCreateComponent.prototype, "loadServices", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServiceCreateComponent.prototype, "showCreateModal", void 0);
    ServiceCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-service-create',
            template: __webpack_require__(/*! ./service-create.component.html */ "./src/app/account/components/services/service-create/service-create.component.html"),
            styles: [__webpack_require__(/*! ./service-create.component.scss */ "./src/app/account/components/services/service-create/service-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service_service__WEBPACK_IMPORTED_MODULE_2__["StudentServiceService"]])
    ], ServiceCreateComponent);
    return ServiceCreateComponent;
}());



/***/ }),

/***/ "./src/app/account/components/services/service-form/service-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/account/components/services/service-form/service-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" id=\"createModal\"   role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"box box-primary modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" onclick=\"document.getElementById('createModal').style.display='none'\"  aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\">{{ \"add service\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body\"> \n          <table class=\"table\" >\n            <tr>\n              <th>{{ \"name\" | trans }} *</th>\n              <td>\n                  <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" required  >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"type\" | trans }} *</th>\n              <td>\n                <select class=\"form-control input-sm\" [(ngModel)]=\"item.type\" required >\n                  <option>-- {{ \"type\" | trans }} --</option>\n                  <option value=\"wz\" >{{ \"wz\" | trans }}</option>\n                  <option value=\"in\" >{{ \"in\" | trans }}</option>\n                </select>\n              </td>\n            </tr> \n            <tr>\n              <th>{{ \"value\" | trans }}</th>\n              <td>\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.value\" required  >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"except_level\" | trans }}</th>\n              <td>\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.except_level_id\" required  >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"division\" | trans }}</th>\n              <td>\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.division_id\" required  >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"copying\" | trans }}</th>\n              <td>\n                <input type=\"checkbox\" class=\"w3-check\" [(ngModel)]=\"item.copy\"    >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"repeat\" | trans }}</th>\n              <td>\n                <input type=\"checkbox\" class=\"w3-check\" [(ngModel)]=\"item.repeat\"    >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"additional_value\" | trans }}</th>\n              <td>\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.additional_value\"    >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"installment_percent\" | trans }}</th>\n              <td>\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.installment_percent\"    >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"from_installment\" | trans }}</th>\n              <td>\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.from_installment_id\"    >\n              </td>\n            </tr> \n          </table>\n        </div>\n        <div class=\"modal-footer text-right\">\n          <button type=\"button\" class=\"btn btn-default\" onclick=\"document.getElementById('createModal').style.display='none'\" >{{ \"close\" | trans }}</button>\n          <button class=\"btn btn-primary\" (click)=\"addService()\" >{{ \"add\" | trans }}</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal --> \n"

/***/ }),

/***/ "./src/app/account/components/services/service-form/service-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/account/components/services/service-form/service-form.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlLWZvcm0vc2VydmljZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/components/services/service-form/service-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/account/components/services/service-form/service-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: ServiceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFormComponent", function() { return ServiceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServiceFormComponent = /** @class */ (function () {
    function ServiceFormComponent() {
    }
    ServiceFormComponent.prototype.ngOnInit = function () {
    };
    ServiceFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-form',
            template: __webpack_require__(/*! ./service-form.component.html */ "./src/app/account/components/services/service-form/service-form.component.html"),
            styles: [__webpack_require__(/*! ./service-form.component.scss */ "./src/app/account/components/services/service-form/service-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServiceFormComponent);
    return ServiceFormComponent;
}());



/***/ }),

/***/ "./src/app/account/components/services/service-index/service-index.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/services/service-index/service-index.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\r\n\r\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\r\n  <div class=\"box-header\">\r\n    <button class=\"btn btn-primary\" (click)=\"viewCreateModal()\" style=\"margin: 5px\"  > \r\n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\r\n    </button> \r\n    <button *ngIf=\"showRemoveButton\" (click)=\"removeServices()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \r\n      <span class=\"fa fa-trash\" ></span>\r\n    </button>\r\n  </div>\r\n  <br>\r\n  <table class=\"table table-bordered text-center default-datatable\">\r\n    <thead>\r\n      <tr class=\"w3-hover-light-gray\" >\r\n        <th></th>\r\n        <th>#</th>\r\n        <th>{{ \"name\" | trans }}</th>\r\n        <th>{{ \"value\" | trans }}</th> \r\n        <th>{{ \"store\" | trans }}</th>\r\n        <th>{{ \"type\" | trans }}</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let item of serviceList index as i\" >\r\n        <td>\r\n          <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check\" (click)=\"toggleFromTrash(item.id)\"  >\r\n        </td>\r\n        <td>{{ i + 1 }}</td>\r\n        <td>{{ item.name }}</td>\r\n        <td>{{ item.value | currency: ' EGP '  }}</td> \r\n        <td>{{ item.store? item.store.name : '' }}</td>\r\n        <td>{{ item.type }}</td>\r\n        <td> \r\n          <button class=\"btn btn-warning fa fa-edit\" (click)=\"showUpdateModal(item)\" ></button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n<app-service-create [loadServices]=\"loadServices\" [showCreateModal]=\"showCreateModal\" ></app-service-create>\r\n\r\n<!-- remove modal -->\r\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{ \"remove services\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\r\n            <br>\r\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\r\n        </div>\r\n        <div class=\"modal-footer\"> \r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n\r\n\r\n  <div class=\"modal fade\" id=\"updateModal\"   role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"box box-primary modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" onclick=\"document.getElementById('updateModal').style.display='none'\"  aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">{{ \"update service\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body\"> \r\n          <table class=\"table\" >\r\n            <tr>\r\n              <th>{{ \"name\" | trans }} *</th>\r\n              <td>\r\n                  <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"updateItem.name\" required  >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"type\" | trans }} *</th>\r\n              <td>\r\n                <select class=\"form-control input-sm\" [(ngModel)]=\"updateItem.type\" required >\r\n                  <option>-- {{ \"type\" | trans }} --</option>\r\n                  <option value=\"wz\" >{{ \"wz\" | trans }}</option>\r\n                  <option value=\"in\" >{{ \"in\" | trans }}</option>\r\n                </select>\r\n              </td>\r\n            </tr> \r\n            <tr>\r\n              <th>{{ \"value\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"updateItem.value\" required  >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"except_level\" | trans }} </th>\r\n              <td>\r\n                <select \r\n                class=\"form-control input-sm\"\r\n                [(ngModel)]=\"updateItem.except_level_id\">\r\n                  <option *ngFor=\"let item of levels\" value=\"{{ updateItem.id }}\">{{ item.name }}</option>\r\n                </select>  \r\n              </td>\r\n            </tr>  \r\n            <tr>\r\n              <th>{{ \"division\" | trans }} </th>\r\n              <td>\r\n                <select\r\n                class=\"form-control input-sm\" \r\n                [(ngModel)]=\"updateItem.division_id\">\r\n                  <ng-container *ngFor=\"let item of divisions\">\r\n                    <option  value=\"{{ item.id }}\">{{ item.name + \"-\" + item.level }}</option>\r\n                  </ng-container> \r\n                </select>  \r\n              </td>\r\n            </tr>  \r\n            <tr>\r\n              <th>{{ \"copying\" | trans }}</th>\r\n              <td>\r\n                <input type=\"checkbox\" class=\"w3-check\" [(ngModel)]=\"updateItem.copy\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"repeat\" | trans }}</th>\r\n              <td>\r\n                <input type=\"checkbox\" class=\"w3-check\" [(ngModel)]=\"updateItem.repeat\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"additional_value\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"updateItem.additional_value\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"installment_percent\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"updateItem.installment_percent\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"from_installment\" | trans }}</th>\r\n              <td>\r\n                <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"updateItem.from_installment_id\"    >\r\n              </td>\r\n            </tr> \r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer text-right\">\r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#updateModal').modal('hide')\" >{{ \"close\" | trans }}</button>\r\n          <button class=\"btn btn-primary\" (click)=\"updateService()\" >{{ \"save\" | trans }}</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal --> \r\n"

/***/ }),

/***/ "./src/app/account/components/services/service-index/service-index.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/account/components/services/service-index/service-index.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlLWluZGV4L3NlcnZpY2UtaW5kZXguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/account/components/services/service-index/service-index.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/account/components/services/service-index/service-index.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ServiceIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceIndexComponent", function() { return ServiceIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_student_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/student-service.service */ "./src/app/account/services/student-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");







var ServiceIndexComponent = /** @class */ (function () {
    function ServiceIndexComponent(studentService) {
        this.studentService = studentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        // datable trigger
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // services list
        this.serviceList = null;
        // init breadcrum
        this.breadcrumbList = [];
        // show create modal
        this.showCreateModal = false;
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new angular_hashtable__WEBPACK_IMPORTED_MODULE_5__["HashTable"]();
        this.removed = [];
        //
        this.updateItem = {
            name: '',
            value: 0,
            additional_value: 0,
            installment_percent: 0,
            except_level_id: null,
            division_id: null,
            copy: false,
            repeat: false,
            from_installment_id: null,
            type: null
        };
        this.self = this;
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'services' }
        ];
    }
    ServiceIndexComponent.prototype.initDatatableOptions = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
        };
    };
    ServiceIndexComponent.prototype.toggleFromTrash = function (id) {
        if (this.trashList.has(id)) {
            this.trashList.remove(id);
        }
        else {
            this.trashList.put(id, id);
        }
        if (this.trashList.size() > 0)
            this.showRemoveButton = true;
        else
            this.showRemoveButton = false;
    };
    ServiceIndexComponent.prototype.removeServices = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.studentService.destroy(id_1).subscribe(function () {
                _this.removed.push(id_1);
                _this.trashList.remove(id_1);
                //
                _this.removeServices();
            });
        }
        else {
            this.removed = [];
            this.showRemoveButton = false;
            this.showRemoveModal = false;
            //
            this.dtTrigger.unsubscribe();
            this.loadServices();
        }
    };
    ServiceIndexComponent.prototype.loadServices = function () {
        var _this = this;
        //alert(Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX));
        //if (Cache.has(StudentServiceService.STUDENT_SERVICE_PREFIX)) {
        //  this.serviceList = Cache.get(StudentServiceService.STUDENT_SERVICE_PREFIX);
        //} else { 
        this.studentService.get().subscribe(function (res) {
            _this.serviceList = res;
            // cache the result
            src_app_shared_cache__WEBPACK_IMPORTED_MODULE_3__["Cache"].set(_services_student_service_service__WEBPACK_IMPORTED_MODULE_1__["StudentServiceService"].STUDENT_SERVICE_PREFIX, _this.serviceList);
            setTimeout(function () {
                _this.doc.datatable();
            }, 3000);
        });
        //}
    };
    ServiceIndexComponent.prototype.viewCreateModal = function () {
        this.doc.jquery('#createModal').modal('show');
    };
    ServiceIndexComponent.prototype.showUpdateModal = function (item) {
        this.updateItem = item;
        this.doc.jquery('#updateModal').modal('show');
    };
    ServiceIndexComponent.prototype.updateService = function () {
        var data = this.updateItem;
        this.studentService.update(data).subscribe(function () {
        });
    };
    ServiceIndexComponent.prototype.ngOnInit = function () {
        this.loadServices();
        this.initDatatableOptions();
    };
    ServiceIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-service-index',
            template: __webpack_require__(/*! ./service-index.component.html */ "./src/app/account/components/services/service-index/service-index.component.html"),
            styles: [__webpack_require__(/*! ./service-index.component.scss */ "./src/app/account/components/services/service-index/service-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service_service__WEBPACK_IMPORTED_MODULE_1__["StudentServiceService"]])
    ], ServiceIndexComponent);
    return ServiceIndexComponent;
}());



/***/ }),

/***/ "./src/app/account/components/store/store-create/store-create.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/account/components/store/store-create/store-create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<!-- remove modal -->\n<div class=\"modal fade\" id=\"createModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{ \"add required document\" | trans }}</h4>\n      </div> \n      <div class=\"modal-body text-center\">\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"address\" | trans }} </th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\n            </td>\n          </tr> \n          <tr>\n            <th>{{ \"init_balance\" | trans }} *</th>\n            <td>\n              <input type=\"number\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.init_balance\" >\n            </td>\n          </tr> \n          <tr>\n            <th>{{ \"notes\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" >\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer text-center\"> \n          <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#createModal').modal('hide')\" >{{ \"close\" | trans }}</button>\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"addResource()\" >{{ \"add\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/account/components/store/store-create/store-create.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/account/components/store/store-create/store-create.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zdG9yZS9zdG9yZS1jcmVhdGUvc3RvcmUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/components/store/store-create/store-create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/account/components/store/store-create/store-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StoreCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreCreateComponent", function() { return StoreCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/store.service */ "./src/app/account/services/store.service.ts");







var StoreCreateComponent = /** @class */ (function () {
    function StoreCreateComponent(storeService) {
        this.storeService = storeService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.resource = {};
        this.isSubmitted = false;
    }
    StoreCreateComponent.prototype.ngOnInit = function () {
    };
    StoreCreateComponent.prototype.validate = function () {
        if (!this.resource.name || this.resource.init_balance < 0)
            return false;
        return true;
    };
    StoreCreateComponent.prototype.addResource = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.resource.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        this.storeService.store(this.resource).subscribe(function (res) {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StoreCreateComponent.prototype, "updateResources", void 0);
    StoreCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-create',
            template: __webpack_require__(/*! ./store-create.component.html */ "./src/app/account/components/store/store-create/store-create.component.html"),
            styles: [__webpack_require__(/*! ./store-create.component.scss */ "./src/app/account/components/store/store-create/store-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]])
    ], StoreCreateComponent);
    return StoreCreateComponent;
}());



/***/ }),

/***/ "./src/app/account/components/store/store-index/store-index.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/account/components/store/store-index/store-index.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\n  <div class=\"box-header\">\n    <button class=\"btn btn-primary\" (click)=\"doc.jquery('#createModal').modal('show');\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button> \n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-trash\" ></span>\n    </button>\n  </div>\n  <br>\n  <div style=\"padding: 5px;\">\n      <table class=\"table table-bordered text-center default-datatable\" >\n          <thead>\n            <tr class=\"w3-hover-light-gray\" >\n              <!--\n              <th></th>\n              -->\n              <th>#</th>\n              <th>{{ \"name\" | trans }}</th>\n              <th>{{ \"address\" | trans }}</th> \n              <th>{{ \"init_balance\" | trans }}</th> \n              <th>{{ \"balance\" | trans }}</th>  \n              <th>{{ \"notes\" | trans }}</th> \n              <th></th>\n            </tr>\n          </thead>\n      \n          <tbody>\n            <tr *ngFor=\"let item of resources index as i\" >\n              <!--\n              <td>\n                <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check\" (click)=\"toggleFromTrash(item.id)\"  >\n              </td>\n              -->\n              <td>{{ i + 1 }}</td>\n              <td>{{ item.name }}</td> \n              <td>{{ item.address }}</td> \n              <td>{{ item.init_balance | currency:' EGP '}}</td>\n              <td>{{ item.balance | currency:' EGP '}}</td>\n              <td>{{ item.notes }}</td>\n              <td> \n                <button class=\"btn btn-warning fa fa-edit\" (click)=\"setUpdateResource(item)\" ></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n  </div>\n\n</div>\n\n \n<!-- remove modal -->\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"remove required documents\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\n            <br>\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\n        </div>\n        <div class=\"modal-footer\"> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n \n\n  <app-store-update [updateResources]=\"updateResources\" [resource]=\"updateItem\" ></app-store-update>\n\n  <app-store-create [updateResources]=\"updateResources\" ></app-store-create>"

/***/ }),

/***/ "./src/app/account/components/store/store-index/store-index.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/account/components/store/store-index/store-index.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zdG9yZS9zdG9yZS1pbmRleC9zdG9yZS1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/account/components/store/store-index/store-index.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/account/components/store/store-index/store-index.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StoreIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreIndexComponent", function() { return StoreIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/store.service */ "./src/app/account/services/store.service.ts");







var StoreIndexComponent = /** @class */ (function () {
    function StoreIndexComponent(storeService, router) {
        var _this = this;
        this.storeService = storeService;
        this.router = router;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"].doc;
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
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'store' }
        ];
        this.updateResources = function () {
            _shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].refreshComponent(_this.router, '/account/settings/store');
        };
    }
    StoreIndexComponent.prototype.toggleFromTrash = function (id) {
        if (this.trashList.has(id)) {
            this.trashList.remove(id);
        }
        else {
            this.trashList.put(id, id);
        }
        if (this.trashList.size() > 0)
            this.showRemoveButton = true;
        else
            this.showRemoveButton = false;
    };
    StoreIndexComponent.prototype.removeResources = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.storeService.destroy(id_1).subscribe(function () {
                _this.removed.push(id_1);
                _this.trashList.remove(id_1);
                //
                _this.removeResources();
            });
        }
        else {
            this.removed = [];
            this.showRemoveButton = false;
            this.showRemoveModal = false;
            // 
            this.updateResources();
        }
    };
    StoreIndexComponent.prototype.loadResources = function () {
        var _this = this;
        this.storeService.get().subscribe(function (res) {
            _this.resources = res;
            // 
            setTimeout(function () {
                _this.doc.datatable();
            }, 2000);
        });
    };
    StoreIndexComponent.prototype.setUpdateResource = function (item) {
        this.updateItem = item;
        this.doc.jquery('#updateModal').modal('show');
    };
    StoreIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
    };
    StoreIndexComponent.prototype.showUpdateModal = function (item) {
        this.updateItem = item;
    };
    StoreIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-index',
            template: __webpack_require__(/*! ./store-index.component.html */ "./src/app/account/components/store/store-index/store-index.component.html"),
            styles: [__webpack_require__(/*! ./store-index.component.scss */ "./src/app/account/components/store/store-index/store-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], StoreIndexComponent);
    return StoreIndexComponent;
}());



/***/ }),

/***/ "./src/app/account/components/store/store-update/store-update.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/account/components/store/store-update/store-update.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<!-- remove modal -->\n<div class=\"modal fade\" id=\"updateModal\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"add required document\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n          <table class=\"table\" >\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"address\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.address\" >\n            </td>\n          </tr> \n          <tr>\n            <th>{{ \"notes\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" >\n            </td>\n          </tr>\n          </table>\n        </div>\n        <div class=\"modal-footer text-center\"> \n            <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#updateModal').modal('hide')\" >{{ \"close\" | trans }}</button>\n            <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"updateResource()\" >{{ \"save\" | trans }}</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/account/components/store/store-update/store-update.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/account/components/store/store-update/store-update.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvY29tcG9uZW50cy9zdG9yZS9zdG9yZS11cGRhdGUvc3RvcmUtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/account/components/store/store-update/store-update.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/account/components/store/store-update/store-update.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StoreUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreUpdateComponent", function() { return StoreUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/store.service */ "./src/app/account/services/store.service.ts");







var StoreUpdateComponent = /** @class */ (function () {
    function StoreUpdateComponent(storeService) {
        this.storeService = storeService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.isSubmitted = false;
        this.resource = {};
    }
    StoreUpdateComponent.prototype.ngOnInit = function () {
    };
    StoreUpdateComponent.prototype.validate = function () {
        if (!this.resource.name || !this.resource.type)
            return false;
        return true;
    };
    StoreUpdateComponent.prototype.updateResource = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.resource.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken();
        this.storeService.update(this.resource).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                //this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StoreUpdateComponent.prototype, "updateResources", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StoreUpdateComponent.prototype, "resource", void 0);
    StoreUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store-update',
            template: __webpack_require__(/*! ./store-update.component.html */ "./src/app/account/components/store/store-update/store-update.component.html"),
            styles: [__webpack_require__(/*! ./store-update.component.scss */ "./src/app/account/components/store/store-update/store-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_6__["StoreService"]])
    ], StoreUpdateComponent);
    return StoreUpdateComponent;
}());



/***/ }),

/***/ "./src/app/account/helpers/safe-msg-builder.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/helpers/safe-msg-builder.ts ***!
  \*****************************************************/
/*! exports provided: SafeMsgBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeMsgBuilder", function() { return SafeMsgBuilder; });
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.module */ "./src/app/app.module.ts");

var SafeMsgBuilder = /** @class */ (function () {
    function SafeMsgBuilder() {
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"].doc;
        this.init();
    }
    SafeMsgBuilder.prototype.init = function () {
        this.msg = "" + this.type + " ";
    };
    SafeMsgBuilder.prototype.setGender = function (gender) {
        this.type = gender == 'female' ? 'الطالبة' : 'الطالب';
        this.init();
        return this;
    };
    SafeMsgBuilder.prototype.setName = function (name) {
        this.msg += name;
        return this;
    };
    SafeMsgBuilder.prototype.setCode = function (code) {
        this.msg += " ";
        this.msg += "كود " + this.type + " " + code;
        return this;
    };
    SafeMsgBuilder.prototype.setLevel = function (level) {
        this.msg += " ";
        this.msg += "مستوى " + this.type + "  " + level;
        return this;
    };
    SafeMsgBuilder.prototype.setDivision = function (division) {
        this.msg += " ";
        this.msg += " والشعبة " + division;
        return this;
    };
    SafeMsgBuilder.prototype.setOldBalance = function (value) {
        this.msg += " ";
        this.msg += " " + this.type + " مدين برسوم سابقة بقيمة " + value + " جنيه ";
        return this;
    };
    SafeMsgBuilder.prototype.setCurrentBalance = function (value) {
        this.msg += " ";
        this.msg += " ورسوم حالية " + value + " جنيه ";
        return this;
    };
    SafeMsgBuilder.prototype.setPaidValue = function (value) {
        this.msg += " ";
        this.msg += "  المبلغ المطلوب دفعه " + value + " جنيه ";
        return this;
    };
    SafeMsgBuilder.prototype.say = function () {
        this.doc.say(this.msg);
    };
    return SafeMsgBuilder;
}());



/***/ }),

/***/ "./src/app/account/models/payment.ts":
/*!*******************************************!*\
  !*** ./src/app/account/models/payment.ts ***!
  \*******************************************/
/*! exports provided: Payment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Payment", function() { return Payment; });
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");


var Payment = /** @class */ (function () {
    function Payment(studentId, value, studentAcountService, action) {
        this.studentId = studentId;
        this.value = value;
        this.studentAcountService = studentAcountService;
        this.action = action;
    }
    /**
     * validate on the data
     */
    Payment.prototype.validate = function () {
        var valid = true;
        if (this.studentId <= 0 || this.value <= 0) {
            valid = false;
        }
        return valid;
    };
    /**
     * permform payment of the student
     */
    Payment.prototype.pay = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_0__["Message"].error('select a student or not value to pay');
        var data = {
            api_token: _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(),
            student_id: this.studentId,
            value: this.value
        };
        this.studentAcountService.studentPay(data).subscribe(function (r) {
            var response = r;
            if (response.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_0__["Message"].success(response.message);
                _this.action();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_0__["Message"].error(response.message);
        });
    };
    return Payment;
}());



/***/ }),

/***/ "./src/app/account/services/academic-year.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/account/services/academic-year.service.ts ***!
  \***********************************************************/
/*! exports provided: AcademicYearService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicYearService", function() { return AcademicYearService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AcademicYearService = /** @class */ (function () {
    function AcademicYearService(http) {
        this.http = http;
    }
    /**
     * get academic_year_expenses from api
     *
     */
    AcademicYearService.prototype.get = function (data) {
        return this.http.get('account/academic_year_expenses?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + "&level_id=" + data.level_id);
    };
    /**
     * store new service
     */
    AcademicYearService.prototype.store = function (data) {
        // remove old cache
        return this.http.post('account/academic_year_expenses/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    AcademicYearService.prototype.update = function (data) {
        // remove old cache
        data['api_token'] = _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken();
        return this.http.post('account/academic_year_expenses/update', data);
    };
    /**
     * remove service
     */
    AcademicYearService.prototype.destroy = function (id) {
        // remove old cache
        return this.http.post('account/academic_year_expenses/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), null);
    };
    AcademicYearService.STUDENT_SERVICE_PREFIX = 'student_services';
    AcademicYearService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AcademicYearService);
    return AcademicYearService;
}());



/***/ }),

/***/ "./src/app/account/services/store.service.ts":
/*!***************************************************!*\
  !*** ./src/app/account/services/store.service.ts ***!
  \***************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    StoreService.prototype.get = function () {
        return this.http.get('account/stores?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    StoreService.prototype.store = function (data) {
        return this.http.post('account/stores/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    StoreService.prototype.update = function (data) {
        return this.http.post('account/stores/update/' + data.id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    StoreService.prototype.destroy = function (id) {
        return this.http.post('account/stores/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    StoreService.STORE_SERVICE_PREFIX = 'store';
    StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "./src/app/account/services/student-account.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/services/student-account.service.ts ***!
  \*************************************************************/
/*! exports provided: StudentAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAccountService", function() { return StudentAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StudentAccountService = /** @class */ (function () {
    function StudentAccountService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    StudentAccountService.prototype.search = function (key) {
        return this.http.get('account/search_student?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + "&key=" + key);
    };
    /**
     * get services from api
     *
     */
    StudentAccountService.prototype.getStudentAccount = function (studentId) {
        return this.http.get('account/get_student_account?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + "&student_id=" + studentId);
    };
    /**
     * update student installments
     *
     */
    StudentAccountService.prototype.updateStudentInstallments = function (data) {
        return this.http.post('account/installment/update', data);
    };
    /**
     * update student installments
     *
     */
    StudentAccountService.prototype.studentPay = function (data) {
        return this.http.post('account/pay', data);
    };
    /**
     * update student installments
     *
     */
    StudentAccountService.prototype.sendNotes = function (data) {
        return this.http.post('account/write_notes', data);
    };
    /**
     * get available services for student
     *
     */
    StudentAccountService.prototype.getAvailabeServices = function (studentId) {
        return this.http.get('account/get_available_services?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken() + '&student_id=' + studentId);
    };
    StudentAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StudentAccountService);
    return StudentAccountService;
}());



/***/ }),

/***/ "./src/app/account/services/student-service.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/account/services/student-service.service.ts ***!
  \*************************************************************/
/*! exports provided: StudentServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentServiceService", function() { return StudentServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");





var StudentServiceService = /** @class */ (function () {
    function StudentServiceService(http) {
        this.http = http;
    }
    StudentServiceService_1 = StudentServiceService;
    /**
     * get services from api
     *
     */
    StudentServiceService.prototype.get = function () {
        return this.http.get('account/services?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    StudentServiceService.prototype.store = function (data) {
        // remove old cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].remove(StudentServiceService_1.STUDENT_SERVICE_PREFIX);
        return this.http.post('account/services/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    StudentServiceService.prototype.update = function (data) {
        // remove old cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].remove(StudentServiceService_1.STUDENT_SERVICE_PREFIX);
        return this.http.post('account/services/update/' + data.id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    StudentServiceService.prototype.destroy = function (id) {
        // remove old cache
        src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].remove(StudentServiceService_1.STUDENT_SERVICE_PREFIX);
        return this.http.post('account/services/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_1__["Auth"].getApiToken(), null);
    };
    var StudentServiceService_1;
    StudentServiceService.STUDENT_SERVICE_PREFIX = 'student_services';
    StudentServiceService = StudentServiceService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentServiceService);
    return StudentServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map