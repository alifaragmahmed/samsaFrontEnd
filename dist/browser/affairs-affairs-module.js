(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["affairs-affairs-module"],{

/***/ "./src/app/affairs/affairs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/affairs/affairs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AffairsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffairsRoutingModule", function() { return AffairsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminision_components_adminision_setting_adminision_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminision/components/adminision-setting/adminision-setting.component */ "./src/app/adminision/components/adminision-setting/adminision-setting.component.ts");
/* harmony import */ var _adminision_components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminision/components/application-required/application-required.component */ "./src/app/adminision/components/application-required/application-required.component.ts");
/* harmony import */ var _adminision_components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../adminision/components/application/application-create/application-create.component */ "./src/app/adminision/components/application/application-create/application-create.component.ts");
/* harmony import */ var _adminision_components_application_application_index_application_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../adminision/components/application/application-index/application-index.component */ "./src/app/adminision/components/application/application-index/application-index.component.ts");
/* harmony import */ var _adminision_components_required_document_required_document_index_required_document_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../adminision/components/required_document/required-document-index/required-document-index.component */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.ts");
/* harmony import */ var _student_components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../student/components/student/student-create/student-create.component */ "./src/app/student/components/student/student-create/student-create.component.ts");
/* harmony import */ var _student_components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../student/components/student/student-index/student-index.component */ "./src/app/student/components/student/student-index/student-index.component.ts");
/* harmony import */ var _affairs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./affairs.component */ "./src/app/affairs/affairs.component.ts");











var routes = [
    {
        path: "",
        component: _affairs_component__WEBPACK_IMPORTED_MODULE_10__["AffairsComponent"],
        children: [
            {
                path: 'students',
                component: _student_components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_9__["StudentIndexComponent"]
            },
            {
                path: 'students/create',
                component: _student_components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_8__["StudentCreateComponent"]
            },
            {
                path: 'applications',
                component: _adminision_components_application_application_index_application_index_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationIndexComponent"]
            },
            {
                path: 'applications/create',
                component: _adminision_components_application_application_create_application_create_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationCreateComponent"]
            },
            {
                path: 'settings',
                component: _adminision_components_adminision_setting_adminision_setting_component__WEBPACK_IMPORTED_MODULE_3__["AdminisionSettingComponent"]
            },
            {
                path: 'required_documents',
                component: _adminision_components_required_document_required_document_index_required_document_index_component__WEBPACK_IMPORTED_MODULE_7__["RequiredDocumentIndexComponent"]
            },
            {
                path: 'application_required',
                component: _adminision_components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_4__["ApplicationRequiredComponent"]
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AffairsRoutingModule = /** @class */ (function () {
    function AffairsRoutingModule() {
    }
    AffairsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AffairsRoutingModule);
    return AffairsRoutingModule;
}());



/***/ }),

/***/ "./src/app/affairs/affairs.component.html":
/*!************************************************!*\
  !*** ./src/app/affairs/affairs.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <!-- navbar list -->\r\n    <div class=\"box box-primary material-shadow\">\r\n      <div class=\"box-body box-profile\">\r\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/application.gif\" alt=\"User profile picture\">\r\n\r\n        <h3 class=\"profile-username text-center\">{{ \"student affairs\" | trans }}</h3>\r\n\r\n\r\n        <ul class=\"list-group list-group-unbordered\">\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" [routerLink]=\"['/affairs/students']\" [queryParams]=\"{col: 'col-lg-12'}\" >\r\n                <b>{{ \"students\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-users\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" [routerLink]=\"['/affairs/students/create']\" [queryParams]=\"{col: 'col-lg-12'}\" >\r\n                <b>{{ \"add student\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-user-circle\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" [routerLink]=\"['/affairs/applications']\" [queryParams]=\"{col: 'col-lg-12'}\" >\r\n                <b>{{ \"applications\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-address-card-o\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\"  [routerLink]=\"['/affairs/applications/create']\" [queryParams]=\"{col: 'col-lg-12'}\" >\r\n                <b>{{ \"add application\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-address-book-o\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/affairs/required_documents' >\r\n                <b>{{ \"required_documents\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-newspaper-o\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/affairs/application_required' >\r\n                <b>{{ \"application_required\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-check-square\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/affairs/settings' >\r\n                <b>{{ \"adminision settings\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-cogs\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n    <!-- /.box -->\r\n\r\n  </div>\r\n  <!-- /.col -->\r\n  <div class=\"col-md-9\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <!-- /.col -->\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/affairs/affairs.component.scss":
/*!************************************************!*\
  !*** ./src/app/affairs/affairs.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px;\n  width: 100%; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\n.student-list-col {\n  width: 100%;\n  box-shadow: none !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWZmYWlycy9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcYWZmYWlyc1xcYWZmYWlycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWZmYWlycy9hZmZhaXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFDRixFQUFBOztBQUVBO0VBQ0UseUNBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsdUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsdUNBQXNDO0VBQ3RDLDhCQUE2QixFQUFBOztBQUkvQjtFQUNFLDZCQUE0QjtFQUM1QixzQkFBcUI7RUFDckIscUJBQW9CO0VBQ3BCLHNCQUFxQjtFQUNyQixrQ0FBaUM7RUFDakMsNkJBQTRCO0VBQzVCLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLHdCQUF1QixFQUFBOztBQUd6QjtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0NDVkM7O0FEZUQ7RUFDRSxXQUFXO0VBQ1gsMkJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZmZhaXJzL2FmZmFpcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHhcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWRhc2hlZCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1wYW5lbCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB0b3A6IC0xM3B4IWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbWFsbC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dCB7XHJcbiAgbWluLXdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWdyYXkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxufVxyXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cclxuXHJcblxyXG4uc3R1ZGVudC1saXN0LWNvbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cbi5zdHVkZW50LWxpc3QtY29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/affairs/affairs.component.ts":
/*!**********************************************!*\
  !*** ./src/app/affairs/affairs.component.ts ***!
  \**********************************************/
/*! exports provided: AffairsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffairsComponent", function() { return AffairsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AffairsComponent = /** @class */ (function () {
    function AffairsComponent() {
    }
    AffairsComponent.prototype.ngOnInit = function () {
    };
    AffairsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-affairs',
            template: __webpack_require__(/*! ./affairs.component.html */ "./src/app/affairs/affairs.component.html"),
            styles: [__webpack_require__(/*! ./affairs.component.scss */ "./src/app/affairs/affairs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AffairsComponent);
    return AffairsComponent;
}());



/***/ }),

/***/ "./src/app/affairs/affairs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/affairs/affairs.module.ts ***!
  \*******************************************/
/*! exports provided: AffairsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffairsModule", function() { return AffairsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _affairs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./affairs-routing.module */ "./src/app/affairs/affairs-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _affairs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./affairs.component */ "./src/app/affairs/affairs.component.ts");
/* harmony import */ var _student_student_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../student/student.module */ "./src/app/student/student.module.ts");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account/account.module */ "./src/app/account/account.module.ts");
/* harmony import */ var _adminision_adminision_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../adminision/adminision.module */ "./src/app/adminision/adminision.module.ts");









var AffairsModule = /** @class */ (function () {
    function AffairsModule() {
    }
    AffairsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_affairs_component__WEBPACK_IMPORTED_MODULE_5__["AffairsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _affairs_routing_module__WEBPACK_IMPORTED_MODULE_3__["AffairsRoutingModule"],
                _student_student_module__WEBPACK_IMPORTED_MODULE_6__["StudentModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_7__["AccountModule"],
                _adminision_adminision_module__WEBPACK_IMPORTED_MODULE_8__["AdminisionModule"]
            ]
        })
    ], AffairsModule);
    return AffairsModule;
}());



/***/ })

}]);
//# sourceMappingURL=affairs-affairs-module.js.map