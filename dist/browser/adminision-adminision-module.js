(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminision-adminision-module"],{

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


/***/ })

}]);
//# sourceMappingURL=adminision-adminision-module.js.map