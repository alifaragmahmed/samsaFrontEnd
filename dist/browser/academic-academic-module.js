(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academic-academic-module"],{

/***/ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/angular-hashtable/fesm5/angular-hashtable.js ***!
  \*******************************************************************/
/*! exports provided: HashTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashTable", function() { return HashTable; });
/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-hashtable.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
* This class represents the class definition.
*/
/**
 * @template T, L
 */
var  /*
* This class represents the class definition.
*/
/**
 * @template T, L
 */
HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = {};
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.put = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.table['v_' + key] = value;
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.table['v_' + key];
    };
    /**
     * @return {?}
     */
    HashTable.prototype.getAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var vector = Array.from(Object.keys(this.table), (/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return _this.table[k]; }));
        return vector;
    };
    /**
     * @return {?}
     */
    HashTable.prototype.getKeys = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var keys = Array.from(Object.keys(this.table), (/**
         * @param {?} k
         * @return {?}
         */
        function (k) { return k.substring(2); }));
        return keys;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.has = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['v_' + key] !== 'undefined') {
            return true;
        }
        return false;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        delete this.table['v_' + key];
        return this;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.putArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        this.table['a_' + key].push(value);
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.getArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['a_' + key] === 'undefined') {
            this.table['a_' + key] = [];
        }
        return this.table['a_' + key];
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.removeArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            this.table['a_' + key].splice(this.table['a_' + key].indexOf(value), 1);
        }
        return this;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    HashTable.prototype.hasArray = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    HashTable.prototype.hasinArray = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (typeof this.table['a_' + key] !== 'undefined') {
            if (this.table['a_' + key].indexOf(value) !== -1) {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    HashTable.prototype.size = /**
     * @return {?}
     */
    function () {
        return Object.keys(this.table).length;
    };
    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /***************************************************/
    /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /**
     * ***********************************************
     * @param {?} callback
     * @return {?}
     */
    HashTable.prototype.forEach = /***************************************************/
    // ForEach Function
    // forEach(callback: function(key,value) )
    // @callback: A Callback function use to iterate the Object  
    //
    // Iterate all objects Hashtable
    // A used like arguments in the callback function
    /**
     * ***********************************************
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        for (var key in this.table) {
            callback(key.substring(2), this.table[key]);
        }
    };
    return HashTable;
}());
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-hashtable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-hashtable.js.map


/***/ }),

/***/ "./src/app/academic/academic-route.module.ts":
/*!***************************************************!*\
  !*** ./src/app/academic/academic-route.module.ts ***!
  \***************************************************/
/*! exports provided: AcademicRouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicRouteModule", function() { return AcademicRouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_academic_plan_academic_plan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/academic-plan/academic-plan.component */ "./src/app/academic/components/academic-plan/academic-plan.component.ts");
/* harmony import */ var _components_academic_setting_academic_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/academic-setting/academic-setting.component */ "./src/app/academic/components/academic-setting/academic-setting.component.ts");
/* harmony import */ var _components_open_course_open_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/open-course/open-course.component */ "./src/app/academic/components/open-course/open-course.component.ts");






var routes = [
    {
        path: 'plan',
        component: _components_academic_plan_academic_plan_component__WEBPACK_IMPORTED_MODULE_3__["AcademicPlanComponent"]
    },
    {
        path: 'setting',
        component: _components_academic_setting_academic_setting_component__WEBPACK_IMPORTED_MODULE_4__["AcademicSettingComponent"]
    },
    {
        path: 'open-course',
        component: _components_open_course_open_course_component__WEBPACK_IMPORTED_MODULE_5__["OpenCourseComponent"]
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AcademicRouteModule = /** @class */ (function () {
    //
    function AcademicRouteModule() {
    }
    AcademicRouteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
        //
    ], AcademicRouteModule);
    return AcademicRouteModule;
}());



/***/ }),

/***/ "./src/app/academic/academic.component.html":
/*!**************************************************!*\
  !*** ./src/app/academic/academic.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  academic works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/academic/academic.component.scss":
/*!**************************************************!*\
  !*** ./src/app/academic/academic.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljL2FjYWRlbWljLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/academic/academic.component.ts":
/*!************************************************!*\
  !*** ./src/app/academic/academic.component.ts ***!
  \************************************************/
/*! exports provided: AcademicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicComponent", function() { return AcademicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AcademicComponent = /** @class */ (function () {
    function AcademicComponent() {
    }
    AcademicComponent.prototype.ngOnInit = function () {
    };
    AcademicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic',
            template: __webpack_require__(/*! ./academic.component.html */ "./src/app/academic/academic.component.html"),
            styles: [__webpack_require__(/*! ./academic.component.scss */ "./src/app/academic/academic.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AcademicComponent);
    return AcademicComponent;
}());



/***/ }),

/***/ "./src/app/academic/academic.module.ts":
/*!*********************************************!*\
  !*** ./src/app/academic/academic.module.ts ***!
  \*********************************************/
/*! exports provided: AcademicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicModule", function() { return AcademicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _academic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academic.component */ "./src/app/academic/academic.component.ts");
/* harmony import */ var _components_academic_plan_academic_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/academic-plan/academic-plan.component */ "./src/app/academic/components/academic-plan/academic-plan.component.ts");
/* harmony import */ var _components_create_course_form_create_course_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create-course-form/create-course-form.component */ "./src/app/academic/components/create-course-form/create-course-form.component.ts");
/* harmony import */ var _components_create_course_category_form_create_course_category_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/create-course-category-form/create-course-category-form.component */ "./src/app/academic/components/create-course-category-form/create-course-category-form.component.ts");
/* harmony import */ var _components_create_degree_map_form_create_degree_map_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-degree-map-form/create-degree-map-form.component */ "./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.ts");
/* harmony import */ var _academic_route_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./academic-route.module */ "./src/app/academic/academic-route.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_academic_setting_academic_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/academic-setting/academic-setting.component */ "./src/app/academic/components/academic-setting/academic-setting.component.ts");
/* harmony import */ var _components_open_course_open_course_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/open-course/open-course.component */ "./src/app/academic/components/open-course/open-course.component.ts");













var AcademicModule = /** @class */ (function () {
    function AcademicModule() {
    }
    AcademicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _academic_component__WEBPACK_IMPORTED_MODULE_3__["AcademicComponent"],
                _components_academic_plan_academic_plan_component__WEBPACK_IMPORTED_MODULE_4__["AcademicPlanComponent"],
                _components_create_course_form_create_course_form_component__WEBPACK_IMPORTED_MODULE_5__["CreateCourseFormComponent"],
                _components_create_course_category_form_create_course_category_form_component__WEBPACK_IMPORTED_MODULE_6__["CreateCourseCategoryFormComponent"],
                _components_create_degree_map_form_create_degree_map_form_component__WEBPACK_IMPORTED_MODULE_7__["CreateDegreeMapFormComponent"],
                _components_academic_setting_academic_setting_component__WEBPACK_IMPORTED_MODULE_11__["AcademicSettingComponent"],
                _components_open_course_open_course_component__WEBPACK_IMPORTED_MODULE_12__["OpenCourseComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _academic_route_module__WEBPACK_IMPORTED_MODULE_8__["AcademicRouteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_CHECKBOX_CLICK_ACTION"], useValue: 'check' }
            ]
        })
    ], AcademicModule);
    return AcademicModule;
}());



/***/ }),

/***/ "./src/app/academic/components/academic-plan/academic-plan.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/academic/components/academic-plan/academic-plan.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"w3-white material-shadow safe-box\">\r\n      <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\" >\r\n        {{ \"register academic plan\" | trans }}\r\n      </div>\r\n      <div class=\"border-bottom-dashed\" ></div>\r\n      <br>\r\n\r\n      <div class=\"safe-box-body row\" >\r\n\r\n        <!-- courses panel -->\r\n        <div class=\"col-lg-9 col-md-9 col-sm-12\">\r\n          <!-- course categories panel -->\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n            <div class=\"custom-panel-title\" >{{ \"filter\" | trans }}</div>\r\n            <div class=\"custom-panel-body table-responsive\"  >\r\n\r\n              <table class=\"table table-bordered\" >\r\n                <tr>\r\n                  <th>{{ \"course category\" }}</th>\r\n                  <td>\r\n                    <select class=\"w3-round-xxlarge select2 form-control filter-category\"   multiple >\r\n                      <option *ngFor=\"let item of categories\" value=\"{{ item.id }}\">{{ item.name }}</option>\r\n                    </select>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                    <button\r\n                    mat-raised-button color=\"primary\"\r\n                    (click)=\"filter()\" style=\"margin: 5px\" > {{ \"search\" | trans}} </button>\r\n                  </td>\r\n                  <td></td>\r\n                  <td></td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n            <div class=\"custom-panel-title\" >{{ \"courses\" | trans }}</div>\r\n            <div class=\"custom-panel-body table-responsive\"  >\r\n              <table class=\"table-bordered text-center w3-tiny\" style=\"width: 100%\" >\r\n                <ng-container *ngFor=\"let row of categories index as counter\" >\r\n                  <tr class=\"w3-light-gray category-row category-{{ row.id }}\" >\r\n                    <th>{{ counter + 1 }}</th>\r\n                    <th >{{ row.name }}</th>\r\n                    <th>{{ row.required_hours }}</th>\r\n                  </tr>\r\n                  <tr class=\"category-row category-{{ row.id }}\" >\r\n                    <td colspan=\"3\" >\r\n                      <table class=\"table-bordered text-center\"  style=\"width: 100%\" >\r\n                        <tr  >\r\n                          <th>#</th>\r\n                          <th>{{ \"name\" | trans }}</th>\r\n                          <th>{{ \"code\" | trans }}</th>\r\n                          <th>{{ \"credit_hour\" | trans }}</th>\r\n                          <th>{{ \"level\" | trans }}</th>\r\n                          <th>{{ \"division\" | trans }}</th>\r\n                          <th>{{ \"year_work_degree\" | trans }}</th>\r\n                          <th>{{ \"practical_degree\" | trans }}</th>\r\n                          <th>{{ \"academic_degree\" | trans }}</th>\r\n                          <th>{{ \"small_degree\" | trans }}</th>\r\n                          <th>{{ \"large_degree\" | trans }}</th>\r\n                          <th>{{ \"has_project\" | trans }}</th>\r\n                          <th>{{ \"is_required\" | trans }}</th>\r\n                          <th>{{ \"book_price\" | trans }}</th>\r\n                          <th>{{ \"failed_degree\" | trans }}</th>\r\n                          <th>{{ \"prequsites\" | trans }}</th>\r\n                          <th>{{ \"notes\" | trans }}</th>\r\n                          <th></th>\r\n                        </tr>\r\n                        <tr *ngFor=\"let item of row.courses index as i\" >\r\n                          <td>{{ i + 1 }}</td>\r\n                          <td>{{ item.name }}</td>\r\n                          <td>{{ item.code }}</td>\r\n                          <td>{{ item.credit_hour }}</td>\r\n                          <td>{{ item.level? item.level.name : '' }}</td>\r\n                          <td>{{ item.division? item.division.name : '' }}</td>\r\n                          <td>{{ item.year_work_degree }}</td>\r\n                          <td>{{ item.practical_degree }}</td>\r\n                          <td>{{ item.academic_degree }}</td>\r\n                          <td>{{ item.small_degree }}</td>\r\n                          <td>{{ item.large_degree }}</td>\r\n                          <td>\r\n                            <i *ngIf=\"item.has_project\" class=\"fa fa-check-square w3-text-green\" ></i>\r\n                            <i *ngIf=\"!item.has_project\" class=\"fa fa-window-close-o w3-text-red\" ></i>\r\n                          </td>\r\n                          <td>\r\n                            <i *ngIf=\"item.is_required\" class=\"fa fa-check-square w3-text-green\" ></i>\r\n                            <i *ngIf=\"!item.is_required\" class=\"fa fa-window-close-o w3-text-red\" ></i>\r\n                          </td>\r\n                          <td>{{ item.book_price }}</td>\r\n                          <td>{{ item.failed_degree }}</td>\r\n                          <td>{{ item.prerequsites_names }}</td>\r\n                          <td>{{ item.notes }}</td>\r\n                          <td>\r\n                            <div style=\"width: 100px\" >\r\n                              <i class=\"fa fa-edit w3-text-orange btn\" (click)=\"showCourseForm(item)\" ></i>\r\n\r\n                              <i *ngIf=\"item.can_delete\" (click)=\"remove('COURSE', item, i)\" class=\"fa fa-trash w3-text-red btn\" ></i>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                      <br>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </table>\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!-- course categories panel -->\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n            <div class=\"custom-panel-body table-responsive w3-padding\"  >\r\n              <button mat-raised-button color=\"primary\" (click)=\"showCourseForm()\" style=\"margin: 5px\" ><i class=\"fa fa-send-o\"></i> {{ \"create course\" | trans }} </button>\r\n\r\n              <button mat-raised-button color=\"primary\" (click)=\"showCourseCategoryForm()\" style=\"margin: 5px\" ><i class=\"fa fa-send-o\"></i> {{ \"create course category\" | trans }} </button>\r\n\r\n              <button mat-raised-button color=\"primary\" (click)=\"showDegreeMapForm()\" style=\"margin: 5px\" ><i class=\"fa fa-send-o\"></i> {{ \"create degree map\" | trans}} </button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-lg-3 col-md-3 col-sm-12\">\r\n\r\n\r\n          <!-- course categories panel -->\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n            <div class=\"custom-panel-title\" >{{ \"course category\" | trans }}</div>\r\n            <div class=\"custom-panel-body table-responsive\"  >\r\n\r\n              <table class=\"w3-tiny table-bordered text-center w3-block\" >\r\n                <tr >\r\n                  <th>{{ \"#\" }}</th>\r\n                  <th>{{ \"name\" | trans }}</th>\r\n                  <th>{{ \"total_degree\" | trans }}</th>\r\n                  <th>{{ \"required_degree\" | trans }}</th>\r\n                  <th></th>\r\n                </tr>\r\n\r\n                <tr *ngFor=\"let item of categories index as i\" >\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ item.name }}</td>\r\n                  <td>{{ item.total_hours }}</td>\r\n                  <td>{{ item.required_hours }}</td>\r\n                  <td>\r\n                    <div style=\"width: 100px\" >\r\n                      <i class=\"fa fa-edit w3-text-orange btn\" (click)=\"showCourseCategoryForm(item)\" ></i>\r\n\r\n                    <i *ngIf=\"item.can_delete\" (click)=\"remove('COURSE_CATEGORY', item, i)\" class=\"fa fa-trash w3-text-red btn\" ></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n              <button class=\"btn btn-default w3-margin\" class=\"w3-margin\" (click)=\"showCourseCategoryForm(null)\" ><i class=\"fa fa-plus\"></i></button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n\r\n          <!-- course categories panel -->\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n            <div class=\"custom-panel-title\" >{{ \"degree map\" | trans }}</div>\r\n            <div class=\"custom-panel-body table-responsive\"  >\r\n\r\n              <table class=\"w3-tiny table-bordered text-center w3-block\"  >\r\n                <tr >\r\n                  <th>{{ \"#\" }}</th>\r\n                  <th>{{ \"from\" | trans }}</th>\r\n                  <th>{{ \"to\" | trans }}</th>\r\n                  <th>{{ \"key\" | trans }}</th>\r\n                  <th>{{ \"gpa\" | trans }}</th>\r\n                  <th>{{ \"name\" | trans }}</th>\r\n                  <th></th>\r\n                </tr>\r\n\r\n                <tr *ngFor=\"let item of degreeMaps index as i\" >\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ item.percent_from  }}%</td>\r\n                  <td>{{ item.percent_to  }}%</td>\r\n                  <td>{{ item.key }}</td>\r\n                  <td>{{ item.gpa }}</td>\r\n                  <td>{{ item.name }}</td>\r\n                  <td>\r\n                    <div style=\"width: 100px\" >\r\n                      <i class=\"fa fa-edit w3-text-orange btn\" (click)=\"showDegreeMapForm(item)\" ></i>\r\n                    <i *ngIf=\"item.can_delete\" (click)=\"remove('DEGREE_MAP', item, i)\" class=\"fa fa-trash w3-text-red btn\" ></i>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n              <button   class=\"btn btn-default w3-margin\" class=\"w3-margin\" (click)=\"showDegreeMapForm(null)\"  ><i class=\"fa fa-plus\"></i></button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <app-create-course-form [course]=\"course\" [updateView]=\"updateView\" [categories]=\"categories\" ></app-create-course-form>\r\n\r\n  <app-create-degree-map-form [degreeMap]=\"degreeMap\" [updateView]=\"updateView\" ></app-create-degree-map-form>\r\n\r\n  <app-create-course-category-form [courseCategory]=\"courseCategory\" [updateView]=\"updateView\" ></app-create-course-category-form>\r\n"

/***/ }),

/***/ "./src/app/academic/components/academic-plan/academic-plan.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/academic/components/academic-plan/academic-plan.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9hY2FkZW1pYy1wbGFuL0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxhY2FkZW1pY1xcY29tcG9uZW50c1xcYWNhZGVtaWMtcGxhblxcYWNhZGVtaWMtcGxhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9hY2FkZW1pYy1wbGFuL2FjYWRlbWljLXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7Q0NYQzs7QURlRDtFQUNFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usd0JBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSx1QkFBc0I7RUFDdEIsMEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9hY2FkZW1pYy1wbGFuL2FjYWRlbWljLXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHhcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1kYXNoZWQge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICByaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcbiIsIi5zYWZlLWJveCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogNXB4OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4qL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmZpbHRlci10b3Age1xuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi5maWx0ZXItc2lkZSB7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLnczLXVsIGxpIHtcbiAgcGFkZGluZzogMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50OyB9XG5cbi5udW1iZXJfaW5wdXQge1xuICB3aWR0aDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/academic/components/academic-plan/academic-plan.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/academic/components/academic-plan/academic-plan.component.ts ***!
  \******************************************************************************/
/*! exports provided: AcademicPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicPlanComponent", function() { return AcademicPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_course_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/course-category.service */ "./src/app/academic/services/course-category.service.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/academic/services/course.service.ts");
/* harmony import */ var _services_degree_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/degree-map.service */ "./src/app/academic/services/degree-map.service.ts");







var AcademicPlanComponent = /** @class */ (function () {
    function AcademicPlanComponent(courseService, courseCategoryService, degreeMapService) {
        var _this = this;
        this.courseService = courseService;
        this.courseCategoryService = courseCategoryService;
        this.degreeMapService = degreeMapService;
        this.$ = $;
        this.category = {};
        this.course = {};
        this.courseCategory = {};
        this.degreeMap = {};
        this.categories = [];
        this.degreeMaps = [];
        this.requestQueue = [];
        this.updateView = function () { _this.loadAll(); console.log('update view'); };
    }
    AcademicPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.$('.select2').select2();
        }, 1500);
        this.loadAll();
    };
    AcademicPlanComponent.prototype.loadCategories = function () {
        var _this = this;
        this.courseCategoryService.get().subscribe(function (res) {
            _this.categories = res;
        });
    };
    AcademicPlanComponent.prototype.loadAll = function () {
        var _this = this;
        this.loadCategories();
        this.degreeMapService.get().subscribe(function (res) {
            _this.degreeMaps = res;
        });
    };
    /**
     * show course modal
     *
     */
    AcademicPlanComponent.prototype.showCourseForm = function (course) {
        if (course === void 0) { course = null; }
        if (course) {
            this.course = course;
        }
        else {
            this.course = {};
        }
        this.$('#courseFormModal').modal('show');
    };
    /**
     * show course category modal
     *
     */
    AcademicPlanComponent.prototype.showCourseCategoryForm = function (courseCategory) {
        if (courseCategory === void 0) { courseCategory = null; }
        if (courseCategory) {
            this.courseCategory = courseCategory;
        }
        else {
            this.courseCategory = {};
        }
        this.$('#courseCategoryFormModal').modal('show');
    };
    /**
     * show course modal
     *
     */
    AcademicPlanComponent.prototype.showDegreeMapForm = function (degreeMap) {
        if (degreeMap === void 0) { degreeMap = null; }
        if (degreeMap) {
            this.degreeMap = degreeMap;
        }
        else {
            this.degreeMap = {};
        }
        this.$('#degreeMapFormModal').modal('show');
    };
    /**
     * remove row
     */
    AcademicPlanComponent.prototype.remove = function (key, object, index) {
        var self = this;
        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].confirm(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].trans('are you sure'), function () {
            if (key == 'COURSE_CATEGORY') {
                self.courseCategoryService.destroy(object.id).subscribe(function (res) {
                    if (res.status == 1) {
                        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
                        self.categories.splice(index, index + 1);
                    }
                    else
                        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
                });
            }
            else if (key == 'DEGREE_MAP') {
                self.degreeMapService.destroy(object.id).subscribe(function (res) {
                    if (res.status == 1) {
                        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
                        self.degreeMaps.splice(index, index + 1);
                    }
                    else
                        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
                });
            }
            else if (key == 'COURSE') {
                self.courseService.destroy(object.id).subscribe(function (res) {
                    if (res.status == 1) {
                        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
                        self.loadCategories();
                    }
                    else
                        src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
                });
            }
        });
    };
    /**
     * filter the coureses
     */
    AcademicPlanComponent.prototype.filter = function () {
        var _this = this;
        var cats = this.$('.filter-category').val();
        if (cats.length <= 0)
            return this.$('.category-row').show();
        this.$('.category-row').hide();
        cats.forEach(function (element) {
            _this.$('.category-' + element).show();
        });
    };
    AcademicPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-plan',
            template: __webpack_require__(/*! ./academic-plan.component.html */ "./src/app/academic/components/academic-plan/academic-plan.component.html"),
            styles: [__webpack_require__(/*! ./academic-plan.component.scss */ "./src/app/academic/components/academic-plan/academic-plan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"],
            _services_course_category_service__WEBPACK_IMPORTED_MODULE_4__["CourseCategoryService"],
            _services_degree_map_service__WEBPACK_IMPORTED_MODULE_6__["DegreeMapService"]])
    ], AcademicPlanComponent);
    return AcademicPlanComponent;
}());



/***/ }),

/***/ "./src/app/academic/components/academic-setting/academic-setting.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/academic/components/academic-setting/academic-setting.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"w3-white material-shadow safe-box\">\r\n      <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n        {{ \"academic_setting\" | trans }}\r\n      </div>\r\n      <div class=\"border-bottom-dashed\"></div>\r\n      <br>\r\n\r\n      <div class=\"safe-box-body row\">\r\n\r\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\r\n           <!-- setting panel -->\r\n           <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n            <div class=\"custom-panel-body table-responsive\"  >\r\n              <table class=\"w3-table w3-block text-right table-right\" >\r\n                <tr>\r\n                  <th>1)</th>\r\n                  <th>تسجيل الارشاد الاكاديمى للطالب من القسط رقم</th>\r\n                  <td>\r\n                    <input type=\"number\" class=\"input-setting\" [(ngModel)]=\"settings[0].value\" >\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>2)</th>\r\n                  <th>المعدل التراكمى القانونى</th>\r\n                  <td>\r\n                    <input type=\"number\" class=\"input-setting\" [(ngModel)]=\"settings[1].value\" >\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>3)</th>\r\n                  <th>عدد الساعات لمعدل اقل من المعدل القانونى</th>\r\n                  <td>\r\n                    <input type=\"number\" class=\"input-setting\" [(ngModel)]=\"settings[2].value\" >\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>4)</th>\r\n                  <th>عدد الساعات للمعدل القانوى او اكثر</th>\r\n                  <td>\r\n                    <input type=\"number\" class=\"input-setting\" [(ngModel)]=\"settings[3].value\" >\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>5)</th>\r\n                  <th>الحد الاقصى للتسجيل فى الفصل الصيفى</th>\r\n                  <td>\r\n                    <input type=\"number\" class=\"input-setting\" [(ngModel)]=\"settings[4].value\" >\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>6)</th>\r\n                  <th>السماح بتسجيل مواد من مستويات اعلى</th>\r\n                  <td>\r\n                    <mat-slide-toggle\r\n                    [(ngModel)]=\"settings[5].value\"\r\n                       ></mat-slide-toggle>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <th>6)</th>\r\n                  <th>السماح بسجيل اى مادة بدون فحص المقرر المعتمدة</th>\r\n                  <td>\r\n                    <mat-slide-toggle\r\n                    [(ngModel)]=\"settings[6].value\"\r\n                       ></mat-slide-toggle>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <br>\r\n        </div>\r\n\r\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n          <!-- setting panel -->\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n           <div class=\"custom-panel-body table-responsive\"  >\r\n            <button\r\n            mat-raised-button color=\"primary\"\r\n            [disabled]=\"isSubmitted\"\r\n            (click)=\"updateSetting()\" style=\"margin: 5px\" >\r\n            <i *ngIf=\"isSubmitted\"  class=\"fa fa-spin fa-spinner\"></i>\r\n            <span *ngIf=\"!isSubmitted\" >{{ \"save changes\" | trans}} </span>\r\n          </button>\r\n           </div>\r\n         </div>\r\n         <br>\r\n       </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academic/components/academic-setting/academic-setting.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/academic/components/academic-setting/academic-setting.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\n.input-setting {\n  border-radius: 5em;\n  border: 1px solid lightgray;\n  padding-right: 10px; }\n\n.table-right tr, .table-right td, .table-right th {\n  text-align: right; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9hY2FkZW1pYy1zZXR0aW5nL0U6XFxwcm9qZWN0XFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxhY2FkZW1pY1xcY29tcG9uZW50c1xcYWNhZGVtaWMtc2V0dGluZ1xcYWNhZGVtaWMtc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9hY2FkZW1pYy1zZXR0aW5nL2FjYWRlbWljLXNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUNGLEVBQUE7O0FBRUE7RUFDRSx5Q0FBd0MsRUFBQTs7QUFHMUM7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBc0MsRUFBQTs7QUFHeEM7RUFDRSw2QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1Q0FBc0M7RUFDdEMsOEJBQTZCLEVBQUE7O0FBSS9CO0VBQ0UsNkJBQTRCO0VBQzVCLHNCQUFxQjtFQUNyQixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLGtDQUFpQztFQUNqQyw2QkFBNEI7RUFDNUIsOEJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsdURBQW1ELEVBQUE7O0FBR3JEO0VBQ0UseUJBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWdDLEVBQUE7O0FBR2xDO0VBQ0UsZ0JBQ0YsRUFBQTs7QUFFQTtFQUNFLHlCQUF3QixFQUFBOztBQUUxQjs7Q0NYQzs7QURlRDtFQUNFLHVCQUFzQixFQUFBOztBQUd4QjtFQUNFLHdCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usd0JBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSx1QkFBc0I7RUFDdEIsMEJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FDRixFQUFBOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixtQkFDRixFQUFBOztBQUdBO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2FkZW1pYy9jb21wb25lbnRzL2FjYWRlbWljLXNldHRpbmcvYWNhZGVtaWMtc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgcGFkZGluZzogMTBweFxyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLXJlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWRhc2hlZCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1wYW5lbCB7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICB0b3A6IC0xM3B4IWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwtYm9keSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc21hbGwtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwwLDAsMC4zKSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtaW5wdXQge1xyXG4gIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ncmF5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5IWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1pbnB1dCB7XHJcbiAgbWluLXdpZHRoOiAxMjBweFxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIG92ZXJmbG93OiBhdXRvIWltcG9ydGFudDtcclxufVxyXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cclxuXHJcbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgcGFkZGluZzogMHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbHRlci10b3Age1xyXG4gIGhlaWdodDogMjAwcHghaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZmlsdGVyLXNpZGUge1xyXG4gIGhlaWdodDogNDAwcHghaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuLnczLXVsIGxpIHtcclxuICBwYWRkaW5nOiAycHghaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5udW1iZXJfaW5wdXQge1xyXG4gIHdpZHRoOiA0NXB4XHJcbn1cclxuXHJcblxyXG4uaW5wdXQtc2V0dGluZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4XHJcbn1cclxuXHJcblxyXG4udGFibGUtcmlnaHQgdHIsIC50YWJsZS1yaWdodCB0ZCwgLnRhYmxlLXJpZ2h0IHRoIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4iLCIuc2FmZS1ib3gge1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5ib3JkZXItYm90dG9tLWRhc2hlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItYm90dG9tLXJlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1kYXNoZWQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmJ0bi1tYXJnaW4tYm90dG9tIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwtdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgdG9wOiAtMTNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDVweDsgfVxuXG4uc21hbGwtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMykgIWltcG9ydGFudDsgfVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgbWluLXdpZHRoOiA3MCUgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWdyYXkge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1pbnB1dCB7XG4gIG1pbi13aWR0aDogMTIwcHg7IH1cblxuLm1vZGFsIHtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4vKlxyXG4gIGN1c3RvbSBidXR0b24gc3R5bGVcclxuKi9cbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG5cbi5maWx0ZXItdG9wIHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4uZmlsdGVyLXNpZGUge1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi53My11bCBsaSB7XG4gIHBhZGRpbmc6IDJweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDsgfVxuXG4ubnVtYmVyX2lucHV0IHtcbiAgd2lkdGg6IDQ1cHg7IH1cblxuLmlucHV0LXNldHRpbmcge1xuICBib3JkZXItcmFkaXVzOiA1ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1yaWdodDogMTBweDsgfVxuXG4udGFibGUtcmlnaHQgdHIsIC50YWJsZS1yaWdodCB0ZCwgLnRhYmxlLXJpZ2h0IHRoIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/academic/components/academic-setting/academic-setting.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/academic/components/academic-setting/academic-setting.component.ts ***!
  \************************************************************************************/
/*! exports provided: AcademicSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSettingComponent", function() { return AcademicSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_academic_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/academic-setting.service */ "./src/app/academic/services/academic-setting.service.ts");





var AcademicSettingComponent = /** @class */ (function () {
    function AcademicSettingComponent(academicSettingService) {
        this.academicSettingService = academicSettingService;
        this.settings = [];
        this.settingHash = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.isSubmitted = false;
        this.initSettings();
    }
    AcademicSettingComponent.prototype.ngOnInit = function () {
        this.loadSettings();
    };
    AcademicSettingComponent.prototype.initSettings = function () {
        this.settings = [
            { id: 1, value: this.settingHash.get(1) },
            { id: 2, value: this.settingHash.get(2) },
            { id: 3, value: this.settingHash.get(3) },
            { id: 4, value: this.settingHash.get(4) },
            { id: 5, value: this.settingHash.get(5) },
            { id: 6, value: this.settingHash.get(6) },
            { id: 7, value: this.settingHash.get(7) },
        ];
    };
    /**
     * load all academic settings
     */
    AcademicSettingComponent.prototype.loadSettings = function () {
        var _this = this;
        this.settingHash = new angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.academicSettingService.get().subscribe(function (res) {
            res.forEach(function (element) {
                _this.settingHash.put(element.id, element.value);
            });
            _this.initSettings();
        });
    };
    /**
     * update all settings of academic
     */
    AcademicSettingComponent.prototype.updateSetting = function () {
        var _this = this;
        var data = {
            settings: this.settings
        };
        this.isSubmitted = true;
        this.academicSettingService.update(data).subscribe(function (res) {
            if (res.status == 1)
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            _this.isSubmitted = false;
        });
    };
    AcademicSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-academic-setting',
            template: __webpack_require__(/*! ./academic-setting.component.html */ "./src/app/academic/components/academic-setting/academic-setting.component.html"),
            styles: [__webpack_require__(/*! ./academic-setting.component.scss */ "./src/app/academic/components/academic-setting/academic-setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_academic_setting_service__WEBPACK_IMPORTED_MODULE_4__["AcademicSettingService"]])
    ], AcademicSettingComponent);
    return AcademicSettingComponent;
}());



/***/ }),

/***/ "./src/app/academic/components/create-course-category-form/create-course-category-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/academic/components/create-course-category-form/create-course-category-form.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- add course modal -->\r\n  <div class=\"modal fade\" tabindex=\"-1\" id=\"courseCategoryFormModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">{{ \"create new course category\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <td>{{ \"name\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"text\" [(ngModel)]=\"courseCategory.name\" class=\"form-control\"    >\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>{{ \"total_hours\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"number\"  [(ngModel)]=\"courseCategory.total_hours\" class=\"form-control\"    >\r\n              </td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>{{ \"required_hours\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"number\"  [(ngModel)]=\"courseCategory.required_hours\" class=\"form-control\"    >\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"send();\" [disabled]=\"isSubmitted\" >\r\n            <i  *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n            <span  *ngIf=\"!isSubmitted\">{{ \"save changes\" | trans }}</span>\r\n          </button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/academic/components/create-course-category-form/create-course-category-form.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/academic/components/create-course-category-form/create-course-category-form.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljL2NvbXBvbmVudHMvY3JlYXRlLWNvdXJzZS1jYXRlZ29yeS1mb3JtL2NyZWF0ZS1jb3Vyc2UtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/academic/components/create-course-category-form/create-course-category-form.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/academic/components/create-course-category-form/create-course-category-form.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CreateCourseCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseCategoryFormComponent", function() { return CreateCourseCategoryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_course_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/course-category.service */ "./src/app/academic/services/course-category.service.ts");





var CreateCourseCategoryFormComponent = /** @class */ (function () {
    function CreateCourseCategoryFormComponent(courseCategoryService) {
        this.courseCategoryService = courseCategoryService;
        this.courseCategory = {};
        this.isSubmitted = false;
        this.requiredFields = [
            'name',
            'total_hours',
            'required_hours'
        ];
    }
    CreateCourseCategoryFormComponent.prototype.ngOnInit = function () {
    };
    CreateCourseCategoryFormComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!_this.courseCategory[element])
                valid = false;
        });
        return valid;
    };
    CreateCourseCategoryFormComponent.prototype.send = function () {
        if (!this.validate()) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].trans('fill all required data'));
        }
        if (this.courseCategory.id) {
            this.update();
        }
        else {
            this.save();
        }
    };
    CreateCourseCategoryFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.courseCategoryService.store(this.courseCategory).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
            _this.updateView();
        });
    };
    CreateCourseCategoryFormComponent.prototype.update = function () {
        var _this = this;
        this.isSubmitted = true;
        this.courseCategoryService.update(this.courseCategory).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
            _this.updateView();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCourseCategoryFormComponent.prototype, "courseCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCourseCategoryFormComponent.prototype, "updateView", void 0);
    CreateCourseCategoryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-course-category-form',
            template: __webpack_require__(/*! ./create-course-category-form.component.html */ "./src/app/academic/components/create-course-category-form/create-course-category-form.component.html"),
            styles: [__webpack_require__(/*! ./create-course-category-form.component.scss */ "./src/app/academic/components/create-course-category-form/create-course-category-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_course_category_service__WEBPACK_IMPORTED_MODULE_4__["CourseCategoryService"]])
    ], CreateCourseCategoryFormComponent);
    return CreateCourseCategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/academic/components/create-course-form/create-course-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/academic/components/create-course-form/create-course-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- add course modal -->\r\n  <div class=\"modal fade\" tabindex=\"-1\" id=\"courseFormModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">{{ \"create new course\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n\r\n          <div class=\"col-lg-6\">\r\n            <table class=\"table\">\r\n              <tr>\r\n                <td>{{ \"name\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"text\" value=\"Math III\" [(ngModel)]=\"course.name\" class=\"form-control\"    >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"code\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"text\" value=\"Math III\" [(ngModel)]=\"course.code\" class=\"form-control\"    >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"credit_hour\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\" value=\"Math III\" [(ngModel)]=\"course.credit_hour\" class=\"form-control\"    >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"division\"| trans }} *</td>\r\n                <td>\r\n                  <select  [(ngModel)]=\"course.division_id\"  class=\"form-control\">\r\n                    <option *ngFor=\"let item of divisions\" value=\"{{ item.id }}\" >{{ item.name }}</option>\r\n                  </select>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"level\"| trans }} *</td>\r\n                <td>\r\n                  <select  [(ngModel)]=\"course.level_id\"  class=\"form-control\">\r\n                    <option *ngFor=\"let item of levels\" value=\"{{ item.id }}\" >{{ item.name }}</option>\r\n                  </select>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"course_category\"| trans }} *</td>\r\n                <td>\r\n                  <select  [(ngModel)]=\"course.subject_category_id\" class=\"form-control\" >\r\n                    <option *ngFor=\"let item of categories\" value=\"{{ item.id }}\" >{{ item.name }}</option>\r\n                  </select>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"year_work_degree\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\" value=\"Math III\" [(ngModel)]=\"course.year_work_degree\" class=\"form-control\"    >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"practical_degree\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\" value=\"Math III\" [(ngModel)]=\"course.practical_degree\" class=\"form-control\"    >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"academic_degree\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\" value=\"Math III\" [(ngModel)]=\"course.academic_degree\"  class=\"form-control\"   >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"small_degree\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\"  [(ngModel)]=\"course.small_degree\"  class=\"form-control\"   >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"large_degree\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\"  [(ngModel)]=\"course.large_degree\"   class=\"form-control\"  >\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"col-lg-6\">\r\n            <table class=\"table\">\r\n\r\n              <tr>\r\n                <td>{{ \"has_project\"| trans }}</td>\r\n                <td>\r\n                  <input type=\"checkbox\"  [(ngModel)]=\"course.has_project\" class=\"w3-check\"    >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"is_required\"| trans }}</td>\r\n                <td>\r\n                  <input type=\"checkbox\"  [(ngModel)]=\"course.is_required\" class=\"w3-check\"     >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"book_price\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\"  [(ngModel)]=\"course.book_price\"  class=\"form-control\"   >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"failed_degree\"| trans }} *</td>\r\n                <td>\r\n                  <input type=\"number\"  [(ngModel)]=\"course.failed_degree\"   class=\"form-control\"  >\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"prequsites\"| trans }}</td>\r\n                <td>\r\n                  <select   class=\"form-control select2 prerequsited\" multiple value=\"{{ course.prerequsites }}\" >\r\n                    <option *ngFor=\"let item of courses\" value=\"{{ item.id }}\" >{{ item.name }}-{{ item.code }}</option>\r\n                  </select>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>{{ \"notes\"| trans }}</td>\r\n                <td>\r\n                  <textarea [(ngModel)]=\"course.notes\"   class=\"form-control\"  ></textarea>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\"  (click)=\"send();\" [disabled]=\"isSubmitted\" >\r\n            <i  *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n            <span  *ngIf=\"!isSubmitted\">{{ \"save changes\" | trans }}</span>\r\n          </button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/academic/components/create-course-form/create-course-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/academic/components/create-course-form/create-course-form.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljL2NvbXBvbmVudHMvY3JlYXRlLWNvdXJzZS1mb3JtL2NyZWF0ZS1jb3Vyc2UtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/academic/components/create-course-form/create-course-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/academic/components/create-course-form/create-course-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateCourseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseFormComponent", function() { return CreateCourseFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/academic/services/course.service.ts");








var CreateCourseFormComponent = /** @class */ (function () {
    function CreateCourseFormComponent(courseService, applicationSetting) {
        this.courseService = courseService;
        this.applicationSetting = applicationSetting;
        this.course = {};
        this.$ = $;
        this.courses = [];
        this.divisions = [];
        this.levels = [];
        this.isSubmitted = false;
        this.requiredFields = [
            'name',
            'code',
            'year_work_degree',
            'practical_degree',
            'academic_degree',
            'small_degree',
            'large_degree',
            'division_id',
            'level_id',
            'credit_hour',
            'subject_category_id',
            'book_price',
            'failed_degree'
        ];
    }
    CreateCourseFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.$('.select2').select2();
        }, 1500);
        this.loadCourses();
        this.applicationSetting.getDivisions().subscribe(function (res) {
            _this.divisions = res;
        });
        this.levels = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"].LEVEL_PREFIX);
    };
    CreateCourseFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            _this.$('.select2').select2();
        }, 500);
    };
    CreateCourseFormComponent.prototype.loadCourses = function () {
        var _this = this;
        this.courseService.get().subscribe(function (res) {
            _this.courses = res;
        });
    };
    CreateCourseFormComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!_this.course[element])
                valid = false;
        });
        return valid;
    };
    CreateCourseFormComponent.prototype.send = function () {
        if (!this.validate()) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_5__["Helper"].trans('fill all required data'));
        }
        this.course.prerequsites = this.$('.prerequsited').val();
        if (this.course.id) {
            this.update();
        }
        else {
            this.save();
        }
    };
    CreateCourseFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.courseService.store(this.course).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(res.message);
                _this.course = {};
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
            _this.updateView();
            _this.loadCourses();
        });
    };
    CreateCourseFormComponent.prototype.update = function () {
        var _this = this;
        this.isSubmitted = true;
        this.courseService.update(this.course).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].success(res.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_6__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
            _this.updateView();
            _this.loadCourses();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCourseFormComponent.prototype, "course", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCourseFormComponent.prototype, "updateView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateCourseFormComponent.prototype, "categories", void 0);
    CreateCourseFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-course-form',
            template: __webpack_require__(/*! ./create-course-form.component.html */ "./src/app/academic/components/create-course-form/create-course-form.component.html"),
            styles: [__webpack_require__(/*! ./create-course-form.component.scss */ "./src/app/academic/components/create-course-form/create-course-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"], src_app_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationSettingService"]])
    ], CreateCourseFormComponent);
    return CreateCourseFormComponent;
}());



/***/ }),

/***/ "./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- add course modal -->\r\n  <div class=\"modal fade\" tabindex=\"-1\" id=\"degreeMapFormModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n          <h4 class=\"modal-title\">{{ \"create new degree map\" | trans }}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <table class=\"table\">\r\n            <tr>\r\n              <td>{{ \"percent_from\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"number\" [(ngModel)]=\"degreeMap.percent_from\" class=\"form-control\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>{{ \"percent_to\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"number\" [(ngModel)]=\"degreeMap.percent_to\" class=\"form-control\"    >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>{{ \"key\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"text\" [(ngModel)]=\"degreeMap.key\"   class=\"form-control\"  >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>{{ \"gpa\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"number\" [(ngModel)]=\"degreeMap.gpa\"  class=\"form-control\"   >\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>{{ \"name\"| trans }} *</td>\r\n              <td>\r\n                <input type=\"text\" [(ngModel)]=\"degreeMap.name\"   class=\"form-control\"  >\r\n              </td>\r\n            </tr>\r\n\r\n\r\n\r\n          </table>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">{{ \"close\" | trans }}</button>\r\n          <button type=\"button\" class=\"btn btn-primary\"  (click)=\"send();\" [disabled]=\"isSubmitted\" >\r\n            <i  *ngIf=\"isSubmitted\" class=\"fa fa-spin fa-spinner\" ></i>\r\n            <span  *ngIf=\"!isSubmitted\">{{ \"save changes\" | trans }}</span>\r\n          </button>\r\n        </div>\r\n      </div><!-- /.modal-content -->\r\n    </div><!-- /.modal-dialog -->\r\n  </div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljL2NvbXBvbmVudHMvY3JlYXRlLWRlZ3JlZS1tYXAtZm9ybS9jcmVhdGUtZGVncmVlLW1hcC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreateDegreeMapFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDegreeMapFormComponent", function() { return CreateDegreeMapFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_degree_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/degree-map.service */ "./src/app/academic/services/degree-map.service.ts");





var CreateDegreeMapFormComponent = /** @class */ (function () {
    function CreateDegreeMapFormComponent(degreeMapService) {
        this.degreeMapService = degreeMapService;
        this.degreeMap = {};
        this.isSubmitted = false;
        this.requiredFields = [
            'percent_from',
            'percent_to',
            'key',
            'gpa',
            'name'
        ];
    }
    CreateDegreeMapFormComponent.prototype.ngOnInit = function () {
    };
    CreateDegreeMapFormComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.requiredFields.forEach(function (element) {
            if (!_this.degreeMap[element])
                valid = false;
        });
        return valid;
    };
    CreateDegreeMapFormComponent.prototype.send = function () {
        if (!this.validate()) {
            return src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(src_app_shared_helper__WEBPACK_IMPORTED_MODULE_2__["Helper"].trans('fill all required data'));
        }
        if (this.degreeMap.id) {
            this.update();
        }
        else {
            this.save();
        }
    };
    CreateDegreeMapFormComponent.prototype.save = function () {
        var _this = this;
        this.isSubmitted = true;
        this.degreeMapService.store(this.degreeMap).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
            _this.updateView();
        });
    };
    CreateDegreeMapFormComponent.prototype.update = function () {
        var _this = this;
        this.isSubmitted = true;
        this.degreeMapService.update(this.degreeMap).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].success(res.message);
            }
            else {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_3__["Message"].error(res.message);
            }
            _this.isSubmitted = false;
            _this.updateView();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateDegreeMapFormComponent.prototype, "degreeMap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CreateDegreeMapFormComponent.prototype, "updateView", void 0);
    CreateDegreeMapFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-degree-map-form',
            template: __webpack_require__(/*! ./create-degree-map-form.component.html */ "./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.html"),
            styles: [__webpack_require__(/*! ./create-degree-map-form.component.scss */ "./src/app/academic/components/create-degree-map-form/create-degree-map-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_degree_map_service__WEBPACK_IMPORTED_MODULE_4__["DegreeMapService"]])
    ], CreateDegreeMapFormComponent);
    return CreateDegreeMapFormComponent;
}());



/***/ }),

/***/ "./src/app/academic/components/open-course/open-course.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/academic/components/open-course/open-course.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n    <div class=\"w3-white material-shadow safe-box\">\r\n      <div class=\"safe-box-header w3-large\" style=\"padding: 5px!important\">\r\n        {{ \"open_course_this_term\" | trans }}\r\n      </div>\r\n      <div class=\"border-bottom-dashed\"></div>\r\n      <br>\r\n\r\n      <div class=\"safe-box-body \">\r\n        <div>\r\n\r\n          <b class=\"w3-large\">{{ \"open_course_this_term\" | trans }}</b>\r\n              <br>\r\n              <table class=\"table text-center\">\r\n                <ng-container  *ngFor=\"let item of levels index as i\">\r\n                  <tr class=\"w3-light-gray\"  >\r\n                    <th>{{ i + 1 }}</th>\r\n                    <th colspan=\"5\" >{{ item.name }}</th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>{{ \"code\" | trans }}</th>\r\n                    <th>{{ \"name\" | trans }}</th>\r\n                    <th>{{ \"credit_hour\" | trans }}</th>\r\n                    <th>{{ \"book_price\" | trans }}</th>\r\n                    <th></th>\r\n                  </tr>\r\n\r\n                  <tr *ngFor=\"let course of item.courses index as counter\"\r\n                  (click)=\"course.selected = course.selected? false : true\"\r\n                  class=\"w3-hover-light-gray\" style=\"cursor: pointer\"  >\r\n                    <td>{{ counter + 1 }}</td>\r\n                    <td>{{ course.code }}</td>\r\n                    <td>{{ course.name }}</td>\r\n                    <td>{{ course.credit_hour }}</td>\r\n                    <td>{{ course.book_price }}</td>\r\n                    <td>\r\n                      <mat-slide-toggle\r\n                      [(ngModel)]=\"course.selected\"\r\n                      [checked]=\"course.selected\"\r\n                         ></mat-slide-toggle>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </table>\r\n        </div>\r\n\r\n\r\n          <!-- setting panel -->\r\n          <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\r\n           <div class=\"custom-panel-body table-responsive\"  >\r\n            <button\r\n            mat-raised-button color=\"primary\"\r\n            (click)=\"updateOpenCourses()\"\r\n            [disabled]=\"isSubmitted\"\r\n            style=\"margin: 5px\" >\r\n            <i *ngIf=\"isSubmitted\"  class=\"fa fa-spin fa-spinner\"></i>\r\n            <span *ngIf=\"!isSubmitted\" >{{ \"save changes\" | trans}} </span>\r\n          </button>\r\n           </div>\r\n         </div>\r\n         <br>\r\n\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/academic/components/open-course/open-course.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/academic/components/open-course/open-course.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 5px; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n  custom button style\r\n*/\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\n.filter-top {\n  height: 200px !important;\n  overflow: auto; }\n\n.filter-side {\n  height: 400px !important;\n  overflow: auto; }\n\n.w3-ul li {\n  padding: 2px !important;\n  font-size: 12px !important; }\n\n.number_input {\n  width: 45px; }\n\n.input-setting {\n  border-radius: 5em;\n  border: 1px solid lightgray;\n  padding-right: 10px; }\n\n.table-right tr, .table-right td, .table-right th {\n  text-align: right; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9vcGVuLWNvdXJzZS9FOlxccHJvamVjdFxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcYWNhZGVtaWNcXGNvbXBvbmVudHNcXG9wZW4tY291cnNlXFxvcGVuLWNvdXJzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWNhZGVtaWMvY29tcG9uZW50cy9vcGVuLWNvdXJzZS9vcGVuLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLHlDQUF3QyxFQUFBOztBQUcxQztFQUNFLHdDQUF1QyxFQUFBOztBQUd6QztFQUNFLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLHVDQUFzQztFQUN0Qyw4QkFBNkIsRUFBQTs7QUFJL0I7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx1REFBbUQsRUFBQTs7QUFHckQ7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxpQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCOztDQ1hDOztBRGVEO0VBQ0UsdUJBQXNCLEVBQUE7O0FBR3hCO0VBQ0Usd0JBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSx3QkFBdUI7RUFDdkIsY0FBYyxFQUFBOztBQUloQjtFQUNFLHVCQUFzQjtFQUN0QiwwQkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxXQUNGLEVBQUE7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG1CQUNGLEVBQUE7O0FBR0E7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjYWRlbWljL2NvbXBvbmVudHMvb3Blbi1jb3Vyc2Uvb3Blbi1jb3Vyc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gIHBhZGRpbmc6IDEwcHhcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20tZGFzaGVkIHtcclxuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgcmVkIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1kYXNoZWQge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xyXG4gIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFuZWwge1xyXG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICByaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNtYWxsLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0IHtcclxuICBtaW4td2lkdGg6IDcwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JheSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20taW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTIwcHhcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbn1cclxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXHJcblxyXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xyXG4gIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItdG9wIHtcclxuICBoZWlnaHQ6IDIwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmZpbHRlci1zaWRlIHtcclxuICBoZWlnaHQ6IDQwMHB4IWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuXHJcbi53My11bCBsaSB7XHJcbiAgcGFkZGluZzogMnB4IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubnVtYmVyX2lucHV0IHtcclxuICB3aWR0aDogNDVweFxyXG59XHJcblxyXG5cclxuLmlucHV0LXNldHRpbmcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweFxyXG59XHJcblxyXG5cclxuLnRhYmxlLXJpZ2h0IHRyLCAudGFibGUtcmlnaHQgdGQsIC50YWJsZS1yaWdodCB0aCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1yZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIHJlZCAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZGFzaGVkIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50OyB9XG5cbi5idG4tbWFyZ2luLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20tcGFuZWwge1xuICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiA1cHg7IH1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4OyB9XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiovXG5zZWxlY3QsIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgfVxuXG4uZmlsdGVyLXRvcCB7XG4gIGhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmZpbHRlci1zaWRlIHtcbiAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4udzMtdWwgbGkge1xuICBwYWRkaW5nOiAycHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7IH1cblxuLm51bWJlcl9pbnB1dCB7XG4gIHdpZHRoOiA0NXB4OyB9XG5cbi5pbnB1dC1zZXR0aW5nIHtcbiAgYm9yZGVyLXJhZGl1czogNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cblxuLnRhYmxlLXJpZ2h0IHRyLCAudGFibGUtcmlnaHQgdGQsIC50YWJsZS1yaWdodCB0aCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/academic/components/open-course/open-course.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/academic/components/open-course/open-course.component.ts ***!
  \**************************************************************************/
/*! exports provided: OpenCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCourseComponent", function() { return OpenCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var src_app_shared_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/course.service */ "./src/app/academic/services/course.service.ts");






var OpenCourseComponent = /** @class */ (function () {
    function OpenCourseComponent(courseService) {
        this.courseService = courseService;
        this.courses = [];
        this.openCourses = [];
        this.levels = [];
        this.selectedLevels = [];
        this.isSubmitted = false;
    }
    OpenCourseComponent.prototype.ngOnInit = function () {
        this.loadCourses();
        this.loadOpenCourses();
    };
    OpenCourseComponent.prototype.loadCourses = function () {
        var _this = this;
        this.courseService.get().subscribe(function (res) {
            _this.courses = res;
            _this.loadLevels();
        });
    };
    OpenCourseComponent.prototype.selectCourse = function (course) {
        this.courses.forEach(function (element) {
            if (course.id == element.id)
                element.selected = true;
        });
    };
    OpenCourseComponent.prototype.loadOpenCourses = function () {
        var _this = this;
        this.courseService.getOpenCourses().subscribe(function (res) {
            _this.openCourses = res;
            //
            _this.openCourses.forEach(function (element) {
                _this.selectCourse(element);
            });
        });
    };
    OpenCourseComponent.prototype.loadLevels = function () {
        var _this = this;
        this.levels = src_app_shared_cache__WEBPACK_IMPORTED_MODULE_3__["Cache"].get(src_app_account_services_level_service__WEBPACK_IMPORTED_MODULE_2__["LevelService"].LEVEL_PREFIX);
        this.levels.forEach(function (element) {
            // assign courses to levels
            element.courses = [];
            _this.courses.forEach(function (course) {
                if (course.level_id == element.id) {
                    element.courses.push(course);
                }
            });
        });
    };
    OpenCourseComponent.prototype.updateOpenCourses = function () {
        var _this = this;
        var arr = [];
        this.courses.forEach(function (element) {
            if (element.selected)
                arr.push(element);
        });
        var data = {
            courses: arr
        };
        this.isSubmitted = true;
        this.courseService.updateOpenCourses(data).subscribe(function (res) {
            if (res.status == 1) {
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].success(res.message);
            }
            else
                src_app_shared_message__WEBPACK_IMPORTED_MODULE_4__["Message"].error(res.message);
            _this.isSubmitted = false;
        });
    };
    OpenCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-open-course',
            template: __webpack_require__(/*! ./open-course.component.html */ "./src/app/academic/components/open-course/open-course.component.html"),
            styles: [__webpack_require__(/*! ./open-course.component.scss */ "./src/app/academic/components/open-course/open-course.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]])
    ], OpenCourseComponent);
    return OpenCourseComponent;
}());



/***/ }),

/***/ "./src/app/academic/services/academic-setting.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/academic/services/academic-setting.service.ts ***!
  \***************************************************************/
/*! exports provided: AcademicSettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicSettingService", function() { return AcademicSettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var AcademicSettingService = /** @class */ (function () {
    function AcademicSettingService(http) {
        this.http = http;
    }
    /**
     * get settings from api
     *
     */
    AcademicSettingService.prototype.get = function () {
        return this.http.get('academic/settings?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * get update all settings from api
     *
     */
    AcademicSettingService.prototype.update = function (data) {
        return this.http.post('academic/settings/update?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    AcademicSettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AcademicSettingService);
    return AcademicSettingService;
}());



/***/ }),

/***/ "./src/app/academic/services/course-category.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/academic/services/course-category.service.ts ***!
  \**************************************************************/
/*! exports provided: CourseCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseCategoryService", function() { return CourseCategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var CourseCategoryService = /** @class */ (function () {
    function CourseCategoryService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    CourseCategoryService.prototype.get = function () {
        return this.http.get('academic/course_categories?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    CourseCategoryService.prototype.store = function (data) {
        return this.http.post('academic/course_categories/store' + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    CourseCategoryService.prototype.update = function (data) {
        return this.http.post('academic/course_categories/update/' + data.id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    CourseCategoryService.prototype.destroy = function (id) {
        return this.http.post('academic/course_categories/delete/' + id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    CourseCategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseCategoryService);
    return CourseCategoryService;
}());



/***/ }),

/***/ "./src/app/academic/services/course.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/academic/services/course.service.ts ***!
  \*****************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    CourseService.prototype.get = function () {
        return this.http.get('academic/courses?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    CourseService.prototype.store = function (data) {
        return this.http.post('academic/courses/store' + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    CourseService.prototype.update = function (data) {
        return this.http.post('academic/courses/update/' + data.id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    CourseService.prototype.destroy = function (id) {
        return this.http.post('academic/courses/delete/' + id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    /**
     * get open courses api
     *
     */
    CourseService.prototype.getOpenCourses = function () {
        return this.http.get('academic/open_courses?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * update open courses
     */
    CourseService.prototype.updateOpenCourses = function (data) {
        return this.http.post('academic/open_courses/update?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    CourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/academic/services/degree-map.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/academic/services/degree-map.service.ts ***!
  \*********************************************************/
/*! exports provided: DegreeMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreeMapService", function() { return DegreeMapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/auth */ "./src/app/shared/auth.ts");




var DegreeMapService = /** @class */ (function () {
    function DegreeMapService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    DegreeMapService.prototype.get = function () {
        return this.http.get('academic/degree_maps?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    DegreeMapService.prototype.store = function (data) {
        return this.http.post('academic/degree_maps/store' + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    DegreeMapService.prototype.update = function (data) {
        return this.http.post('academic/degree_maps/update/' + data.id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    DegreeMapService.prototype.destroy = function (id) {
        return this.http.post('academic/degree_maps/delete/' + id + '?api_token=' + src_app_shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    DegreeMapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DegreeMapService);
    return DegreeMapService;
}());



/***/ })

}]);
//# sourceMappingURL=academic-academic-module.js.map