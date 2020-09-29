(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminision-adminision-module"],{

/***/ "./src/app/adminision/adminision-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/adminision/adminision-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdminisionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminisionRoutingModule", function() { return AdminisionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminision_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminision.component */ "./src/app/adminision/adminision.component.ts");
/* harmony import */ var _components_required_document_required_document_index_required_document_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/required_document/required-document-index/required-document-index.component */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.ts");
/* harmony import */ var _components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/application/application-create/application-create.component */ "./src/app/adminision/components/application/application-create/application-create.component.ts");
/* harmony import */ var _components_application_application_index_application_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/application/application-index/application-index.component */ "./src/app/adminision/components/application/application-index/application-index.component.ts");
/* harmony import */ var _components_application_application_show_application_show_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/application/application-show/application-show.component */ "./src/app/adminision/components/application/application-show/application-show.component.ts");
/* harmony import */ var _components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/application-required/application-required.component */ "./src/app/adminision/components/application-required/application-required.component.ts");









var routes = [
    {
        path: 'application',
        component: _components_application_application_index_application_index_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationIndexComponent"]
    },
    {
        path: 'application/:id',
        component: _components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationCreateComponent"]
    },
    {
        path: 'application/show/:id',
        component: _components_application_application_show_application_show_component__WEBPACK_IMPORTED_MODULE_7__["ApplicationShowComponent"]
    },
    {
        path: 'application/create',
        component: _components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationCreateComponent"]
    },
    {
        path: "settings",
        component: _adminision_component__WEBPACK_IMPORTED_MODULE_3__["AdminisionComponent"],
        children: [
            {
                path: 'required_documents',
                component: _components_required_document_required_document_index_required_document_index_component__WEBPACK_IMPORTED_MODULE_4__["RequiredDocumentIndexComponent"]
            },
            {
                path: 'application_required',
                component: _components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_8__["ApplicationRequiredComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AdminisionRoutingModule = /** @class */ (function () {
    function AdminisionRoutingModule() {
    }
    AdminisionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminisionRoutingModule);
    return AdminisionRoutingModule;
}());



/***/ }),

/***/ "./src/app/adminision/adminision.component.html":
/*!******************************************************!*\
  !*** ./src/app/adminision/adminision.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <!-- navbar list -->\n    <div class=\"box box-primary material-shadow\">\n      <div class=\"box-body box-profile\">\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/application.gif\" alt=\"User profile picture\">\n\n        <h3 class=\"profile-username text-center\">{{ \"adminision_settings\" | trans }}</h3>\n \n\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/adminision/settings/required_documents' >\n                <b>{{ \"required_documents\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-newspaper-o\" ></i> \n                </a>\n            </a>\n          </li> \n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/adminision/settings/application_required' >\n                <b>{{ \"application_required\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-check-square\" ></i> \n                </a>\n            </a>\n          </li> \n        </ul> \n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n \n  </div>\n  <!-- /.col -->\n  <div class=\"col-md-9\"> \n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>"

/***/ }),

/***/ "./src/app/adminision/adminision.component.scss":
/*!******************************************************!*\
  !*** ./src/app/adminision/adminision.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vYWRtaW5pc2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/adminision/adminision.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminision/adminision.component.ts ***!
  \****************************************************/
/*! exports provided: AdminisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminisionComponent", function() { return AdminisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminisionComponent = /** @class */ (function () {
    function AdminisionComponent() {
    }
    AdminisionComponent.prototype.ngOnInit = function () {
    };
    AdminisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminision',
            template: __webpack_require__(/*! ./adminision.component.html */ "./src/app/adminision/adminision.component.html"),
            styles: [__webpack_require__(/*! ./adminision.component.scss */ "./src/app/adminision/adminision.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminisionComponent);
    return AdminisionComponent;
}());



/***/ }),

/***/ "./src/app/adminision/adminision.module.ts":
/*!*************************************************!*\
  !*** ./src/app/adminision/adminision.module.ts ***!
  \*************************************************/
/*! exports provided: AdminisionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminisionModule", function() { return AdminisionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _components_required_document_required_document_index_required_document_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/required_document/required-document-index/required-document-index.component */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.ts");
/* harmony import */ var _components_required_document_required_document_create_required_document_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/required_document/required-document-create/required-document-create.component */ "./src/app/adminision/components/required_document/required-document-create/required-document-create.component.ts");
/* harmony import */ var _components_required_document_required_document_update_required_document_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/required_document/required-document-update/required-document-update.component */ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.ts");
/* harmony import */ var _adminision_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adminision-routing.module */ "./src/app/adminision/adminision-routing.module.ts");
/* harmony import */ var _adminision_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adminision.component */ "./src/app/adminision/adminision.component.ts");
/* harmony import */ var _components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/application/application-create/application-create.component */ "./src/app/adminision/components/application/application-create/application-create.component.ts");
/* harmony import */ var _components_application_application_index_application_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/application/application-index/application-index.component */ "./src/app/adminision/components/application/application-index/application-index.component.ts");
/* harmony import */ var _components_application_application_show_application_show_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/application/application-show/application-show.component */ "./src/app/adminision/components/application/application-show/application-show.component.ts");
/* harmony import */ var _components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/application-required/application-required.component */ "./src/app/adminision/components/application-required/application-required.component.ts");
/* harmony import */ var _services_application_setting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");















var AdminisionModule = /** @class */ (function () {
    function AdminisionModule(applicationSettingService) {
        this.applicationSettingService = applicationSettingService;
        this.applicationSettingService.loadSettings();
    }
    AdminisionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _adminision_component__WEBPACK_IMPORTED_MODULE_8__["AdminisionComponent"],
                _components_required_document_required_document_index_required_document_index_component__WEBPACK_IMPORTED_MODULE_4__["RequiredDocumentIndexComponent"],
                _components_required_document_required_document_create_required_document_create_component__WEBPACK_IMPORTED_MODULE_5__["RequiredDocumentCreateComponent"],
                _components_required_document_required_document_update_required_document_update_component__WEBPACK_IMPORTED_MODULE_6__["RequiredDocumentUpdateComponent"], _components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationCreateComponent"], _components_application_application_index_application_index_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationIndexComponent"],
                _components_application_application_show_application_show_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationShowComponent"], _components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationRequiredComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _adminision_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminisionRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_setting_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationSettingService"]])
    ], AdminisionModule);
    return AdminisionModule;
}());



/***/ }),

/***/ "./src/app/adminision/components/application-required/application-required.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/adminision/components/application-required/application-required.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\n  <div class=\"box-header\"> \n  </div>\n  <br>\n  <div style=\"padding: 5px;\">\n    <ul class=\"w3-ul\">\n      <li>\n          <input type=\"checkbox\" style=\"margin: 0px!important\" (click)=\"check(true)\"  class=\"w3-check\"   > \n          <span  style=\"padding: 5px;\" class=\"w3-large\" >\n              {{ \"check all\" | trans }}\n          </span>\n      </li>\n      <li>\n          <input type=\"checkbox\" style=\"margin: 0px!important\" (click)=\"check(false)\"  class=\"w3-check\"   > \n          <span  style=\"padding: 5px;\" class=\"w3-large\" >\n              {{ \"decheck all\" | trans }}\n          </span>\n      </li>\n      <li *ngFor=\"let item of resources index as i\" class=\"w3-display-container\" >\n          <input type=\"checkbox\" style=\"margin: 0px!important\" [(ngModel)]=\"item.required\" class=\"w3-check check-item\"   >\n        \n          <span  style=\"padding: 5px;\" class=\"w3-large\" >\n              {{ item.display_name }}\n          </span>\n         \n      </li>\n    </ul> \n        <br>\n        <div> \n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"updateResources()\" >{{ \"save changes\" | trans }}</button>\n        </div>\n  </div>\n\n</div>\n\n  "

/***/ }),

/***/ "./src/app/adminision/components/application-required/application-required.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/adminision/components/application-required/application-required.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi1yZXF1aXJlZC9hcHBsaWNhdGlvbi1yZXF1aXJlZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/adminision/components/application-required/application-required.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/adminision/components/application-required/application-required.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ApplicationRequiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequiredComponent", function() { return ApplicationRequiredComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_application_required_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/application-required.service */ "./src/app/adminision/services/application-required.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/message */ "./src/app/shared/message.ts");





var ApplicationRequiredComponent = /** @class */ (function () {
    function ApplicationRequiredComponent(applicationRequiredService) {
        this.applicationRequiredService = applicationRequiredService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.resources = {};
        this.isSubmitted = false;
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'application_required' }
        ];
    }
    ApplicationRequiredComponent.prototype.ngOnInit = function () {
        this.loadResources();
    };
    ApplicationRequiredComponent.prototype.loadResources = function () {
        var _this = this;
        this.applicationRequiredService.get().subscribe(function (res) {
            _this.resources = res;
        });
    };
    ApplicationRequiredComponent.prototype.updateResources = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = {
            data: this.resources
        };
        this.applicationRequiredService.update(data).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(data.message);
                _this.loadResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    ApplicationRequiredComponent.prototype.check = function (bool) {
        this.resources.forEach(function (element) {
            element.required = bool;
        });
    };
    ApplicationRequiredComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-required',
            template: __webpack_require__(/*! ./application-required.component.html */ "./src/app/adminision/components/application-required/application-required.component.html"),
            styles: [__webpack_require__(/*! ./application-required.component.scss */ "./src/app/adminision/components/application-required/application-required.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_required_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationRequiredService"]])
    ], ApplicationRequiredComponent);
    return ApplicationRequiredComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/application/application-create/application-create.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-create/application-create.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\n      <div class=\"w3-white material-shadow safe-box\">\n        <div class=\"safe-box-header w3-xlarge\">\n          {{ \"create application\" | trans }}\n        </div>\n        <br>\n        <div class=\"border-bottom-dashed\" ></div>\n        <br>\n  \n        <div class=\"safe-box-body row\" >\n  \n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\n            <br>\n            <input \n                type=\"file\"\n                (change)=\"viewPersonalImage($event)\" \n                accept=\"image/x-png,image/gif,image/jpeg\"\n                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"  >\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\n  \n              <div   \n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\" \n               >\n                {{ currentError }}\n              </div>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button> \n              \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button> \n             \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button> \n               \n            </div>\n          </div>\n  \n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\n  \n             \n  \n            <!--\n\n        => student basic info\n        name\t                  email\t\n        academic_years_id\t      grade\t\n        registeration_date\t    phone_1\n        registration_status_id\tregistration_method_id\n        qualification_date\t    qualification_set_number\t\n        qualification_types_id\tqualification_id\t\n        level_id\t              case_constraint_id\n        national_id\t            password  \n        acceptance_code\t        acceptance_date\t\n        status\t                writen_by\t\n        \n      \n        => additional info\n        \t\t \n        nationality_id\t        gender\t\n        language_1_id\t          language_2_id\t\n        city_id\t                government_id\t \n        country_id\t            religion \n        address\t                birth_address\t\n        national_id_date\t      national_id_place\t \n\n        => military info\n        military_status_id\t    military_area_id \n        triple_number\n        \n        => parent info\n        parent_name\t            parent_national_id\t\n        parent_job_id\t          parent_address\t\n        parent_phone\t          relative_relation_id\n        \n        => personal image\n        personal_photo\t\n\n        => required document\n        \n            -->\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\n  \n              <div class=\"custom-panel-body\"  >\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                      <tr>\n                        <th>{{ \"student name\" | trans }} *</th>\n                        <td>\n                          <input \n                          class=\"custom-input form-control input-sm w3-input input-sm\" \n                          [ngClass]=\"{'border-bottom-dashed': application.name, 'border-bottom-red': !application.name}\"\n                          [(ngModel)]=\"application.name\" >\n                        </td>\n                      </tr> \n                      <tr>\n                        <th>{{ \"academic_years\" | trans }} *</th>\n                        <td>\n                          <select\n                          (change)=\"watchLevel()\"\n                          class=\"custom-input form-control input-sm w3-input input-sm\" \n                          [ngClass]=\"{'border-bottom-dashed': application.academic_years_id, 'border-bottom-red': !application.academic_years_id}\"\n                          [(ngModel)]=\"application.academic_years_id\">\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"qualification\" | trans }} *</th>\n                        <td>\n                          <select\n                          (change)=\"watchLevel()\"\n                          class=\"custom-input form-control input-sm w3-input input-sm\" \n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_id>0, 'border-bottom-red': !application.qualification_id}\"\n                          [(ngModel)]=\"application.qualification_id\">\n                            <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"qualification_types\" | trans }} *</th>\n                        <td>\n                          <select\n                          (change)=\"watchLevel()\"\n                          class=\"custom-input form-control input-sm w3-input input-sm\" \n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_types_id>0, 'border-bottom-red': !application.qualification_types_id}\"\n                          [(ngModel)]=\"application.qualification_types_id\">\n                            <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\n                                <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </ng-container>\n                            \n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"grade\" | trans }} *</th>\n                          <td>\n                            <input \n                            (change)=\"watchLevel()\"\n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input input-sm\" \n                            [ngClass]=\"{'border-bottom-dashed': application.grade, 'border-bottom-red': !application.grade}\"\n                            [(ngModel)]=\"application.grade\" >\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\n                              {{ gradeError }}\n                            </p>\n                          </td>\n                      </tr> \n                      <tr>\n                        <th>{{ \"level\" | trans }}</th>\n                        <td>\n                          <input \n                          type=\"text\"\n                          readonly\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.level_name\" >\n                          <input \n                          type=\"hidden\"  \n                          [(ngModel)]=\"application.level_id\" >\n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_date\" | trans }} *</th>\n                          <td>\n                            <input \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input  input-sm\" \n                            [ngClass]=\"{'border-bottom-dashed': application.qualification_date>0, 'border-bottom-red': !application.qualification_date}\"\n                            [(ngModel)]=\"application.qualification_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_status\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input  input-sm\" \n                          (change)=\"validateOnRegisterationStatusDocument()\"\n                          [ngClass]=\"{'border-bottom-dashed': application.registration_status_id>0, 'border-bottom-red': !application.registration_status_id}\"\n                          [(ngModel)]=\"application.registration_status_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"national_id\" | trans }} *</th>\n                          <td>\n                            <input \n                            type=\"text\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [ngClass]=\"{'border-bottom-dashed': application.national_id>0, 'border-bottom-red': !application.national_id}\"\n                            [(ngModel)]=\"application.national_id\" >\n                          </td>\n                      </tr> \n                      <!--\n                      <tr>\n                        <th>{{ \"case_constraint\" | trans }}</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [ngClass]=\"{'border-bottom-dashed': application.case_constraint_id>0, 'border-bottom-red': !application.case_constraint_id}\"\n                          [(ngModel)]=\"application.case_constraint_id\">\n                            <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      -->\n                    </table>\n                  </div>  \n\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block w3-block\" >\n                        <tr>\n                            <th>{{ \"registeration_date\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.registeration_date\" >\n                            </td>\n                        </tr>\n                      <tr>\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\n                          <td>\n                            <input \n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_set_number\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_method\" | trans }}</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.registration_method_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr> \n                          <th>{{ \"email\" | trans }}</th>\n                          <td>\n                            <input \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.email\" >\n                          </td>\n                      </tr>\n                        <tr>\n                            <th>{{ \"coordination_password\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"password\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.password\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_code\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.acceptance_code\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_date\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.acceptance_date\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"phone_1\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.phone_1\" >\n                            </td>\n                        </tr>\n\n                      \n                    </table>\n                  </div>\n                </div>\n              </div>\n  \n            </div>\n \n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"military_status\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.military_status_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                          <tr>\n                            <th>{{ \"military_area\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.military_area_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" > \n                          <tr>\n                            <th>{{ \"triple_number\" | trans }}</th>\n                            <td>\n                              <input \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.triple_number\" >\n                            </td>\n                          </tr> \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n \n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                            <tr>\n                              <th>{{ \"parent_name\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_name\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_national_id\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_national_id\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_address\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_address\" >\n                              </td>\n                            </tr>  \n                        </table>\n                      </div>  \n    \n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block w3-block\" > \n                            <tr>\n                              <th>{{ \"parent_phone\" | trans }}</th>\n                              <td>\n                                <input \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_phone\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_job\" | trans }}</th>\n                              <td>\n                                <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_job_id\">\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>   \n                            <tr>\n                              <th>{{ \"relative_relation\" | trans }}</th>\n                              <td>\n                                <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.relative_relation_id\">\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>  \n                        </table>\n                      </div>\n                    </div>\n                  </div>\n      \n                </div>\n\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"nationality\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.nationality_id\">\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"gender\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.gender\">\n                                <option value=\"male\">{{ \"male\" | trans }}</option>\n                                <option value=\"female\">{{ \"female\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_1\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.language_1_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_2\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.language_2_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"country\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.country_id\">\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"government\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.government_id\">\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container> \n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" >\n                          <tr>\n                            <th>{{ \"city\" | trans }}</th>\n                            <td>\n                              <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.city_id\">\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </ng-container> \n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"religion\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.religion\">\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"address\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"birth_address\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.birth_address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_date\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id_date\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_place\" | trans }}</th>\n                            <td>\n                              <input \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id_place\" >\n                            </td>\n                          </tr> \n                        \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n           \n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                          \n\n                        <table class=\"table w3-block\" >\n                           <ng-container *ngFor=\"let item of applicationSettings.REQUIRED_DOCUMENTS\"  >\n                              <tr \n                              *ngIf=\"requiredDocumentList.get(item.id) > 0\"\n                              [ngClass]=\"{'w3-text-green': application['required_document_' + item.id]}\" \n                              >\n                                <th>\n                                  <i *ngIf=\"application['required_document_' + item.id]\" \n                                  class=\"fa fa-check-circle w3-text-green\"></i>\n\n                                  <i *ngIf=\"requiredDocumentList.get(item.id) == 1 && !application['required_document_' + item.id]\" \n                                  class=\"fa fa-exclamation-circle w3-text-red\"></i>\n                                  {{ item.name  }}\n                                </th>\n                                <th>{{ item.type | trans }}</th>\n                                <td>\n                                    <input \n                                    type=\"file\"\n                                    (change)=\"setFile($event, 'required_document_' + item.id, item.id)\"\n                                    class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"   >\n                                  </td>\n                              </tr>  \n                           </ng-container>\n                           \n                            \n                        </table>\n                      </div>   \n                    </div>\n                  </div>\n      \n                </div>\n   \n              <div class=\"custom-panel w3-display-container w3-round\">\n                  <div class=\"custom-panel-body\"  > \n                    <button class=\"btn btn-default small-shadow w3-margin-left\" [disabled]=\"isSubmitted\"  (click)=\"sendApplication()\" >{{ \"send application\" | trans }}</button>\n                    \n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\" routerLink=\"/adminision/application\" >{{ \"exit\" | trans }}</a>\n                  </div>\n      \n                </div>\n                  \n          </div>\n  \n  \n  \n        </div>\n      </div>\n    </div>\n  </div>\n   \n  \n  \n  "

/***/ }),

/***/ "./src/app/adminision/components/application/application-create/application-create.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-create/application-create.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWNyZWF0ZS9FOlxccHJvamVjdHNcXHNhbXNhXFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxhZG1pbmlzaW9uXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvblxcYXBwbGljYXRpb24tY3JlYXRlXFxhcHBsaWNhdGlvbi1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1jcmVhdGUvYXBwbGljYXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFDRixFQUFBOztBQUVBO0VBQ0UseUNBQXdDLEVBQUE7O0FBRzFDO0VBQ0Usd0NBQXVDLEVBQUE7O0FBR3pDO0VBQ0UsdUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsdUNBQXNDO0VBQ3RDLDhCQUE2QixFQUFBOztBQUkvQjtFQUNFLDZCQUE0QjtFQUM1QixzQkFBcUI7RUFDckIscUJBQW9CO0VBQ3BCLHNCQUFxQjtFQUNyQixrQ0FBaUM7RUFDakMsNkJBQTRCO0VBQzVCLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLHdCQUF1QixFQUFBOztBQUd6QjtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUNGLEVBQUE7O0FBRUE7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0dDWEM7O0FEZUQ7RUFDRSx1QkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1jcmVhdGUvYXBwbGljYXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNhZmUtYm94IHtcclxuICAgIHBhZGRpbmc6IDEwcHhcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItYm90dG9tLXJlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItZGFzaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnRuLW1hcmdpbi1ib3R0b20ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1wYW5lbCB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY3VzdG9tLXBhbmVsLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0xM3B4IWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1wYW5lbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc21hbGwtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItZ3JheSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1pbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuICAvKlxyXG4gICAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4gICovXHJcblxyXG4gIHNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50OyB9XG5cbi5idG4tbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4OyB9XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/adminision/components/application/application-create/application-create.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-create/application-create.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ApplicationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationCreateComponent", function() { return ApplicationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/application.service */ "./src/app/adminision/services/application.service.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");











var ApplicationCreateComponent = /** @class */ (function () {
    function ApplicationCreateComponent(applicationService, route) {
        this.applicationService = applicationService;
        this.route = route;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_8__["AppModule"].doc;
        /**
         * application object
         */
        this.application = {};
        this.applicationSettings = _services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.isUpdate = false;
        this.requiredDocumentList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_10__["HashTable"]();
        this.required_field = [
            'name',
            'qualification_id',
            'national_id',
            'registration_status_id',
            'academic_years_id',
            'grade',
            'qualification_date',
            'qualification_types_id',
            'level_id'
            //'case_constraint_id'
        ];
        var id = this.route.snapshot.params['id'];
        if (id > 0) {
            this.loadApplication(id);
            this.isUpdate = true;
        }
    }
    ApplicationCreateComponent.prototype.loadApplication = function (id) {
        var _this = this;
        this.applicationService.load(id).subscribe(function (res) {
            _this.application = res;
        });
    };
    ApplicationCreateComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.required_field.forEach(function (element) {
            if (!_this.application[element])
                valid = false;
        });
        return valid;
    };
    ApplicationCreateComponent.prototype.validateOnRegisterationStatusDocument = function () {
        var _this = this;
        this.requiredDocumentList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_10__["HashTable"]();
        this.applicationSettings.REGSITERATIN_STATUS_DOCUMENTS.forEach(function (element) {
            if (element.registeration_status_id == _this.application.registration_status_id) {
                _this.requiredDocumentList.put(element.required_document_id, 1);
            }
        });
    };
    ApplicationCreateComponent.prototype.sendApplication = function () {
        if (!this.validate()) {
            return _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('fill all requird data'));
            this.setCurrentError(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('fill all requird data'));
        }
        if (this.isUpdate)
            this.performUpdateApplication();
        else
            this.performSendApplication();
    };
    ApplicationCreateComponent.prototype.performUpdateApplication = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.application); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.application[key])
                data.append(key, this.application[key]);
        }
        //return console.log(data);
        this.applicationService.update(data).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(data.message);
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(data.message);
                _this.setCurrentError(data.message);
            }
            _this.isSubmitted = false;
        });
    };
    ApplicationCreateComponent.prototype.performSendApplication = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.application); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.application[key])
                data.append(key, this.application[key]);
        }
        this.applicationService.store(data).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(data.message);
                _this.reset();
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(data.message);
                _this.setCurrentError(data.message);
            }
            _this.isSubmitted = false;
        });
    };
    ApplicationCreateComponent.prototype.reset = function () {
        this.application = {};
        this.currentError = '';
    };
    ApplicationCreateComponent.prototype.setCurrentError = function (error) {
        if (!error)
            return;
        error = error.replace(/<br>/g, '\n');
        this.currentError = error;
    };
    ApplicationCreateComponent.prototype.toggle = function (selector) {
        if (selector) {
            this.doc.jquery('.application-panel').slideUp(500);
            this.doc.jquery('.' + selector).slideDown(500);
        }
        else {
            this.doc.jquery('.application-panel').slideDown(500);
        }
    };
    ApplicationCreateComponent.prototype.setFile = function (event, key, required_document_id) {
        if (required_document_id === void 0) { required_document_id = null; }
        this.application[key] = event.target.files[0];
        console.log(this.application[key]);
        if (required_document_id) {
            if (!this.application[key])
                this.requiredDocumentList.put(required_document_id, 1);
            else
                this.requiredDocumentList.put(required_document_id, 2);
        }
    };
    ApplicationCreateComponent.prototype.viewPersonalImage = function (event) {
        var _this = this;
        this.setFile(event, 'personal_photo');
        var reader = new FileReader();
        reader.readAsDataURL(this.application.personal_photo);
        reader.onload = function (_event) {
            _this.application.personal_photo_url = reader.result;
        };
    };
    //******************************************* */
    // level methods
    //******************************************* */
    ApplicationCreateComponent.prototype.watchLevel = function () {
        this.calculateLevel();
        this.setLevel();
    };
    ApplicationCreateComponent.prototype.calculateLevel = function () {
        var _this = this;
        var qualificationsTypes = this.applicationSettings.QUALIFICATION_TYPES;
        var levelId = null;
        var changes = false;
        var requiredGrade = null;
        qualificationsTypes.forEach(function (element) {
            var condition = element.id == _this.application.qualification_types_id &&
                element.grade <= _this.application.grade;
            if (element.id == _this.application.qualification_types_id)
                requiredGrade = element.grade;
            if (condition) {
                levelId = element.level_id;
                changes = true;
            }
        });
        if (requiredGrade) {
            this.gradeError = _shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('grade must be equal or bigger than ') + ' : ' + requiredGrade;
            this.setCurrentError(this.gradeError);
        }
        if (!changes) {
            levelId = null;
        }
        else {
            this.gradeError = null;
            this.setCurrentError(this.gradeError);
        }
        this.application.level_id = levelId;
    };
    ApplicationCreateComponent.prototype.setLevel = function () {
        var _this = this;
        var levels = _shared_cache__WEBPACK_IMPORTED_MODULE_6__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_7__["LevelService"].LEVEL_PREFIX);
        levels.forEach(function (element) {
            if (element.id == _this.application.level_id)
                _this.application.level_name = element.name;
        });
    };
    ApplicationCreateComponent.prototype.ngOnInit = function () {
    };
    ApplicationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-create',
            template: __webpack_require__(/*! ./application-create.component.html */ "./src/app/adminision/components/application/application-create/application-create.component.html"),
            styles: [__webpack_require__(/*! ./application-create.component.scss */ "./src/app/adminision/components/application/application-create/application-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])
    ], ApplicationCreateComponent);
    return ApplicationCreateComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/application/application-index/application-index.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-index/application-index.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"w3-display-bottomleft w3-padding\" style=\"position: fixed;z-index: 9999\" >\n    <button  \n    mat-fab color=\"primary\"\n    class=\"w3-large\"\n    routerLink=\"/adminision/application/create\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-plus\" ></span>  \n    </button> \n</div>\n<!--\n\n<div class=\"box box-primary  table-responsive\" >\n  <div class=\"box-header\">\n    <button class=\"btn btn-primary\" routerLink=\"/adminision/application/create\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button> \n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-trash\" ></span>\n    </button>\n  </div>\n  <br> \n</div>\n-->\n\n<div class=\"w3-row\" style=\"padding: 5px;\">\n    <div *ngIf=\"isLoad\" class=\"w3-block text-center w3-padding\" >\n      <i class=\"fa fa-spin fa-refresh w3-jumbo w3-text-indigo\"></i>\n    </div>\n  <ng-container *ngFor=\"let item of resources.data\" >\n      <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-6 student-list-col\" >\n          <div class=\"media material-shadow w3-white w3-padding w3-display-container student-list-item\">\n\n              <div class=\"w3-display-topleft w3-padding\" >\n                <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check w3-margin\" (click)=\"toggleFromTrash(item.id)\"  >\n              </div>\n\n            <div class=\"media-left\">\n                <a href=\"#\">\n                  <img class=\"media-object w3-round\" [src]=\"item.personal_photo_url\"  style=\"width: 100px;\" >\n                </a>\n            </div>\n            <div class=\"media-body\">\n              <h4 class=\"media-heading\">{{ item.name.substring(0, 15) }}..</h4>\n              <table class=\"table\" >\n                <tr>\n                  <th>{{ \"academic_year\" | trans }}</th>\n                  <td>{{ item.academic_year? item.academic_year.name : '' }}</td>\n                </tr>\n                <tr>\n                  <th>{{ \"qualification\" | trans }}</th>\n                  <td>{{ item.qualification? item.qualification.name : '' }}</td>\n                </tr>\n                <tr>\n                  <th>{{ \"level\" | trans }}</th>\n                  <td>{{ item.level? item.level.name : '' }}</td>\n                </tr> \n              </table> \n          </div>\n          <div class=\"text-right\" > \n            <a href=\"#\" [routerLink]=\"['/adminision/application/', item.id]\" style=\"margin: 5px\" ><i class=\"fa fa-edit btn btn-warning btn-sm material-shadow\" ></i></a>\n            \n            <a href=\"#\" [routerLink]=\"['/adminision/application/show/', item.id]\" style=\"margin: 5px\" ><i class=\"fa fa-desktop btn btn-success btn-sm material-shadow\" ></i></a>\n            \n            <button \n            *ngIf=\"item.can_convert_to_student\"\n            class=\"btn btn-primary btn-sm material-shadow\" \n            (click)=\"enrollStudent(item.id)\" \n            [disabled]=\"isEntrollSubmit\" \n            style=\"margin: 5px\" ><i class=\"fa\" [ngClass]=\"{'fa-user-circle': !isEntrollSubmit, 'fa-spin fa-spinner': isEntrollSubmit}\" ></i>  {{ \"enroll student\" | trans }} </button>\n            \n            <a \n            *ngIf=\"!item.can_convert_to_student\"\n            href=\"#\" \n            [routerLink]=\"['/account/safe/', item.id]\" \n            style=\"margin: 5px\" \n            class=\"material-shadow fa fa-money btn w3-indigo btn-sm\" > {{ \"pay\" | trans }} </a> \n          </div>\n      </div>\n    </div>\n  </ng-container>\n  \n\n\n</div>\n<br>\n<div class=\"text-center w3-center\" >\n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n          <li>\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.prev_page}\" (click)=\"loadResources(resources.prev_page)\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n          </li>\n          <li *ngFor=\"let item of resources.pages_arr\"  >\n            <a class=\"\" [ngClass]=\"{'active': resources.current_page == item}\"  (click)=\"loadResources(item)\">{{ item }}</a>\n          </li>  \n          <li>\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.next_page}\"  (click)=\"loadResources(resources.next_page)\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n</div> \n\n \n<!-- remove modal -->\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"remove applications\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\n            <br>\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\n        </div>\n        <div class=\"modal-footer\"> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n \n "

/***/ }),

/***/ "./src/app/adminision/components/application/application-index/application-index.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-index/application-index.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-list-item {\n  height: 200px;\n  margin: 5px !important; }\n\n.student-list-col {\n  padding: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWluZGV4L0U6XFxwcm9qZWN0c1xcc2Ftc2FcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluaXNpb25cXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uXFxhcHBsaWNhdGlvbi1pbmRleFxcYXBwbGljYXRpb24taW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzaW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24taW5kZXgvYXBwbGljYXRpb24taW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZGVudC1saXN0LWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogNXB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0dWRlbnQtbGlzdC1jb2wge1xyXG4gICAgcGFkZGluZzogNXB4IWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/adminision/components/application/application-index/application-index.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-index/application-index.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApplicationIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationIndexComponent", function() { return ApplicationIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application.service */ "./src/app/adminision/services/application.service.ts");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");






var ApplicationIndexComponent = /** @class */ (function () {
    function ApplicationIndexComponent(applicationService) {
        this.applicationService = applicationService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        // Resources list
        this.resources = {};
        // init breadcrum
        this.breadcrumbList = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_3__["HashTable"]();
        this.removed = [];
        this.isEntrollSubmit = false;
        this.isLoad = false;
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'applications' }
        ];
    }
    ApplicationIndexComponent.prototype.toggleFromTrash = function (id) {
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
    ApplicationIndexComponent.prototype.removeResources = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.applicationService.destroy(id_1).subscribe(function () {
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
            this.loadResources();
        }
    };
    ApplicationIndexComponent.prototype.prePagniation = function () {
        if (!this.resources.data)
            return;
        this.resources.prev_page = this.resources.prev_page_url ? this.resources.prev_page_url.replace(this.resources.path + '?page=', '') : null;
        this.resources.next_page = this.resources.next_page_url ? this.resources.next_page_url.replace(this.resources.path + '?page=', '') : null;
        this.resources.pages = Math.ceil(this.resources.total / this.resources.per_page);
        this.resources.pages_arr = [];
        for (var i = 0; i < this.resources.pages; i++)
            this.resources.pages_arr.push(i + 1);
    };
    ApplicationIndexComponent.prototype.enrollStudent = function (applicationId) {
        var _this = this;
        this.isEntrollSubmit = true;
        this.applicationService.enroll(applicationId).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(res.message);
                _this.loadResources(_this.resources.current_page);
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(res.message);
            _this.isEntrollSubmit = false;
        });
    };
    ApplicationIndexComponent.prototype.loadResources = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.isLoad = true;
        this.applicationService.get(page).subscribe(function (res) {
            _this.resources = res;
            _this.prePagniation();
            _this.isLoad = false;
        });
    };
    ApplicationIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
    };
    ApplicationIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-index',
            template: __webpack_require__(/*! ./application-index.component.html */ "./src/app/adminision/components/application/application-index/application-index.component.html"),
            styles: [__webpack_require__(/*! ./application-index.component.scss */ "./src/app/adminision/components/application/application-index/application-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]])
    ], ApplicationIndexComponent);
    return ApplicationIndexComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/application/application-show/application-show.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-show/application-show.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\n      <div class=\"w3-white material-shadow safe-box\">\n        <div class=\"safe-box-header w3-xlarge\">\n          {{ \"show application\" | trans }}\n        </div>\n        <br>\n        <div class=\"border-bottom-dashed\" ></div>\n        <br>\n  \n        <div class=\"safe-box-body row\" >\n  \n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\n            <br> \n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\n  \n              <div   \n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\" \n               >\n                {{ currentError }}\n              </div>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button> \n              \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button> \n             \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button> \n               \n            </div>\n          </div>\n  \n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\n  \n             \n  \n            <!--\n\n        => student basic info\n        name\t                  email\t\n        academic_years_id\t      grade\t\n        registeration_date\t    phone_1\n        registration_status_id\tregistration_method_id\n        qualification_date\t    qualification_set_number\t\n        qualification_types_id\tqualification_id\t\n        level_id\t              case_constraint_id\n        national_id\t            password  \n        acceptance_code\t        acceptance_date\t\n        status\t                writen_by\t\n        \n      \n        => additional info\n        \t\t \n        nationality_id\t        gender\t\n        language_1_id\t          language_2_id\t\n        city_id\t                government_id\t \n        country_id\t            religion \n        address\t                birth_address\t\n        national_id_date\t      national_id_place\t \n\n        => military info\n        military_status_id\t    military_area_id \n        triple_number\n        \n        => parent info\n        parent_name\t            parent_national_id\t\n        parent_job_id\t          parent_address\t\n        parent_phone\t          relative_relation_id\n        \n        => personal image\n        personal_photo\t\n\n        => required document\n        \n            -->\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\n  \n              <div class=\"custom-panel-body\"  >\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                      <tr>\n                        <th>{{ \"student name\" | trans }} *</th>\n                        <td>\n                          <input readonly  \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.name\" >\n                        </td>\n                      </tr> \n                      <tr> \n                          <th>{{ \"email\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.email\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"academic_years\" | trans }} *</th>\n                        <td>\n                          <select readonly \n                          (change)=\"watchLevel()\"\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.academic_years_id\">\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"grade\" | trans }} *</th>\n                          <td>\n                            <input readonly  \n                            (change)=\"watchLevel()\"\n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.grade\" >\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\n                              {{ gradeError }}\n                            </p>\n                          </td>\n                      </tr> \n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.registeration_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.registeration_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_status\" | trans }} *</th>\n                        <td>\n                          <select readonly \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.registration_status_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_method\" | trans }}</th>\n                        <td>\n                          <select readonly \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"application.registration_method_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_date\" | trans }} *</th>\n                          <td>\n                            <input readonly  \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_set_number\" >\n                          </td>\n                      </tr>\n                    </table>\n                  </div>  \n\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block w3-block\" >\n                        <tr>\n                          <th>{{ \"qualification\" | trans }} *</th>\n                          <td>\n                            <select readonly \n                            (change)=\"watchLevel()\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_id\">\n                              <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"qualification_types\" | trans }} *</th>\n                          <td>\n                            <select readonly \n                            (change)=\"watchLevel()\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.qualification_types_id\">\n                              <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\n                                  <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container>\n                              \n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"level\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"text\"\n                            readonly\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.level_name\" >\n                            <input readonly  \n                            type=\"hidden\"  \n                            [(ngModel)]=\"application.level_id\" >\n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"case_constraint\" | trans }}</th>\n                          <td>\n                            <select readonly \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"application.case_constraint_id\">\n                              <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"national_id\" | trans }} *</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"coordination_password\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"password\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.password\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_code\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.acceptance_code\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_date\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.acceptance_date\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"phone_1\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.phone_1\" >\n                            </td>\n                        </tr>\n\n                      \n                    </table>\n                  </div>\n                </div>\n              </div>\n  \n            </div>\n \n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"military_status\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.military_status_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                          <tr>\n                            <th>{{ \"military_area\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.military_area_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" > \n                          <tr>\n                            <th>{{ \"triple_number\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.triple_number\" >\n                            </td>\n                          </tr> \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n \n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                            <tr>\n                              <th>{{ \"parent_name\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_name\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_national_id\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_national_id\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_address\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_address\" >\n                              </td>\n                            </tr>  \n                        </table>\n                      </div>  \n    \n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block w3-block\" > \n                            <tr>\n                              <th>{{ \"parent_phone\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_phone\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_job\" | trans }}</th>\n                              <td>\n                                <select readonly \n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.parent_job_id\">\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>   \n                            <tr>\n                              <th>{{ \"relative_relation\" | trans }}</th>\n                              <td>\n                                <select readonly \n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.relative_relation_id\">\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>  \n                        </table>\n                      </div>\n                    </div>\n                  </div>\n      \n                </div>\n\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"nationality\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.nationality_id\">\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"gender\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.gender\">\n                                <option value=\"male\">{{ \"male\" | trans }}</option>\n                                <option value=\"female\">{{ \"female\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_1\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.language_1_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_2\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.language_2_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"country\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.country_id\">\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"government\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.government_id\">\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container> \n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" >\n                          <tr>\n                            <th>{{ \"city\" | trans }}</th>\n                            <td>\n                              <select readonly \n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"application.city_id\">\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </ng-container> \n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"religion\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.religion\">\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"address\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"birth_address\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.birth_address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_date\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id_date\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_place\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"application.national_id_place\" >\n                            </td>\n                          </tr> \n                        \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n           \n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                        <div class=\"row w3-padding\" >\n                          <div class=\"w3-padding text-center\" style=\"float: right;min-width: 120px;\" *ngFor=\"let item of application.student_required_document\" >\n                              <a [href]=\"item.path_url\" target=\"_blank\"  >\n                                  <img [src]=\"item.path_url\"  class=\" w3-round material-shadow w3-center\" style=\"height: 100px;\" >\n                                  <br>\n                                  {{ item.required_document.name  }}\n                              </a>\n                          </div>\n                        </div> \n                      </div>   \n                    </div>\n                  </div>\n      \n                </div>\n   \n              <div class=\"custom-panel w3-display-container w3-round\">\n                  <div class=\"custom-panel-body\"  > \n                     \n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\"  routerLink=\"/adminision/application\" >{{ \"exit\" | trans }}</a>\n                  </div>\n      \n                </div>\n                  \n          </div>\n  \n  \n  \n        </div>\n      </div>\n    </div>\n  </div>\n   \n  \n  \n  "

/***/ }),

/***/ "./src/app/adminision/components/application/application-show/application-show.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-show/application-show.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px;\n  background-color: transparent !important; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLXNob3cvRTpcXHByb2plY3RzXFxzYW1zYVxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5pc2lvblxcY29tcG9uZW50c1xcYXBwbGljYXRpb25cXGFwcGxpY2F0aW9uLXNob3dcXGFwcGxpY2F0aW9uLXNob3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1zaG93L2FwcGxpY2F0aW9uLXNob3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0Usd0JBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdDQUF1QyxFQUFBOztBQUd6QztFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7R0NWQzs7QURjRDtFQUNFLHVCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLXNob3cvYXBwbGljYXRpb24tc2hvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWRhc2hlZCB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWdyYXkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20taW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsIHtcclxuICAgIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxuICB9IFxyXG4gIC8qXHJcbiAgICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiAgKi9cclxuXHJcbiAgc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcclxuICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAiLCIuc2FmZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50OyB9XG5cbi5idG4tbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/adminision/components/application/application-show/application-show.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-show/application-show.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ApplicationShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationShowComponent", function() { return ApplicationShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/application.service */ "./src/app/adminision/services/application.service.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ApplicationShowComponent = /** @class */ (function () {
    function ApplicationShowComponent(applicationService, route) {
        var _this = this;
        this.applicationService = applicationService;
        this.route = route;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        /**
         * application object
         */
        this.application = {};
        this.applicationSettings = _services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id > 0) {
                _this.loadApplication(id);
            }
        });
    }
    ApplicationShowComponent.prototype.loadApplication = function (id) {
        var _this = this;
        this.applicationService.load(id).subscribe(function (res) {
            _this.application = res;
            _this.setLevel();
        });
    };
    ApplicationShowComponent.prototype.toggle = function (selector) {
        if (selector) {
            this.doc.jquery('.application-panel').slideUp(500);
            this.doc.jquery('.' + selector).slideDown(500);
        }
        else {
            this.doc.jquery('.application-panel').slideDown(500);
        }
    };
    ApplicationShowComponent.prototype.setLevel = function () {
        var _this = this;
        var levels = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"].LEVEL_PREFIX);
        levels.forEach(function (element) {
            if (element.id == _this.application.level_id)
                _this.application.level_name = element.name;
        });
    };
    ApplicationShowComponent.prototype.ngOnInit = function () {
    };
    ApplicationShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-show',
            template: __webpack_require__(/*! ./application-show.component.html */ "./src/app/adminision/components/application/application-show/application-show.component.html"),
            styles: [__webpack_require__(/*! ./application-show.component.scss */ "./src/app/adminision/components/application/application-show/application-show.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], ApplicationShowComponent);
    return ApplicationShowComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-create/required-document-create.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-create/required-document-create.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<!-- remove modal -->\n<div class=\"modal fade\" id=\"createModal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">{{ \"add required document\" | trans }}</h4>\n      </div>\n      <div class=\"modal-body text-center\">\n        <table class=\"table\">\n          <tr>\n            <th>{{ \"name\" | trans }} *</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"type\" | trans }} *</th>\n            <td>\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.type\"  >\n                <option value=\"original\">{{ \"original\" | trans }}</option>\n                <option value=\"copy\">{{ \"copy\" | trans }}</option>\n                <option value=\"both\">{{ \"both\" | trans }}</option>\n              </select> \n            </td>\n          </tr>\n          <tr>\n            <th>{{ \"notes\" | trans }}</th>\n            <td>\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" >\n            </td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"modal-footer text-center\"> \n          <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#createModal').modal('hide')\" >{{ \"close\" | trans }}</button>\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"addResource()\" >{{ \"add\" | trans }}</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-create/required-document-create.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-create/required-document-create.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9yZXF1aXJlZF9kb2N1bWVudC9yZXF1aXJlZC1kb2N1bWVudC1jcmVhdGUvcmVxdWlyZWQtZG9jdW1lbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-create/required-document-create.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-create/required-document-create.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: RequiredDocumentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentCreateComponent", function() { return RequiredDocumentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_required_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/required-document.service */ "./src/app/adminision/services/required-document.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");







var RequiredDocumentCreateComponent = /** @class */ (function () {
    function RequiredDocumentCreateComponent(requiredDocumentService) {
        this.requiredDocumentService = requiredDocumentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.resource = {};
        this.isSubmitted = false;
    }
    RequiredDocumentCreateComponent.prototype.ngOnInit = function () {
    };
    RequiredDocumentCreateComponent.prototype.validate = function () {
        if (!this.resource.name || !this.resource.type)
            return false;
        return true;
    };
    RequiredDocumentCreateComponent.prototype.addResource = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.resource.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken();
        this.requiredDocumentService.store(this.resource).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(data.message);
                _this.resource = {};
                _this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequiredDocumentCreateComponent.prototype, "updateResources", void 0);
    RequiredDocumentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-document-create',
            template: __webpack_require__(/*! ./required-document-create.component.html */ "./src/app/adminision/components/required_document/required-document-create/required-document-create.component.html"),
            styles: [__webpack_require__(/*! ./required-document-create.component.scss */ "./src/app/adminision/components/required_document/required-document-create/required-document-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_required_document_service__WEBPACK_IMPORTED_MODULE_3__["RequiredDocumentService"]])
    ], RequiredDocumentCreateComponent);
    return RequiredDocumentCreateComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.html":
/*!************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-index/required-document-index.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\n  <div class=\"box-header\">\n    <button class=\"btn btn-primary\" (click)=\"doc.jquery('#createModal').modal('show');\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\n    </button> \n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-trash\" ></span>\n    </button>\n  </div>\n  <br>\n  <div style=\"padding: 5px;\">\n      <table class=\"table table-bordered text-center default-datatable\" >\n          <thead>\n            <tr class=\"w3-hover-light-gray\" >\n              <th></th>\n              <th>#</th>\n              <th>{{ \"name\" | trans }}</th>\n              <th>{{ \"type\" | trans }}</th> \n              <th>{{ \"notes\" | trans }}</th> \n              <th></th>\n            </tr>\n          </thead>\n      \n          <tbody>\n            <tr *ngFor=\"let item of resources index as i\" >\n              <td>\n                <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check\" (click)=\"toggleFromTrash(item.id)\"  >\n              </td>\n              <td>{{ i + 1 }}</td>\n              <td>{{ item.name }}</td> \n              <td>{{ item.type | trans}}</td>\n              <td>{{ item.notes }}</td>\n              <td> \n                <button class=\"btn btn-warning fa fa-edit\" (click)=\"setUpdateResource(item)\" ></button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n  </div>\n\n</div>\n\n \n<!-- remove modal -->\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"remove required documents\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\n            <br>\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\n        </div>\n        <div class=\"modal-footer\"> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n \n\n  <app-required-document-update [updateResources]=\"updateResources\" [resource]=\"updateItem\" ></app-required-document-update>\n\n  <app-required-document-create [updateResources]=\"updateResources\" ></app-required-document-create>"

/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-index/required-document-index.component.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9yZXF1aXJlZF9kb2N1bWVudC9yZXF1aXJlZC1kb2N1bWVudC1pbmRleC9yZXF1aXJlZC1kb2N1bWVudC1pbmRleC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-index/required-document-index.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: RequiredDocumentIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentIndexComponent", function() { return RequiredDocumentIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _services_required_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/required-document.service */ "./src/app/adminision/services/required-document.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");







var RequiredDocumentIndexComponent = /** @class */ (function () {
    function RequiredDocumentIndexComponent(requiredDocumentService, router) {
        var _this = this;
        this.requiredDocumentService = requiredDocumentService;
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
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'required_documents' }
        ];
        this.updateResources = function () {
            _shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].refreshComponent(_this.router, '/adminision/settings/required_documents');
        };
    }
    RequiredDocumentIndexComponent.prototype.toggleFromTrash = function (id) {
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
    RequiredDocumentIndexComponent.prototype.removeResources = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.requiredDocumentService.destroy(id_1).subscribe(function () {
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
    RequiredDocumentIndexComponent.prototype.loadResources = function () {
        var _this = this;
        this.requiredDocumentService.get().subscribe(function (res) {
            _this.resources = res;
            // 
            setTimeout(function () {
                _this.doc.datatable();
            }, 2000);
        });
    };
    RequiredDocumentIndexComponent.prototype.setUpdateResource = function (item) {
        this.updateItem = item;
        this.doc.jquery('#updateModal').modal('show');
    };
    RequiredDocumentIndexComponent.prototype.ngOnInit = function () {
        this.loadResources();
    };
    RequiredDocumentIndexComponent.prototype.showUpdateModal = function (item) {
        this.updateItem = item;
    };
    RequiredDocumentIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-document-index',
            template: __webpack_require__(/*! ./required-document-index.component.html */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.html"),
            styles: [__webpack_require__(/*! ./required-document-index.component.scss */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_required_document_service__WEBPACK_IMPORTED_MODULE_3__["RequiredDocumentService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RequiredDocumentIndexComponent);
    return RequiredDocumentIndexComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-update/required-document-update.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<!-- remove modal -->\n<div class=\"modal fade\" id=\"updateModal\" role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"add required document\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n          <table class=\"table\">\n            <tr>\n              <th>{{ \"name\" | trans }} *</th>\n              <td>\n                <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"type\" | trans }} *</th>\n              <td>\n                <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.type\"  >\n                  <option value=\"original\">{{ \"original\" | trans }}</option>\n                  <option value=\"copy\">{{ \"copy\" | trans }}</option>\n                  <option value=\"both\">{{ \"both\" | trans }}</option>\n                </select> \n              </td>\n            </tr>\n            <tr>\n              <th>{{ \"notes\" | trans }}</th>\n              <td>\n                <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" >\n              </td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"modal-footer text-center\"> \n            <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#updateModal').modal('hide')\" >{{ \"close\" | trans }}</button>\n            <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"updateResource()\" >{{ \"save\" | trans }}</button>\n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->"

/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-update/required-document-update.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9yZXF1aXJlZF9kb2N1bWVudC9yZXF1aXJlZC1kb2N1bWVudC11cGRhdGUvcmVxdWlyZWQtZG9jdW1lbnQtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-update/required-document-update.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: RequiredDocumentUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentUpdateComponent", function() { return RequiredDocumentUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_required_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/required-document.service */ "./src/app/adminision/services/required-document.service.ts");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");







var RequiredDocumentUpdateComponent = /** @class */ (function () {
    function RequiredDocumentUpdateComponent(requiredDocumentService) {
        this.requiredDocumentService = requiredDocumentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.isSubmitted = false;
        this.resource = {};
    }
    RequiredDocumentUpdateComponent.prototype.ngOnInit = function () {
    };
    RequiredDocumentUpdateComponent.prototype.validate = function () {
        if (!this.resource.name || !this.resource.type)
            return false;
        return true;
    };
    RequiredDocumentUpdateComponent.prototype.updateResource = function () {
        var _this = this;
        if (!this.validate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["Helper"].trans('fill all required data'));
        this.isSubmitted = true;
        this.resource.api_token = _shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].getApiToken();
        this.requiredDocumentService.update(this.resource).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(data.message);
                //this.updateResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
            _this.isSubmitted = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequiredDocumentUpdateComponent.prototype, "updateResources", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RequiredDocumentUpdateComponent.prototype, "resource", void 0);
    RequiredDocumentUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-document-update',
            template: __webpack_require__(/*! ./required-document-update.component.html */ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.html"),
            styles: [__webpack_require__(/*! ./required-document-update.component.scss */ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_required_document_service__WEBPACK_IMPORTED_MODULE_3__["RequiredDocumentService"]])
    ], RequiredDocumentUpdateComponent);
    return RequiredDocumentUpdateComponent;
}());



/***/ }),

/***/ "./src/app/adminision/services/application-required.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/adminision/services/application-required.service.ts ***!
  \*********************************************************************/
/*! exports provided: ApplicationRequiredService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationRequiredService", function() { return ApplicationRequiredService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var ApplicationRequiredService = /** @class */ (function () {
    function ApplicationRequiredService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    ApplicationRequiredService.prototype.get = function () {
        return this.http.get('adminision/application_requireds?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * update service
     */
    ApplicationRequiredService.prototype.update = function (data) {
        return this.http.post('adminision/application_requireds/update' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    ApplicationRequiredService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApplicationRequiredService);
    return ApplicationRequiredService;
}());



/***/ }),

/***/ "./src/app/adminision/services/application.service.ts":
/*!************************************************************!*\
  !*** ./src/app/adminision/services/application.service.ts ***!
  \************************************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var ApplicationService = /** @class */ (function () {
    function ApplicationService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    ApplicationService.prototype.get = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get('adminision/applications?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken() + "&page=" + page);
    };
    /**
     * get services from api
     *
     */
    ApplicationService.prototype.load = function (id) {
        return this.http.get('adminision/applications/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    ApplicationService.prototype.store = function (data) {
        return this.http.post('adminision/applications/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    ApplicationService.prototype.update = function (data) {
        return this.http.post('adminision/applications/update/' + data.get('id') + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    ApplicationService.prototype.destroy = function (id) {
        return this.http.post('adminision/applications/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    /**
     * enroll application to student
     */
    ApplicationService.prototype.enroll = function (id) {
        return this.http.post('students/enroll/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    ApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApplicationService);
    return ApplicationService;
}());



/***/ }),

/***/ "./src/app/adminision/services/required-document.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/adminision/services/required-document.service.ts ***!
  \******************************************************************/
/*! exports provided: RequiredDocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredDocumentService", function() { return RequiredDocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var RequiredDocumentService = /** @class */ (function () {
    function RequiredDocumentService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    RequiredDocumentService.prototype.get = function () {
        return this.http.get('adminision/required_documents?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    RequiredDocumentService.prototype.store = function (data) {
        return this.http.post('adminision/required_documents/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    RequiredDocumentService.prototype.update = function (data) {
        return this.http.post('adminision/required_documents/update/' + data.id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    RequiredDocumentService.prototype.destroy = function (id) {
        return this.http.post('adminision/required_documents/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    RequiredDocumentService.REQUIRED_DOCUMENT_SERVICE_PREFIX = 'required_document';
    RequiredDocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RequiredDocumentService);
    return RequiredDocumentService;
}());



/***/ })

}]);
//# sourceMappingURL=adminision-adminision-module.js.map