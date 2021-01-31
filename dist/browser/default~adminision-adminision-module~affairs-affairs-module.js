(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~adminision-adminision-module~affairs-affairs-module"],{

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

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
/* harmony import */ var _components_adminision_setting_adminision_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/adminision-setting/adminision-setting.component */ "./src/app/adminision/components/adminision-setting/adminision-setting.component.ts");










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
                path: '',
                component: _components_adminision_setting_adminision_setting_component__WEBPACK_IMPORTED_MODULE_9__["AdminisionSettingComponent"]
            },
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

module.exports = "<div class=\"row\">\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n    <!-- navbar list -->\r\n    <div class=\"box box-primary material-shadow\">\r\n      <div class=\"box-body box-profile\">\r\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/application.gif\" alt=\"User profile picture\">\r\n\r\n        <h3 class=\"profile-username text-center\">{{ \"adminision_settings\" | trans }}</h3>\r\n\r\n\r\n        <ul class=\"list-group list-group-unbordered\">\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/adminision/settings/required_documents' >\r\n                <b>{{ \"required_documents\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-newspaper-o\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/adminision/settings/application_required' >\r\n                <b>{{ \"application_required\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-check-square\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <a href=\"#\" routerLink='/adminision/settings' >\r\n                <b>{{ \"adminision settings\" | trans }}</b>\r\n                <a href=\"#\"  class=\"pull-left\">\r\n                  <i class=\"fa fa-cogs\" ></i>\r\n                </a>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /.box-body -->\r\n    </div>\r\n    <!-- /.box -->\r\n\r\n  </div>\r\n  <!-- /.col -->\r\n  <div class=\"col-md-9\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n  <!-- /.col -->\r\n</div>\r\n"

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
/* harmony import */ var _components_adminision_setting_adminision_setting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/adminision-setting/adminision-setting.component */ "./src/app/adminision/components/adminision-setting/adminision-setting.component.ts");
















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
                _components_application_application_show_application_show_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationShowComponent"], _components_application_required_application_required_component__WEBPACK_IMPORTED_MODULE_12__["ApplicationRequiredComponent"], _components_adminision_setting_adminision_setting_component__WEBPACK_IMPORTED_MODULE_15__["AdminisionSettingComponent"]
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

/***/ "./src/app/adminision/components/adminision-setting/adminision-setting.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/adminision/components/adminision-setting/adminision-setting.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\r\n\r\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\r\n  <div class=\"box-header\">\r\n\r\n  </div>\r\n  <table  class=\"table table-bordered text-right\">\r\n    <tr>\r\n      <td>{{ \"years of adminision\" | trans }}</td>\r\n      <td>\r\n        <input type=\"number\" style=\"width: 100px\" class=\"form-control input-sm\" [(ngModel)]=\"adminisionSetting5.value\"  >\r\n      </td>\r\n      <td>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"isSubmitted5\" style=\"margin: 5px\" (click)=\"updateSettings(adminisionSetting5)\" >\r\n          <span *ngIf=\"!isSubmitted5\" >{{ \"save\" | trans }}</span>\r\n          <span *ngIf=\"isSubmitted5\"  class=\"fa fa-spin fa-spinner\" ></span>\r\n        </button>\r\n      </td>\r\n      <!--\r\n      <td>{{ \"division\" | trans }}</td>\r\n      <td>\r\n        <select   style=\"width: 100px\" class=\"form-control input-sm\" (change)=\"loadAcademicYearExpenses()\"  [(ngModel)]=\"division_id\" >\r\n           <ng-container *ngFor=\"let item of departments\">\r\n              <option *ngIf=\"level_id == item.level_id\"  value=\"{{ item.id }}\" >{{ item.name }}</option>\r\n           </ng-container>\r\n        </select>\r\n      </td>\r\n      -->\r\n    </tr>\r\n  </table>\r\n  <br>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/adminision/components/adminision-setting/adminision-setting.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/adminision/components/adminision-setting/adminision-setting.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9hZG1pbmlzaW9uLXNldHRpbmcvYWRtaW5pc2lvbi1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/adminision/components/adminision-setting/adminision-setting.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/adminision/components/adminision-setting/adminision-setting.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AdminisionSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminisionSettingComponent", function() { return AdminisionSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_application_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");






var AdminisionSettingComponent = /** @class */ (function () {
    function AdminisionSettingComponent(service) {
        this.service = service;
        this.breadcrumbList = [];
        this.adminisionSetting5 = {};
        this.isSubmitted5 = false;
        !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].can('application_setting') ? Object(process__WEBPACK_IMPORTED_MODULE_2__["exit"])() : '';
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'adminision_settings' }
        ];
    }
    AdminisionSettingComponent.prototype.loadSettings = function () {
        var _this = this;
        this.service.getSettings().subscribe(function (r) {
            r.forEach(function (element) {
                if (element.id == 5) {
                    _this.adminisionSetting5 = element;
                }
            });
        });
    };
    AdminisionSettingComponent.prototype.updateSettings = function (element) {
        var _this = this;
        this.isSubmitted5 = true;
        this.service.updateSetting(element).subscribe(function (r) {
            if (r.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(r.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(r.message);
            }
            _this.isSubmitted5 = false;
        });
    };
    AdminisionSettingComponent.prototype.ngOnInit = function () {
        this.loadSettings();
    };
    AdminisionSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminision-setting',
            template: __webpack_require__(/*! ./adminision-setting.component.html */ "./src/app/adminision/components/adminision-setting/adminision-setting.component.html"),
            styles: [__webpack_require__(/*! ./adminision-setting.component.scss */ "./src/app/adminision/components/adminision-setting/adminision-setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_setting_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationSettingService"]])
    ], AdminisionSettingComponent);
    return AdminisionSettingComponent;
}());



/***/ }),

/***/ "./src/app/adminision/components/application-required/application-required.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/adminision/components/application-required/application-required.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\r\n\r\n<div class=\"box box-primary material-shadow w3-white table-responsive\" >\r\n  <div class=\"box-header\"> \r\n  </div>\r\n  <br>\r\n  <div style=\"padding: 5px;\">\r\n    <ul class=\"w3-ul\">\r\n      <li>\r\n          <input type=\"checkbox\" style=\"margin: 0px!important\" (click)=\"check(true)\"  class=\"w3-check\"   > \r\n          <span  style=\"padding: 5px;\" class=\"w3-large\" >\r\n              {{ \"check all\" | trans }}\r\n          </span>\r\n      </li>\r\n      <li>\r\n          <input type=\"checkbox\" style=\"margin: 0px!important\" (click)=\"check(false)\"  class=\"w3-check\"   > \r\n          <span  style=\"padding: 5px;\" class=\"w3-large\" >\r\n              {{ \"decheck all\" | trans }}\r\n          </span>\r\n      </li>\r\n      <li *ngFor=\"let item of resources index as i\" class=\"w3-display-container\" >\r\n          <input type=\"checkbox\" style=\"margin: 0px!important\" [(ngModel)]=\"item.required\" class=\"w3-check check-item\"   >\r\n        \r\n          <span  style=\"padding: 5px;\" class=\"w3-large\" >\r\n              {{ item.display_name }}\r\n          </span>\r\n         \r\n      </li>\r\n    </ul> \r\n        <br>\r\n        <div> \r\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"updateResources()\" >{{ \"save changes\" | trans }}</button>\r\n        </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n  "

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
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_application_required_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/application-required.service */ "./src/app/adminision/services/application-required.service.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_6__);







var ApplicationRequiredComponent = /** @class */ (function () {
    function ApplicationRequiredComponent(applicationRequiredService) {
        this.applicationRequiredService = applicationRequiredService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"].doc;
        this.resources = {};
        this.isSubmitted = false;
        !_shared_auth__WEBPACK_IMPORTED_MODULE_2__["Auth"].can('application_required') ? Object(process__WEBPACK_IMPORTED_MODULE_6__["exit"])() : '';
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
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].success(data.message);
                _this.loadResources();
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_5__["Message"].error(data.message);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_required_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationRequiredService"]])
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

module.exports = "<div class=\"row\">\r\n    <div class=\"{{ col }}\">\r\n      <div class=\"w3-white material-shadow safe-box\">\r\n        <div class=\"safe-box-header w3-xlarge\">\r\n          {{ \"create application\" | trans }}\r\n        </div>\r\n        <br>\r\n        <div class=\"border-bottom-dashed\" ></div>\r\n        <br>\r\n\r\n        <div class=\"safe-box-body row\" >\r\n\r\n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\r\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\r\n            <br>\r\n            <input\r\n                type=\"file\"\r\n                (change)=\"viewPersonalImage($event)\"\r\n                accept=\"image/x-png,image/gif,image/jpeg\"\r\n                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"  >\r\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\r\n\r\n              <div\r\n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\"\r\n               >\r\n                {{ currentError }}\r\n              </div>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom military-info-button\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\r\n\r\n\r\n\r\n            <!--\r\n\r\n        => student basic info\r\n        name\t                  email\r\n        academic_years_id\t      grade\r\n        registeration_date\t    phone_1\r\n        registration_status_id\tregistration_method_id\r\n        qualification_date\t    qualification_set_number\r\n        qualification_types_id\tqualification_id\r\n        level_id\t              case_constraint_id\r\n        national_id\t            password\r\n        acceptance_code\t        acceptance_date\r\n        status\t                writen_by\r\n\r\n\r\n        => additional info\r\n\r\n        nationality_id\t        gender\r\n        language_1_id\t          language_2_id\r\n        city_id\t                government_id\r\n        country_id\t            religion\r\n        address\t                birth_address\r\n        national_id_date\t      national_id_place\r\n\r\n        => military info\r\n        military_status_id\t    military_area_id\r\n        triple_number\r\n\r\n        => parent info\r\n        parent_name\t            parent_national_id\r\n        parent_job_id\t          parent_address\r\n        parent_phone\t          relative_relation_id\r\n\r\n        => personal image\r\n        personal_photo\r\n\r\n        => required document\r\n\r\n            -->\r\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\r\n\r\n              <div class=\"custom-panel-body\"  >\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                      <tr>\r\n                        <th>{{ \"student name\" | trans }} *</th>\r\n                        <td>\r\n                          <input\r\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.name, 'border-bottom-red': !application.name}\"\r\n                          [(ngModel)]=\"application.name\" >\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"academic_years\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          (change)=\"watchLevel()\"\r\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.academic_years_id, 'border-bottom-red': !application.academic_years_id}\"\r\n                          [(ngModel)]=\"application.academic_years_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"qualification\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          (change)=\"watchLevel();emptyData()\"\r\n                          class=\"form-control input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_id>0, 'border-bottom-red': !application.qualification_id}\"\r\n                          [(ngModel)]=\"application.qualification_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"qualification_types\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          (change)=\"watchLevel();checkIfAzhar()\"\r\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_types_id>0, 'border-bottom-red': !application.qualification_types_id}\"\r\n                          [(ngModel)]=\"application.qualification_types_id\">\r\n                            <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\r\n                                <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </ng-container>\r\n\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"grade\" | trans }} *</th>\r\n                          <td>\r\n                            <input\r\n                            (change)=\"watchLevel()\"\r\n                            type=\"number\"\r\n                            [readOnly]=\"isAzhar\"\r\n                            class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                            [ngClass]=\"{'border-bottom-dashed': application.grade, 'border-bottom-red': !application.grade}\"\r\n                            [(ngModel)]=\"application.grade\" >\r\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\r\n                              {{ gradeError }}\r\n                            </p>\r\n                          </td>\r\n                      </tr>\r\n                      <ng-container *ngIf=\"isAzhar\" >\r\n                        <tr>\r\n                            <th>{{ \"total_grade\" | trans }} *</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"number\"\r\n                              (change)=\"checkIfAzhar()\"\r\n                              class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                              [ngClass]=\"{'border-bottom-dashed': application.azhar_total_grade, 'border-bottom-red': !application.azhar_total_grade}\"\r\n                              [(ngModel)]=\"application.azhar_total_grade\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"religious_grade_total\" | trans }} *</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"number\"\r\n                              (change)=\"checkIfAzhar()\"\r\n                              class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                              [ngClass]=\"{'border-bottom-dashed': application.azhar_religious_grade_total, 'border-bottom-red': !application.azhar_religious_grade_total}\"\r\n                              [(ngModel)]=\"application.azhar_religious_grade_total\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"azhar_remind_grade\" | trans }} *</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"number\"\r\n                              readonly\r\n                              class=\"custom-input form-control input-sm w3-input input-sm\"\r\n                              [ngClass]=\"{'border-bottom-dashed': application.azhar_remind_grade, 'border-bottom-red': !application.azhar_remind_grade}\"\r\n                              [(ngModel)]=\"application.azhar_remind_grade\" >\r\n                            </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                      <tr>\r\n                        <th>{{ \"level\" | trans }}</th>\r\n                        <td>\r\n                          <input\r\n                          type=\"text\"\r\n                          readonly\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"application.level_name\" >\r\n                          <input\r\n                          type=\"hidden\"\r\n                          [(ngModel)]=\"application.level_id\" >\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_date\" | trans }} *</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                            [ngClass]=\"{'border-bottom-dashed': application.qualification_date>0, 'border-bottom-red': !application.qualification_date}\"\r\n                            [(ngModel)]=\"application.qualification_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_status\" | trans }} *</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\r\n                          (change)=\"validateOnRegisterationStatusDocument()\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.registration_status_id>0, 'border-bottom-red': !application.registration_status_id}\"\r\n                          [(ngModel)]=\"application.registration_status_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"national_id\" | trans }} *</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"text\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [ngClass]=\"{'border-bottom-dashed': application.national_id>0, 'border-bottom-red': !application.national_id}\"\r\n                            [(ngModel)]=\"application.national_id\" >\r\n                          </td>\r\n                      </tr>\r\n                      <!--\r\n                      <tr>\r\n                        <th>{{ \"case_constraint\" | trans }}</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [ngClass]=\"{'border-bottom-dashed': application.case_constraint_id>0, 'border-bottom-red': !application.case_constraint_id}\"\r\n                          [(ngModel)]=\"application.case_constraint_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      -->\r\n                    </table>\r\n                  </div>\r\n\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block w3-block\" >\r\n                        <tr>\r\n                            <th>{{ \"registeration_date\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"date\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.registeration_date\" >\r\n                            </td>\r\n                        </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"application.qualification_set_number\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_method\" | trans }}</th>\r\n                        <td>\r\n                          <select\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                          [(ngModel)]=\"application.registration_method_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"set_number\" | trans }}</th>\r\n                          <td>\r\n                            <input\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"application.set_number\" >\r\n                          </td>\r\n                      </tr>\r\n                        <tr>\r\n                            <th>{{ \"coordination_password\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"password\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.password\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_code\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.acceptance_code\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_date\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"date\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.acceptance_date\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"phone_1\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.phone_1\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"gender\" | trans }}</th>\r\n                          <td>\r\n                            <select\r\n                            (change)=\"filterDataBaisedOnGender()\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                            [(ngModel)]=\"application.gender\">\r\n                              <option value=\"male\">{{ \"male\" | trans }}</option>\r\n                              <option value=\"female\">{{ \"female\" | trans }}</option>\r\n                            </select>\r\n                          </td>\r\n                        </tr>\r\n\r\n\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div\r\n            *ngIf=\"application.gender != 'female'\"\r\n            class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\r\n\r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"military_status\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.military_status_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"military_area\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.military_area_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"triple_number\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.triple_number\" >\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\r\n\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_name\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_name\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_national_id\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_national_id\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_address\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_address\" >\r\n                              </td>\r\n                            </tr>\r\n                        </table>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_phone\" | trans }}</th>\r\n                              <td>\r\n                                <input\r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_phone\" >\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"parent_job\" | trans }}</th>\r\n                              <td>\r\n                                <select\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.parent_job_id\">\r\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n                            <tr>\r\n                              <th>{{ \"relative_relation\" | trans }}</th>\r\n                              <td>\r\n                                <select\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.relative_relation_id\">\r\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>\r\n                              </td>\r\n                            </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\r\n\r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"nationality\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.nationality_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"language_1\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.language_1_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"language_2\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.language_2_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"country\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.country_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"government\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.government_id\">\r\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\r\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </ng-container>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"city\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                                [(ngModel)]=\"application.city_id\">\r\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\r\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </ng-container>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                        <tr>\r\n                            <th>{{ \"email\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.email\" >\r\n                            </td>\r\n                        </tr>\r\n                          <tr>\r\n                            <th>{{ \"religion\" | trans }}</th>\r\n                            <td>\r\n                              <select\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.religion\">\r\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\r\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\r\n                              </select>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"address\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.address\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"birth_address\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.birth_address\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"national_id_date\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.national_id_date\" >\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <th>{{ \"national_id_place\" | trans }}</th>\r\n                            <td>\r\n                              <input\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\r\n                              [(ngModel)]=\"application.national_id_place\" >\r\n                            </td>\r\n                          </tr>\r\n\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\r\n\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n\r\n\r\n                        <table class=\"table w3-block\" >\r\n                           <ng-container *ngFor=\"let item of applicationSettings.REQUIRED_DOCUMENTS\"  >\r\n                              <tr\r\n                              *ngIf=\"requiredDocumentList.get(item.id) > 0\"\r\n                              [ngClass]=\"{'w3-text-green': application['required_document_' + item.id]}\"\r\n                              >\r\n                                <th>\r\n                                  <i *ngIf=\"application['required_document_' + item.id]\"\r\n                                  class=\"fa fa-check-circle w3-text-green\"></i>\r\n\r\n                                  <i *ngIf=\"requiredDocumentList.get(item.id) == 1 && !application['required_document_' + item.id]\"\r\n                                  class=\"fa fa-exclamation-circle w3-text-red\"></i>\r\n                                  {{ item.name  }}\r\n                                </th>\r\n                                <th>{{ item.type | trans }}</th>\r\n                                <td>\r\n                                    <input\r\n                                    type=\"file\"\r\n                                    (change)=\"setFile($event, 'required_document_' + item.id, item.id)\"\r\n                                    class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"   >\r\n                                  </td>\r\n                              </tr>\r\n                           </ng-container>\r\n\r\n\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              <div class=\"custom-panel w3-display-container w3-round\">\r\n                  <div class=\"custom-panel-body\"  >\r\n                    <button mat-raised-button color=\"primary\" class=\"w3-margin-left\" [disabled]=\"isSubmitted\"  (click)=\"sendApplication()\" >{{ \"send application\" | trans }}</button>\r\n\r\n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\" routerLink=\"/adminision/application\" >{{ \"exit\" | trans }}</a>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/adminision/components/application/application-create/application-create.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-create/application-create.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWNyZWF0ZS9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcYWRtaW5pc2lvblxcY29tcG9uZW50c1xcYXBwbGljYXRpb25cXGFwcGxpY2F0aW9uLWNyZWF0ZVxcYXBwbGljYXRpb24tY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzaW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24tY3JlYXRlL2FwcGxpY2F0aW9uLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLHlDQUF3QyxFQUFBOztBQUcxQztFQUNFLHdDQUF1QyxFQUFBOztBQUd6QztFQUNFLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLHVDQUFzQztFQUN0Qyw4QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSx3QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx1REFBbUQsRUFBQTs7QUFHckQ7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxpQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCOztHQ1hDOztBRGVEO0VBQ0UsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzaW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24tY3JlYXRlL2FwcGxpY2F0aW9uLWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3JkZXItYm90dG9tLWRhc2hlZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWJvdHRvbS1yZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWRhc2hlZCB7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnNtYWxsLXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWdyYXkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jdXN0b20taW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweFxyXG4gIH1cclxuICBcclxuICAubW9kYWwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8haW1wb3J0YW50O1xyXG4gIH0gXHJcbiAgLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xyXG5cclxuICBzZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gICAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxuICB9XHJcbiAgICIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiAgKi9cbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4iXX0= */"

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
/* harmony import */ var src_app_shared_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/request */ "./src/app/shared/request.ts");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_13__);














var ApplicationCreateComponent = /** @class */ (function () {
    function ApplicationCreateComponent(applicationService, route, applicationSettingService) {
        var _this = this;
        this.applicationService = applicationService;
        this.route = route;
        this.applicationSettingService = applicationSettingService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_8__["AppModule"].doc;
        /**
         * application object
         */
        this.application = {};
        this.applicationSettings = _services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.isUpdate = false;
        this.isAzhar = false;
        this.qualificationGrade = 0;
        this.requiredDocumentList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_10__["HashTable"]();
        this.differentYearRequired = 0;
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
        this.col = "col-lg-10 col-md-10 col-sm-12";
        this.applicationSettingService.queueRequests();
        src_app_shared_request__WEBPACK_IMPORTED_MODULE_11__["Request"].fire();
        var id = this.route.snapshot.params['id'];
        if (id > 0) {
            !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_12__["Auth"].can('application_edit') ? Object(process__WEBPACK_IMPORTED_MODULE_13__["exit"])() : '';
            this.loadApplication(id);
            this.isUpdate = true;
        }
        else {
            !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_12__["Auth"].can('application_add') ? Object(process__WEBPACK_IMPORTED_MODULE_13__["exit"])() : '';
        }
        this.route.queryParams.subscribe(function (params) {
            var col = params['col'];
            if (col)
                _this.col = col;
        });
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
    ApplicationCreateComponent.prototype.validateOnQualificationDate = function () {
        var _this = this;
        if (!this.application.qualification_date)
            return false;
        this.differentYearRequired = 0;
        this.applicationSettings.SETTINGS.forEach(function (element) {
            if (element.id == 5)
                _this.differentYearRequired = element.value;
        });
        // current year
        var currentYear = new Date().getFullYear();
        var qualificationYear = new Date(this.application.qualification_date).getFullYear();
        var differentYear = currentYear - qualificationYear;
        console.log(differentYear);
        if (differentYear > this.differentYearRequired)
            return false;
        return true;
    };
    ApplicationCreateComponent.prototype.sendApplication = function () {
        if (!this.validate()) {
            this.setCurrentError(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('fill all requird data'));
            return _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('fill all requird data'));
        }
        if (!this.validateOnQualificationDate())
            return _shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('different year of qualification must be less of equal than ' + this.differentYearRequired));
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
            if (element.id == _this.application.qualification_types_id) {
                requiredGrade = element.grade;
                _this.qualificationGrade = requiredGrade;
            }
            if (condition) {
                levelId = element.level_id;
                changes = true;
            }
        });
        if (requiredGrade) {
            this.gradeError = _shared_helper__WEBPACK_IMPORTED_MODULE_4__["Helper"].trans('grade must be equal or bigger than ') + ' : ' + requiredGrade;
            this.setCurrentError(this.gradeError);
        }
        else {
            this.setCurrentError("");
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
    ApplicationCreateComponent.prototype.getQualificationGrade = function (qualificationId) {
        if (qualificationId === void 0) { qualificationId = null; }
        var grade = 0;
        if (!qualificationId)
            qualificationId = this.application.qualification_id;
        this.applicationSettings.QUALIFICATIONS.forEach(function (element) {
            if (element.id == qualificationId)
                grade = element.grade;
        });
        return grade;
    };
    ApplicationCreateComponent.prototype.checkIfAzhar = function () {
        if (this.application.qualification_id == 4)
            this.isAzhar = true;
        else
            this.isAzhar = false;
        if (this.application.azhar_total_grade &&
            this.application.azhar_religious_grade_total &&
            this.application.qualification_id == 4) {
            this.application.azhar_remind_grade = this.application.azhar_total_grade - this.application.azhar_religious_grade_total;
            var grade = this.getQualificationGrade(1) * this.application.azhar_remind_grade;
            grade /= this.qualificationGrade;
            this.application.grade = grade.toFixed(2);
            this.watchLevel();
        }
    };
    ApplicationCreateComponent.prototype.emptyData = function () {
        this.application.qualification_types_id = null;
        this.application.level_id = null;
        this.application.level_name = null;
        this.application.grade = 0;
    };
    ApplicationCreateComponent.prototype.filterDataBaisedOnGender = function () {
        if (this.application.gender == 'female') {
            this.doc.jquery('.military-info-panel').hide();
            this.doc.jquery('.military-info-button').hide();
        }
    };
    ApplicationCreateComponent.prototype.ngOnInit = function () {
    };
    ApplicationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-application-create',
            template: __webpack_require__(/*! ./application-create.component.html */ "./src/app/adminision/components/application/application-create/application-create.component.html"),
            styles: [__webpack_require__(/*! ./application-create.component.scss */ "./src/app/adminision/components/application/application-create/application-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _services_application_setting_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationSettingService"]])
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

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\r\n\r\n<div class=\"w3-display-bottomleft w3-padding\" style=\"position: fixed;z-index: 9999\">\r\n  <button permission=\"application_add\" mat-fab color=\"primary\" class=\"w3-large\" routerLink=\"/adminision/application/create\" style=\"margin: 5px\">\r\n    <span class=\"fa fa-plus\"></span>\r\n  </button>\r\n</div>\r\n<!--\r\n\r\n<div class=\"box box-primary  table-responsive\" >\r\n  <div class=\"box-header\">\r\n    <button class=\"btn btn-primary\" routerLink=\"/adminision/application/create\" style=\"margin: 5px\"  >\r\n      <span class=\"fa fa-plus\" ></span> {{ \"add\" | trans }}\r\n    </button>\r\n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  >\r\n      <span class=\"fa fa-trash\" ></span>\r\n    </button>\r\n  </div>\r\n  <br>\r\n</div>\r\n-->\r\n\r\n<div class=\"w3-row\" style=\"padding: 5px;\">\r\n  <div *ngIf=\"isLoad\" class=\"w3-block text-center w3-padding\">\r\n    <i class=\"fa fa-spin fa-refresh w3-jumbo w3-text-indigo\"></i>\r\n  </div>\r\n  <ng-container *ngIf=\"!isLoad\">\r\n\r\n    <ng-container *ngFor=\"let item of resources.data\">\r\n      <div class=\"{{ col }} student-list-col\">\r\n        <div class=\"media material-shadow w3-white w3-padding w3-display-container student-list-item w3-round\">\r\n          <div class=\"w3-display-topleft w3-padding\">\r\n            <div class=\"text-left\">\r\n              <a permission=\"application_edit\" href=\"#\" [routerLink]=\"['/adminision/application/', item.id]\" style=\"margin: 5px\"><i\r\n                  class=\"fa fa-edit btn btn-warning btn-sm material-shadow\"></i></a>\r\n\r\n              <a href=\"#\" [routerLink]=\"['/adminision/application/show/', item.id]\" style=\"margin: 5px\"><i\r\n                  class=\"fa fa-desktop btn btn-success btn-sm material-shadow\"></i></a>\r\n\r\n              <button *ngIf=\"item.can_convert_to_student\" class=\"btn btn-primary btn-sm material-shadow\"\r\n                (click)=\"enrollStudent(item.id)\" [disabled]=\"isEntrollSubmit\" style=\"margin: 5px\"><i class=\"fa\"\r\n                  [ngClass]=\"{'fa-user-circle': !isEntrollSubmit, 'fa-spin fa-spinner': isEntrollSubmit}\"></i>\r\n                {{ \"enroll student\" | trans }} </button>\r\n\r\n              <!--\r\n                  <a\r\n                  *ngIf=\"!item.can_convert_to_student\"\r\n                  href=\"#\"\r\n                  [routerLink]=\"['/account/safe/', item.id]\"\r\n                  style=\"margin: 5px\"\r\n                  class=\"material-shadow fa fa-money btn w3-indigo btn-sm\" > {{ \"pay\" | trans }} </a>\r\n                  -->\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"media-left\">\r\n            <a>\r\n              <img class=\"media-object w3-round\" [src]=\"item.personal_photo_url\" style=\"width: 100px;max-height: 210;\">\r\n            </a>\r\n          </div>\r\n          <div class=\"media-body\">\r\n            <h5 class=\"media-heading\">{{ item.name }}..</h5>\r\n            <table class=\"w3-tiny\">\r\n              <tr>\r\n                <th>{{ \"academic_year\" | trans }}</th>\r\n                <td>{{ item.academic_year? item.academic_year.name : '' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>{{ \"qualification\" | trans }}</th>\r\n                <td>{{ item.qualification? item.qualification.name : '' }}</td>\r\n              </tr>\r\n              <tr>\r\n                <th>{{ \"level\" | trans }}</th>\r\n                <td>{{ item.level? item.level.name : '' }}</td>\r\n              </tr>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </ng-container>\r\n\r\n\r\n\r\n</div>\r\n<br>\r\n<div class=\"text-center w3-center\">\r\n  <nav aria-label=\"Page navigation\">\r\n    <ul class=\"pagination\">\r\n      <li>\r\n        <a  class=\"btn\" [ngClass]=\"{'disabled': !resources.prev_page}\" (click)=\"loadResources(resources.prev_page)\"\r\n          aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n        </a>\r\n      </li>\r\n      <li *ngFor=\"let item of resources.pages_arr\">\r\n        <a class=\"btn\" [ngClass]=\"{'active w3-indigo': resources.current_page == item}\" (click)=\"loadResources(item)\">{{ item }}</a>\r\n      </li>\r\n      <li>\r\n        <a  class=\"btn\" [ngClass]=\"{'disabled': !resources.next_page}\" (click)=\"loadResources(resources.next_page)\"\r\n          aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n\r\n\r\n<!-- remove modal -->\r\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ \"remove applications\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\"></i>\r\n        <br>\r\n        {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/adminision/components/application/application-index/application-index.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-index/application-index.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-list-item {\n  /*height: 220px;*/\n  margin-bottom: 5px !important; }\n\n.student-list-col {\n  padding: 5px !important; }\n\n.student-container {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLWluZGV4L0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxhZG1pbmlzaW9uXFxjb21wb25lbnRzXFxhcHBsaWNhdGlvblxcYXBwbGljYXRpb24taW5kZXhcXGFwcGxpY2F0aW9uLWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1QkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmlzaW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24taW5kZXgvYXBwbGljYXRpb24taW5kZXguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZGVudC1saXN0LWl0ZW0ge1xyXG4gIC8qaGVpZ2h0OiAyMjBweDsqL1xyXG4gIG1hcmdpbi1ib3R0b206IDVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdHVkZW50LWxpc3QtY29sIHtcclxuICBwYWRkaW5nOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3R1ZGVudC1jb250YWluZXJ7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_8__);









var ApplicationIndexComponent = /** @class */ (function () {
    function ApplicationIndexComponent(applicationService, route) {
        this.applicationService = applicationService;
        this.route = route;
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
        this.col = "col-lg-12 col-md-12 col-sm-12 col-xs-12";
        !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_7__["Auth"].can('application_read') ? Object(process__WEBPACK_IMPORTED_MODULE_8__["exit"])() : '';
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'applications' }
        ];
        this.route.queryParams.subscribe(function (params) {
            var col = params['col'];
            /*if (col)
              this.col = col;*/
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_application_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
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

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\r\n      <div class=\"w3-white material-shadow safe-box\">\r\n        <div class=\"safe-box-header w3-xlarge\">\r\n          {{ \"show application\" | trans }}\r\n        </div>\r\n        <br>\r\n        <div class=\"border-bottom-dashed\" ></div>\r\n        <br>\r\n  \r\n        <div class=\"safe-box-body row\" >\r\n  \r\n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\r\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\r\n            <br> \r\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\r\n  \r\n              <div   \r\n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\" \r\n               >\r\n                {{ currentError }}\r\n              </div>\r\n\r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button> \r\n              \r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button> \r\n             \r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button> \r\n               \r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button> \r\n               \r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button> \r\n               \r\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button> \r\n               \r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\r\n  \r\n             \r\n  \r\n            <!--\r\n\r\n        => student basic info\r\n        name\t                  email\t\r\n        academic_years_id\t      grade\t\r\n        registeration_date\t    phone_1\r\n        registration_status_id\tregistration_method_id\r\n        qualification_date\t    qualification_set_number\t\r\n        qualification_types_id\tqualification_id\t\r\n        level_id\t              case_constraint_id\r\n        national_id\t            password  \r\n        acceptance_code\t        acceptance_date\t\r\n        status\t                writen_by\t\r\n        \r\n      \r\n        => additional info\r\n        \t\t \r\n        nationality_id\t        gender\t\r\n        language_1_id\t          language_2_id\t\r\n        city_id\t                government_id\t \r\n        country_id\t            religion \r\n        address\t                birth_address\t\r\n        national_id_date\t      national_id_place\t \r\n\r\n        => military info\r\n        military_status_id\t    military_area_id \r\n        triple_number\r\n        \r\n        => parent info\r\n        parent_name\t            parent_national_id\t\r\n        parent_job_id\t          parent_address\t\r\n        parent_phone\t          relative_relation_id\r\n        \r\n        => personal image\r\n        personal_photo\t\r\n\r\n        => required document\r\n        \r\n            -->\r\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\r\n  \r\n              <div class=\"custom-panel-body\"  >\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block\" >\r\n                      <tr>\r\n                        <th>{{ \"student name\" | trans }} *</th>\r\n                        <td>\r\n                          <input readonly  \r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                          [(ngModel)]=\"application.name\" >\r\n                        </td>\r\n                      </tr> \r\n                      <tr> \r\n                          <th>{{ \"email\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.email\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"academic_years\" | trans }} *</th>\r\n                        <td>\r\n                          <select readonly \r\n                          (change)=\"watchLevel()\"\r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                          [(ngModel)]=\"application.academic_years_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>  \r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"grade\" | trans }} *</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            (change)=\"watchLevel()\"\r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.grade\" >\r\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\r\n                              {{ gradeError }}\r\n                            </p>\r\n                          </td>\r\n                      </tr> \r\n                      <tr>\r\n                          <th>{{ \"registeration_date\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.registeration_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"registeration_date\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.registeration_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_status\" | trans }} *</th>\r\n                        <td>\r\n                          <select readonly \r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                          [(ngModel)]=\"application.registration_status_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>  \r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <th>{{ \"registration_method\" | trans }}</th>\r\n                        <td>\r\n                          <select readonly \r\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                          [(ngModel)]=\"application.registration_method_id\">\r\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                          </select>  \r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_date\" | trans }} *</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            type=\"date\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.qualification_date\" >\r\n                          </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            type=\"number\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.qualification_set_number\" >\r\n                          </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>  \r\n\r\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                    <table class=\"table w3-block w3-block\" >\r\n                        <tr>\r\n                          <th>{{ \"qualification\" | trans }} *</th>\r\n                          <td>\r\n                            <select readonly \r\n                            (change)=\"watchLevel()\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.qualification_id\">\r\n                              <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </select>  \r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"qualification_types\" | trans }} *</th>\r\n                          <td>\r\n                            <select readonly \r\n                            (change)=\"watchLevel()\"\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.qualification_types_id\">\r\n                              <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\r\n                                  <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </ng-container>\r\n                              \r\n                            </select>  \r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"level\" | trans }}</th>\r\n                          <td>\r\n                            <input readonly  \r\n                            type=\"text\"\r\n                            readonly\r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.level_name\" >\r\n                            <input readonly  \r\n                            type=\"hidden\"  \r\n                            [(ngModel)]=\"application.level_id\" >\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <th>{{ \"case_constraint\" | trans }}</th>\r\n                          <td>\r\n                            <select readonly \r\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                            [(ngModel)]=\"application.case_constraint_id\">\r\n                              <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                            </select>  \r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"national_id\" | trans }} *</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.national_id\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"coordination_password\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              type=\"password\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.password\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_code\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.acceptance_code\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"acceptance_date\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              type=\"date\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.acceptance_date\" >\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <th>{{ \"phone_1\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.phone_1\" >\r\n                            </td>\r\n                        </tr>\r\n\r\n                      \r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n            </div>\r\n \r\n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\r\n    \r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"military_status\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.military_status_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr>  \r\n                          <tr>\r\n                            <th>{{ \"military_area\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.military_area_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr>  \r\n                      </table>\r\n                    </div>  \r\n  \r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" > \r\n                          <tr>\r\n                            <th>{{ \"triple_number\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              type=\"text\"\r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.triple_number\" >\r\n                            </td>\r\n                          </tr> \r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n    \r\n              </div>\r\n \r\n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\r\n      \r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block\" >\r\n                            <tr>\r\n                              <th>{{ \"parent_name\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly  \r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.parent_name\" >\r\n                              </td>\r\n                            </tr> \r\n                            <tr>\r\n                              <th>{{ \"parent_national_id\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly  \r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.parent_national_id\" >\r\n                              </td>\r\n                            </tr> \r\n                            <tr>\r\n                              <th>{{ \"parent_address\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly  \r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.parent_address\" >\r\n                              </td>\r\n                            </tr>  \r\n                        </table>\r\n                      </div>  \r\n    \r\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                        <table class=\"table w3-block w3-block\" > \r\n                            <tr>\r\n                              <th>{{ \"parent_phone\" | trans }}</th>\r\n                              <td>\r\n                                <input readonly  \r\n                                type=\"text\"\r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.parent_phone\" >\r\n                              </td>\r\n                            </tr> \r\n                            <tr>\r\n                              <th>{{ \"parent_job\" | trans }}</th>\r\n                              <td>\r\n                                <select readonly \r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.parent_job_id\">\r\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>  \r\n                              </td>\r\n                            </tr>   \r\n                            <tr>\r\n                              <th>{{ \"relative_relation\" | trans }}</th>\r\n                              <td>\r\n                                <select readonly \r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.relative_relation_id\">\r\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </select>  \r\n                              </td>\r\n                            </tr>  \r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n      \r\n                </div>\r\n\r\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\r\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\r\n    \r\n                <div class=\"custom-panel-body\"  >\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"nationality\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.nationality_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"gender\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.gender\">\r\n                                <option value=\"male\">{{ \"male\" | trans }}</option>\r\n                                <option value=\"female\">{{ \"female\" | trans }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"language_1\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.language_1_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"language_2\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.language_2_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"country\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.country_id\">\r\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"government\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.government_id\">\r\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\r\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                              </ng-container> \r\n                              </select>  \r\n                            </td>\r\n                          </tr>  \r\n                      </table>\r\n                    </div>  \r\n  \r\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\r\n                      <table class=\"table w3-block w3-block\" >\r\n                          <tr>\r\n                            <th>{{ \"city\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                                [(ngModel)]=\"application.city_id\">\r\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\r\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                                </ng-container> \r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"religion\" | trans }}</th>\r\n                            <td>\r\n                              <select readonly \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.religion\">\r\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\r\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\r\n                              </select>  \r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"address\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.address\" >\r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"birth_address\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.birth_address\" >\r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"national_id_date\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.national_id_date\" >\r\n                            </td>\r\n                          </tr> \r\n                          <tr>\r\n                            <th>{{ \"national_id_place\" | trans }}</th>\r\n                            <td>\r\n                              <input readonly  \r\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \r\n                              [(ngModel)]=\"application.national_id_place\" >\r\n                            </td>\r\n                          </tr> \r\n                        \r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n    \r\n              </div>\r\n           \r\n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\r\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\r\n      \r\n                  <div class=\"custom-panel-body\"  >\r\n                    <div class=\"row\">\r\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n                        <div class=\"row w3-padding\" >\r\n                          <div class=\"w3-padding text-center\" style=\"float: right;min-width: 120px;\" *ngFor=\"let item of application.student_required_document\" >\r\n                              <a [href]=\"item.path_url\" target=\"_blank\"  >\r\n                                  <img [src]=\"item.path_url\"  class=\" w3-round material-shadow w3-center\" style=\"height: 100px;\" >\r\n                                  <br>\r\n                                  {{ item.required_document.name  }}\r\n                              </a>\r\n                          </div>\r\n                        </div> \r\n                      </div>   \r\n                    </div>\r\n                  </div>\r\n      \r\n                </div>\r\n   \r\n              <div class=\"custom-panel w3-display-container w3-round\">\r\n                  <div class=\"custom-panel-body\"  > \r\n                     \r\n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\"  routerLink=\"/adminision/application\" >{{ \"exit\" | trans }}</a>\r\n                  </div>\r\n      \r\n                </div>\r\n                  \r\n          </div>\r\n  \r\n  \r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n   \r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/adminision/components/application/application-show/application-show.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/adminision/components/application/application-show/application-show.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px;\n  background-color: transparent !important; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc2lvbi9jb21wb25lbnRzL2FwcGxpY2F0aW9uL2FwcGxpY2F0aW9uLXNob3cvRTpcXHByb2plY3RcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXGFkbWluaXNpb25cXGNvbXBvbmVudHNcXGFwcGxpY2F0aW9uXFxhcHBsaWNhdGlvbi1zaG93XFxhcHBsaWNhdGlvbi1zaG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzaW9uL2NvbXBvbmVudHMvYXBwbGljYXRpb24vYXBwbGljYXRpb24tc2hvdy9hcHBsaWNhdGlvbi1zaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFDRixFQUFBOztBQUVBO0VBQ0UseUNBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsdUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsdUNBQXNDO0VBQ3RDLDhCQUE2QixFQUFBOztBQUkvQjtFQUNFLDZCQUE0QjtFQUM1QixzQkFBcUI7RUFDckIscUJBQW9CO0VBQ3BCLHNCQUFxQjtFQUNyQixrQ0FBaUM7RUFDakMsNkJBQTRCO0VBQzVCLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLHdCQUF1QixFQUFBOztBQUd6QjtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUFnQjtFQUNoQix3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0dDVkM7O0FEY0Q7RUFDRSx1QkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXNpb24vY29tcG9uZW50cy9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi1zaG93L2FwcGxpY2F0aW9uLXNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweFxyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1kYXNoZWQge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXBhbmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1ncmF5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuICAvKlxyXG4gICAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4gICovXHJcblxyXG4gIHNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiAgKi9cbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4iXX0= */"

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

module.exports = " \r\n<!-- remove modal -->\r\n<div class=\"modal fade\" id=\"createModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">{{ \"add required document\" | trans }}</h4>\r\n      </div>\r\n      <div class=\"modal-body text-center\">\r\n        <table class=\"table\">\r\n          <tr>\r\n            <th>{{ \"name\" | trans }} *</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"type\" | trans }} *</th>\r\n            <td>\r\n              <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.type\"  >\r\n                <option value=\"original\">{{ \"original\" | trans }}</option>\r\n                <option value=\"copy\">{{ \"copy\" | trans }}</option>\r\n                <option value=\"both\">{{ \"both\" | trans }}</option>\r\n              </select> \r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th>{{ \"notes\" | trans }}</th>\r\n            <td>\r\n              <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" >\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer text-center\"> \r\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#createModal').modal('hide')\" >{{ \"close\" | trans }}</button>\r\n          <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"addResource()\" >{{ \"add\" | trans }}</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->"

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
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_7__);








var RequiredDocumentCreateComponent = /** @class */ (function () {
    function RequiredDocumentCreateComponent(requiredDocumentService) {
        this.requiredDocumentService = requiredDocumentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"].doc;
        this.resource = {};
        this.isSubmitted = false;
        if (this.resource.id) {
            !_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].can('required_document_edit') ? Object(process__WEBPACK_IMPORTED_MODULE_7__["exit"])() : '';
        }
        else {
            !_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].can('required_document_add') ? Object(process__WEBPACK_IMPORTED_MODULE_7__["exit"])() : '';
        }
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

module.exports = "<div class=\"w3-block w3-row\">\r\n  <div class=\"w3-white material-shadow safe-box  \">\r\n    <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n      {{ \"required_documents\" | trans }}\r\n    </div>\r\n    <div class=\"border-bottom-dashed\"></div>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-lg-12\">\r\n        <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n\r\n          <div class=\"custom-panel-body table-responsive w3-padding w3-center\" style=\"height: 400px;\" >\r\n            <table class=\" table-bordered\" >\r\n              <thead>\r\n                <th>#</th>\r\n                <th>{{ \"name\" | trans }}</th>\r\n                <th>{{ \"type\" | trans }}</th>\r\n                <th></th>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of data index as i\" >\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>\r\n                    <input type=\"text\" class=\"form-control input-sm\" [(ngModel)]=\"item.name\" >\r\n                  </td>\r\n                  <td>\r\n                    <select  class=\"form-control input-sm\" [(ngModel)]=\"item.type\" >\r\n                      <option value=\"original\">{{ \"original\" | trans }}</option>\r\n                      <option value=\"copy\">{{ \"copy\" | trans }}</option>\r\n                      <option value=\"both\">{{ \"both\" | trans }}</option>\r\n                    </select>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"btn btn-success\"\r\n                    [disabled]=\"isSubmitted\"\r\n                    (click)=\"send(item, i)\" >\r\n                    <i *ngIf=\"!isSubmitted\" class=\"fa fa-check\" ></i>\r\n                    <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                  </button>\r\n                    <button class=\"btn btn-danger\"\r\n                    [disabled]=\"isSubmitted\"\r\n                    (click)=\"destroy(item, i)\" >\r\n                      <i *ngIf=\"!isSubmitted\" class=\"fa fa-trash\" ></i>\r\n                      <i *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td>\r\n                    <button class=\"fa fa-plus w3-block btn btn-default btn-flat\" (click)=\"add()\" ></button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var src_app_settings_services_setting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/settings/services/setting.service */ "./src/app/settings/services/setting.service.ts");
/* harmony import */ var src_app_settings_setting_template__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/settings/setting-template */ "./src/app/settings/setting-template.ts");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_5__);






var RequiredDocumentIndexComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RequiredDocumentIndexComponent, _super);
    function RequiredDocumentIndexComponent(settingService) {
        var _this = _super.call(this, settingService) || this;
        _this.settingService = settingService;
        !src_app_shared_auth__WEBPACK_IMPORTED_MODULE_4__["Auth"].can('required_document_read') ? Object(process__WEBPACK_IMPORTED_MODULE_5__["exit"])() : '';
        _this.baseUrl = "required_documents";
        _this.requiredFields = ['name', 'type'];
        _this.get();
        return _this;
    }
    RequiredDocumentIndexComponent.prototype.ngOnInit = function () {
    };
    RequiredDocumentIndexComponent.prototype.action = function () {
        this.get();
    };
    RequiredDocumentIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-required-document-index',
            template: __webpack_require__(/*! ./required-document-index.component.html */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.html"),
            styles: [__webpack_require__(/*! ./required-document-index.component.scss */ "./src/app/adminision/components/required_document/required-document-index/required-document-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_settings_services_setting_service__WEBPACK_IMPORTED_MODULE_2__["SettingService"]])
    ], RequiredDocumentIndexComponent);
    return RequiredDocumentIndexComponent;
}(src_app_settings_setting_template__WEBPACK_IMPORTED_MODULE_3__["SettingTemplate"]));



/***/ }),

/***/ "./src/app/adminision/components/required_document/required-document-update/required-document-update.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/adminision/components/required_document/required-document-update/required-document-update.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n<!-- remove modal -->\r\n<div class=\"modal fade\" id=\"updateModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{ \"add required document\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body text-center\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <th>{{ \"name\" | trans }} *</th>\r\n              <td>\r\n                <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.name\" >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"type\" | trans }} *</th>\r\n              <td>\r\n                <select class=\"form-control input-sm\"  [(ngModel)]=\"resource.type\"  >\r\n                  <option value=\"original\">{{ \"original\" | trans }}</option>\r\n                  <option value=\"copy\">{{ \"copy\" | trans }}</option>\r\n                  <option value=\"both\">{{ \"both\" | trans }}</option>\r\n                </select> \r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>{{ \"notes\" | trans }}</th>\r\n              <td>\r\n                <input type=\"text\" class=\"form-control input-sm\"  [(ngModel)]=\"resource.notes\" >\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer text-center\"> \r\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"doc.jquery('#updateModal').modal('hide')\" >{{ \"close\" | trans }}</button>\r\n            <button class=\"btn btn-primary\" [disabled]=\"isSubmitted\" (click)=\"updateResource()\" >{{ \"save\" | trans }}</button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->"

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



/***/ }),

/***/ "./src/app/settings/services/setting.service.ts":
/*!******************************************************!*\
  !*** ./src/app/settings/services/setting.service.ts ***!
  \******************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var SettingService = /** @class */ (function () {
    function SettingService(http) {
        this.http = http;
        this.baseUrl = "";
        this.get();
    }
    /**
     * get services from api
     *
     */
    SettingService.prototype.get = function () {
        return this.http.get(this.baseUrl + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    SettingService.prototype.store = function (data) {
        return this.http.post(this.baseUrl + '/store' + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    SettingService.prototype.update = function (data) {
        return this.http.post(this.baseUrl + '/update/' + data.id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    SettingService.prototype.destroy = function (id) {
        return this.http.post(this.baseUrl + '/delete/' + id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/settings/setting-template.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/setting-template.ts ***!
  \**********************************************/
/*! exports provided: SettingTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingTemplate", function() { return SettingTemplate; });
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/message */ "./src/app/shared/message.ts");


var SettingTemplate = /** @class */ (function () {
    function SettingTemplate(settingService) {
        this.settingService = settingService;
        this.item = {};
        this.isSubmitted = false;
        this.data = [];
        this.requiredFields = [];
        this.baseUrl = null;
        this.settingService.baseUrl = this.baseUrl;
    }
    SettingTemplate.prototype.action = function (res) {
    };
    SettingTemplate.prototype.get = function () {
        var _this = this;
        this.settingService.baseUrl = this.baseUrl;
        this.settingService.get().subscribe(function (res) {
            _this.data = res;
        });
    };
    SettingTemplate.prototype.add = function () {
        var item = {};
        this.data.push(item);
    };
    SettingTemplate.prototype.validate = function (item) {
        if (item === void 0) { item = this.item; }
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!item[element])
                valid = false;
        });
        return valid;
    };
    SettingTemplate.prototype.send = function (item, index) {
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        this.settingService.baseUrl = this.baseUrl;
        if (item.id)
            this.update(item, index = null);
        else
            this.store(item, index = null);
    };
    SettingTemplate.prototype.store = function (item, index) {
        var _this = this;
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        if (!this.validate(item))
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('fill all data'));
        this.isSubmitted = true;
        this.settingService.store(item).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                //
                if (index)
                    _this.data[index] = res.data;
                var arr = _this.data;
                _this.data = [];
                _this.data = arr;
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            _this.action(res);
            _this.isSubmitted = false;
        });
    };
    SettingTemplate.prototype.update = function (item, index) {
        var _this = this;
        if (item === void 0) { item = this.item; }
        if (index === void 0) { index = null; }
        if (!this.validate(item))
            return _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('fill all data'));
        this.isSubmitted = true;
        this.settingService.update(item).subscribe(function (res) {
            if (res.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                //
                if (index)
                    _this.data[index] = res.data;
                var arr = _this.data;
                _this.data = [];
                _this.data = arr;
            }
            else
                _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
            _this.action(res);
            _this.isSubmitted = false;
        });
    };
    SettingTemplate.prototype.destroy = function (item, index) {
        var _this = this;
        this.settingService.baseUrl = this.baseUrl;
        var self = this;
        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].confirm(_shared_helper__WEBPACK_IMPORTED_MODULE_0__["Helper"].trans('are you sure'), function () {
            if (item.id) {
                _this.isSubmitted = true;
                _this.settingService.destroy(item.id).subscribe(function (res) {
                    if (res.status == 1)
                        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].success(res.message);
                    else
                        _shared_message__WEBPACK_IMPORTED_MODULE_1__["Message"].error(res.message);
                    _this.action(res);
                    _this.isSubmitted = false;
                });
            }
            // remove item from array
            _this.data.splice(index, index + 1);
            var arr = _this.data;
            _this.data = [];
            _this.data = arr;
        });
    };
    return SettingTemplate;
}());



/***/ })

}]);
//# sourceMappingURL=default~adminision-adminision-module~affairs-affairs-module.js.map