(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["student-student-module"],{

/***/ "./src/app/student/components/student/student-create/student-create.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/student/components/student/student-create/student-create.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\n      <div class=\"w3-white material-shadow safe-box\">\n        <div class=\"safe-box-header w3-xlarge\">\n          {{ \"create student\" | trans }}\n        </div>\n        <br>\n        <div class=\"border-bottom-dashed\" ></div>\n        <br>\n\n        <div class=\"safe-box-body row\" >\n\n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\n            <img [src]=\"application.personal_photo_url?  application.personal_photo_url : defaultImage\" class=\"w3-block w3-round border-gray\" >\n            <br>\n            <input\n                type=\"file\"\n                (change)=\"viewPersonalImage($event)\"\n                accept=\"image/x-png,image/gif,image/jpeg\"\n                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"  >\n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\n\n              <div\n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\"\n               >\n                {{ currentError }}\n              </div>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom military-info-button\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button>\n\n            </div>\n          </div>\n\n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\n\n\n\n            <!--\n\n        => student basic info\n        name\t                  email\n        academic_years_id\t      grade\n        registeration_date\t    phone_1\n        registration_status_id\tregistration_method_id\n        qualification_date\t    qualification_set_number\n        qualification_types_id\tqualification_id\n        level_id\t              case_constraint_id\n        national_id\t            password\n        acceptance_code\t        acceptance_date\n        status\t                writen_by\n\n\n        => additional info\n\n        nationality_id\t        gender\n        language_1_id\t          language_2_id\n        city_id\t                government_id\n        country_id\t            religion\n        address\t                birth_address\n        national_id_date\t      national_id_place\n\n        => military info\n        military_status_id\t    military_area_id\n        triple_number\n\n        => parent info\n        parent_name\t            parent_national_id\n        parent_job_id\t          parent_address\n        parent_phone\t          relative_relation_id\n\n        => personal image\n        personal_photo\n\n        => required document\n\n            -->\n            <div class=\"custom-panel w3-display-container w3-round application-panel student-info-panel\">\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\n\n              <div class=\"custom-panel-body\"  >\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                      <tr>\n                        <th>{{ \"student name\" | trans }} *</th>\n                        <td>\n                          <input\n                          class=\"custom-input form-control input-sm w3-input  input-sm \"\n                          [ngClass]=\"{'border-bottom-dashed': application.name, 'border-bottom-red': !application.name}\"\n                          [(ngModel)]=\"application.name\" >\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"academic_years\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.academic_years_id, 'border-bottom-red': !application.academic_years_id}\"\n                          [(ngModel)]=\"application.academic_years_id\">\n                            <option *ngFor=\"let item of applicationSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"qualification\" | trans }} *</th>\n                        <td>\n                          <select\n                          (change)=\"emptyData()\"\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_id, 'border-bottom-red': !application.qualification_id}\"\n                          [(ngModel)]=\"application.qualification_id\">\n                            <option *ngFor=\"let item of applicationSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"qualification_types\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.qualification_types_id, 'border-bottom-red': !application.qualification_types_id}\"\n                          [(ngModel)]=\"application.qualification_types_id\">\n                            <ng-container *ngFor=\"let item of applicationSettings.QUALIFICATION_TYPES\">\n                                <option *ngIf=\"item.qualification_id == application.qualification_id && item.academic_year_id == application.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </ng-container>\n\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"grade\" | trans }} *</th>\n                          <td>\n                            <input\n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\n                            [ngClass]=\"{'border-bottom-dashed': application.grade, 'border-bottom-red': !application.grade}\"\n                            [(ngModel)]=\"application.grade\" >\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\n                              {{ gradeError }}\n                            </p>\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"national_id\" | trans }} *</th>\n                          <td>\n                            <input\n                            type=\"text\"\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\n                            [ngClass]=\"{'border-bottom-dashed': application.national_id, 'border-bottom-red': !application.national_id}\"\n                            [(ngModel)]=\"application.national_id\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"gender\" | trans }}</th>\n                        <td>\n                          <select\n                          (change)=\"filterDataBaisedOnGender()\"\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.gender, 'border-bottom-red': !application.gender}\"\n                          [(ngModel)]=\"application.gender\">\n                            <option value=\"male\">{{ \"male\" | trans }}</option>\n                            <option value=\"female\">{{ \"female\" | trans }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_status\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\n                          (change)=\"validateOnRegisterationStatusDocument()\"\n                          [ngClass]=\"{'border-bottom-dashed': application.registration_status_id, 'border-bottom-red': !application.registration_status_id}\"\n                          [(ngModel)]=\"application.registration_status_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_date\" | trans }} *</th>\n                          <td>\n                            <input\n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input  input-sm\"\n                            [ngClass]=\"{'border-bottom-dashed': application.qualification_date, 'border-bottom-red': !application.qualification_date}\"\n                            [(ngModel)]=\"application.qualification_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"case_constraint\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input  input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.case_constraint_id, 'border-bottom-red': !application.case_constraint_id}\"\n                          [(ngModel)]=\"application.case_constraint_id\">\n                            <option *ngFor=\"let item of applicationSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"level\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.level_id, 'border-bottom-red': !application.level_id}\"\n                          [(ngModel)]=\"application.level_id\">\n                            <option *ngFor=\"let item of levels\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                    </table>\n                  </div>\n\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block w3-block\" >\n                      <tr>\n                        <th>{{ \"department\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.department_id, 'border-bottom-red': !application.department_id}\"\n                          [(ngModel)]=\"application.department_id\">\n                          <ng-container *ngFor=\"let item of applicationSettings.DEPARTMENTS\">\n                            <option *ngIf=\"application.level_id == item.level_id\" value=\"{{ item.id }}\" >{{ item.name }}</option>\n                          </ng-container>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"division\" | trans }} *</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                          [ngClass]=\"{'border-bottom-dashed': application.division_id, 'border-bottom-red': !application.division_id}\"\n                          [(ngModel)]=\"application.division_id\">\n                            <ng-container *ngFor=\"let item of applicationSettings.DIVISIONS\">\n                              <option *ngIf=\"application.department_id == item.department_id\"  value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </ng-container>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_method\" | trans }}</th>\n                        <td>\n                          <select\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                          [(ngModel)]=\"application.registration_method_id\">\n                            <option *ngFor=\"let item of applicationSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>\n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\n                          <td>\n                            <input\n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                            [(ngModel)]=\"application.qualification_set_number\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input\n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                            [(ngModel)]=\"application.registeration_date\" >\n                          </td>\n                      </tr>\n                        <tr>\n                            <th>{{ \"coordination_password\" | trans }}</th>\n                            <td>\n                              <input\n                              type=\"password\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.password\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_code\" | trans }}</th>\n                            <td>\n                              <input\n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.acceptance_code\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_date\" | trans }}</th>\n                            <td>\n                              <input\n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.acceptance_date\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"phone_1\" | trans }}</th>\n                            <td>\n                              <input\n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.phone_1\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"email\" | trans }}</th>\n                            <td>\n                              <input\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.email\" >\n                            </td>\n                        </tr>\n\n\n                    </table>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\n              <div class=\"custom-panel-title\" >{{ \"old balance\" | trans }}</div>\n\n              <div class=\"custom-panel-body\"  >\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                        <tr>\n                          <th>{{ \"old_balance\" | trans }}</th>\n                          <td>\n                            <input\n                            type=\"number\"\n                            [readOnly]=\"isUpdate && !application.can_edit_old_balance\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm w3-block\"\n                            [(ngModel)]=\"application.old_balance\" >\n                          </td>\n                        </tr>\n                    </table>\n                  </div>\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                        <tr>\n                          <th>{{ \"old_balance_notes\" | trans }}</th>\n                          <td>\n                            <textarea\n                            [readOnly]=\"isUpdate && !application.can_edit_old_balance\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm w3-block\"\n                            [(ngModel)]=\"application.old_balance_notes\" ></textarea>\n                          </td>\n                        </tr>\n                    </table>\n                  </div>\n\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"custom-panel w3-display-container w3-round  application-panel military-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\n\n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"military_status\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.military_status_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"military_area\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.military_area_id\">\n                                <option *ngFor=\"let item of applicationSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                      </table>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" >\n                          <tr>\n                            <th>{{ \"triple_number\" | trans }}</th>\n                            <td>\n                              <input\n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.triple_number\" >\n                            </td>\n                          </tr>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"custom-panel w3-display-container w3-round application-panel parent-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\n\n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                            <tr>\n                              <th>{{ \"parent_name\" | trans }}</th>\n                              <td>\n                                <input\n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.parent_name\" >\n                              </td>\n                            </tr>\n                            <tr>\n                              <th>{{ \"parent_national_id\" | trans }}</th>\n                              <td>\n                                <input\n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.parent_national_id\" >\n                              </td>\n                            </tr>\n                            <tr>\n                              <th>{{ \"parent_address\" | trans }}</th>\n                              <td>\n                                <input\n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.parent_address\" >\n                              </td>\n                            </tr>\n                        </table>\n                      </div>\n\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block w3-block\" >\n                            <tr>\n                              <th>{{ \"parent_phone\" | trans }}</th>\n                              <td>\n                                <input\n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.parent_phone\" >\n                              </td>\n                            </tr>\n                            <tr>\n                              <th>{{ \"parent_job\" | trans }}</th>\n                              <td>\n                                <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.parent_job_id\">\n                                  <option *ngFor=\"let item of applicationSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>\n                              </td>\n                            </tr>\n                            <tr>\n                              <th>{{ \"relative_relation\" | trans }}</th>\n                              <td>\n                                <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.relative_relation_id\">\n                                  <option *ngFor=\"let item of applicationSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>\n                              </td>\n                            </tr>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n            <div class=\"custom-panel w3-display-container w3-round application-panel additional-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\n\n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"nationality\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.nationality_id\">\n                                <option *ngFor=\"let item of applicationSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"language_1\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.language_1_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"language_2\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.language_2_id\">\n                                <option *ngFor=\"let item of applicationSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"country\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.country_id\">\n                                <option *ngFor=\"let item of applicationSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"government\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.government_id\">\n                              <ng-container  *ngFor=\"let item of applicationSettings.GOVERNMENTS\">\n                                  <option *ngIf=\"application.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container>\n                              </select>\n                            </td>\n                          </tr>\n                      </table>\n                    </div>\n\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" >\n                          <tr>\n                            <th>{{ \"city\" | trans }}</th>\n                            <td>\n                              <select\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                                [(ngModel)]=\"application.city_id\">\n                                <ng-container  *ngFor=\"let item of applicationSettings.CITIES\">\n                                    <option *ngIf=\"application.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </ng-container>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"religion\" | trans }}</th>\n                            <td>\n                              <select\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.religion\">\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\n                              </select>\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"address\" | trans }}</th>\n                            <td>\n                              <input\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.address\" >\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"birth_address\" | trans }}</th>\n                            <td>\n                              <input\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.birth_address\" >\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"national_id_date\" | trans }}</th>\n                            <td>\n                              <input\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.national_id_date\" >\n                            </td>\n                          </tr>\n                          <tr>\n                            <th>{{ \"national_id_place\" | trans }}</th>\n                            <td>\n                              <input\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"\n                              [(ngModel)]=\"application.national_id_place\" >\n                            </td>\n                          </tr>\n\n                      </table>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"custom-panel w3-display-container w3-round application-panel document-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\n\n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                          <ng-container *ngFor=\"let item of applicationSettings.REQUIRED_DOCUMENTS\"  >\n                             <tr\n                             *ngIf=\"requiredDocumentList.get(item.id) > 0\"\n                             [ngClass]=\"{'w3-text-green': application['required_document_' + item.id]}\"\n                             >\n                               <th>\n                                 <i *ngIf=\"application['required_document_' + item.id]\"\n                                 class=\"fa fa-check-circle w3-text-green\"></i>\n\n                                 <i *ngIf=\"requiredDocumentList.get(item.id) == 1 && !application['required_document_' + item.id]\"\n                                 class=\"fa fa-exclamation-circle w3-text-red\"></i>\n                                 {{ item.name  }}\n                               </th>\n                               <th>{{ item.type | trans }}</th>\n                               <td>\n                                   <input\n                                   type=\"file\"\n                                   (change)=\"setFile($event, 'required_document_' + item.id, item.id)\"\n                                   class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\"   >\n                                 </td>\n                             </tr>\n                          </ng-container>\n                          </table>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n\n              <div class=\"custom-panel w3-display-container w3-round\">\n                  <div class=\"custom-panel-body\"  >\n                    <button mat-raised-button color=\"primary\" class=\"w3-margin-left\" [disabled]=\"isSubmitted\"  (click)=\"sendApplication()\" >{{ \"save changes\" | trans }}</button>\n\n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\" routerLink=\"/student\" >{{ \"exit\" | trans }}</a>\n                  </div>\n\n                </div>\n\n          </div>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/student/components/student/student-create/student-create.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/student/components/student/student-create/student-create.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.border-bottom-red {\n  border-bottom: 2px dashed red !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1jcmVhdGUvRTpcXHByb2plY3RzXFxzYW1zYVxcc2Ftc2FGcm9udEVuZC9zcmNcXGFwcFxcc3R1ZGVudFxcY29tcG9uZW50c1xcc3R1ZGVudFxcc3R1ZGVudC1jcmVhdGVcXHN0dWRlbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC9zdHVkZW50LWNyZWF0ZS9zdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQ0YsRUFBQTs7QUFFQTtFQUNFLHlDQUF3QyxFQUFBOztBQUcxQztFQUNFLHVDQUFzQyxFQUFBOztBQUd4QztFQUNFLDZCQUE0QixFQUFBOztBQUc5QjtFQUNFLHVDQUFzQztFQUN0Qyw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSx3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSw2QkFBNEI7RUFDNUIsc0JBQXFCO0VBQ3JCLHFCQUFvQjtFQUNwQixzQkFBcUI7RUFDckIsa0NBQWlDO0VBQ2pDLDZCQUE0QjtFQUM1Qiw4QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSx3QkFBdUIsRUFBQTs7QUFHekI7RUFDRSx1REFBbUQsRUFBQTs7QUFHckQ7RUFDRSx5QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxpQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UseUJBQXdCLEVBQUE7O0FBRTFCOztHQ1ZDOztBRGNEO0VBQ0UsdUJBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC9zdHVkZW50LWNyZWF0ZS9zdHVkZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWZlLWJveCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXItZGFzaGVkIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1tYXJnaW4tYm90dG9tIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDZweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXBhbmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyLWJvdHRvbS1yZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1wYW5lbC10aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTNweCFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc21hbGwtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLDAsMCwwLjMpIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2gtaW5wdXQge1xyXG4gICAgbWluLXdpZHRoOiA3MCUhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlci1ncmF5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1pbnB1dCB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4XHJcbiAgfVxyXG5cclxuICAubW9kYWwge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8haW1wb3J0YW50O1xyXG4gIH1cclxuICAvKlxyXG4gICAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4gICovXHJcblxyXG4gIHNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ib3R0b20tcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCByZWQgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogLTEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLnNtYWxsLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7IH1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIG1pbi13aWR0aDogNzAlICFpbXBvcnRhbnQ7IH1cblxuLmJvcmRlci1ncmF5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50OyB9XG5cbi5jdXN0b20taW5wdXQge1xuICBtaW4td2lkdGg6IDEyMHB4OyB9XG5cbi5tb2RhbCB7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLypcclxuICAgIGN1c3RvbSBidXR0b24gc3R5bGVcclxuICAqL1xuc2VsZWN0LCBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/student/components/student/student-create/student-create.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/student/components/student/student-create/student-create.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StudentCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCreateComponent", function() { return StudentCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/message */ "./src/app/shared/message.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/helper */ "./src/app/shared/helper.ts");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");
/* harmony import */ var _account_services_division_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../account/services/division.service */ "./src/app/account/services/division.service.ts");
/* harmony import */ var angular_hashtable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");












var StudentCreateComponent = /** @class */ (function () {
    function StudentCreateComponent(studentService, route) {
        this.studentService = studentService;
        this.route = route;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_6__["AppModule"].doc;
        /**
         * application object
         */
        this.application = {};
        this.applicationSettings = _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.isUpdate = false;
        this.requiredDocumentList = new angular_hashtable__WEBPACK_IMPORTED_MODULE_11__["HashTable"]();
        this.required_field = [
            'name',
            'qualification_id',
            'national_id',
            'registration_status_id',
            'academic_years_id',
            'grade',
            'qualification_date',
            'qualification_types_id',
            'level_id',
            'department_id',
            'case_constraint_id',
            'division_id',
            'gender'
        ];
        var id = this.route.snapshot.params['id'];
        if (id > 0) {
            this.loadApplication(id);
            this.isUpdate = true;
        }
    }
    StudentCreateComponent.prototype.loadApplication = function (id) {
        var _this = this;
        this.studentService.load(id).subscribe(function (res) {
            _this.application = res;
        });
    };
    StudentCreateComponent.prototype.validate = function () {
        var _this = this;
        var valid = true;
        this.required_field.forEach(function (element) {
            if (!_this.application[element])
                valid = false;
        });
        return valid;
    };
    StudentCreateComponent.prototype.validateOnRegisterationStatusDocument = function () {
        var _this = this;
        this.requiredDocumentList = new angular_hashtable__WEBPACK_IMPORTED_MODULE_11__["HashTable"]();
        this.applicationSettings.REGSITERATIN_STATUS_DOCUMENTS.forEach(function (element) {
            if (element.registeration_status_id == _this.application.registration_status_id) {
                _this.requiredDocumentList.put(element.required_document_id, 1);
            }
        });
    };
    StudentCreateComponent.prototype.sendApplication = function () {
        if (!this.validate()) {
            this.setCurrentError(_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all requird data'));
            return _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(_shared_helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].trans('fill all requird data'));
        }
        if (this.isUpdate)
            this.performUpdateApplication();
        else
            this.performSendApplication();
    };
    StudentCreateComponent.prototype.performUpdateApplication = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.application); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.application[key])
                data.append(key, this.application[key]);
        }
        //return console.log(data);
        this.studentService.update(data).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].success(data.message);
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(data.message);
                _this.setCurrentError(data.message);
            }
            _this.isSubmitted = false;
        });
    };
    StudentCreateComponent.prototype.performSendApplication = function () {
        var _this = this;
        this.isSubmitted = true;
        var data = new FormData();
        for (var _i = 0, _a = Object.keys(this.application); _i < _a.length; _i++) {
            var key = _a[_i];
            if (this.application[key])
                data.append(key, this.application[key]);
        }
        this.studentService.store(data).subscribe(function (res) {
            var data = res;
            if (data.status == 1) {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].success(data.message);
                _this.reset();
            }
            else {
                _shared_message__WEBPACK_IMPORTED_MODULE_2__["Message"].error(data.message);
                _this.setCurrentError(data.message);
            }
            _this.isSubmitted = false;
        });
    };
    StudentCreateComponent.prototype.reset = function () {
        this.application = {};
        this.currentError = '';
    };
    StudentCreateComponent.prototype.setCurrentError = function (error) {
        if (!error)
            return;
        error = error.replace(/<br>/g, '\n');
        this.currentError = error;
    };
    StudentCreateComponent.prototype.toggle = function (selector) {
        if (selector) {
            this.doc.jquery('.application-panel').slideUp(500);
            this.doc.jquery('.' + selector).slideDown(500);
        }
        else {
            this.doc.jquery('.application-panel').slideDown(500);
        }
    };
    StudentCreateComponent.prototype.setFile = function (event, key, required_document_id) {
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
    StudentCreateComponent.prototype.viewPersonalImage = function (event) {
        var _this = this;
        this.setFile(event, 'personal_photo');
        var reader = new FileReader();
        reader.readAsDataURL(this.application.personal_photo);
        reader.onload = function (_event) {
            _this.application.personal_photo_url = reader.result;
        };
    };
    StudentCreateComponent.prototype.emptyData = function () {
        this.application.qualification_types_id = null;
        this.application.level_id = null;
        this.application.level_name = null;
        this.application.grade = 0;
    };
    StudentCreateComponent.prototype.filterDataBaisedOnGender = function () {
        if (this.application.gender == 'female') {
            this.doc.jquery('.military-info-panel').hide();
            this.doc.jquery('.military-info-button').hide();
        }
    };
    StudentCreateComponent.prototype.ngOnInit = function () {
        this.levels = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_5__["LevelService"].LEVEL_PREFIX);
        this.divisions = _shared_cache__WEBPACK_IMPORTED_MODULE_4__["Cache"].get(_account_services_division_service__WEBPACK_IMPORTED_MODULE_10__["DivisionService"].DIVISION_PREFIX);
    };
    StudentCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-create',
            template: __webpack_require__(/*! ./student-create.component.html */ "./src/app/student/components/student/student-create/student-create.component.html"),
            styles: [__webpack_require__(/*! ./student-create.component.scss */ "./src/app/student/components/student/student-create/student-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_9__["StudentService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], StudentCreateComponent);
    return StudentCreateComponent;
}());



/***/ }),

/***/ "./src/app/student/components/student/student-index/student-index.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/student/components/student/student-index/student-index.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbList]=\"breadcrumbList\"></app-breadcrumb>\n\n\n<div class=\"w3-display-bottomleft w3-padding\" style=\"position: fixed;z-index: 9999\" >\n    <button  \n    mat-fab color=\"primary\"\n    class=\"w3-large\"\n    routerLink=\"/student/create\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-plus\" ></span>  \n    </button> \n</div>\n\n    <!--\n<div class=\"box box-primary  table-responsive\" >\n  <div class=\"box-header\">\n    \n\n\n    <button *ngIf=\"showRemoveButton\" (click)=\"removeResources()\" class=\"btn btn-danger\" style=\"margin: 5px\"  > \n      <span class=\"fa fa-trash\" ></span>\n    </button>\n  </div>\n  <br>\n\n</div>\n    -->\n\n<div class=\"w3-row student-container nicescroll\" style=\"padding: 5px;\"    >\n  <div *ngIf=\"isLoad\" class=\"w3-block text-center w3-padding\" >\n    <i class=\"fa fa-spin fa-refresh w3-jumbo w3-text-indigo\"></i>\n  </div>\n  <ng-container *ngFor=\"let item of resources.data\" >\n      <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 student-list-col\" >\n          <div class=\"media material-shadow w3-white w3-padding w3-display-container student-list-item\">\n\n              <div class=\"w3-display-topleft w3-padding fa fa-certificate w3-jumbo w3-text-deep-orange\" style=\"z-index: 1;font-size: 80px!important\"  >\n\n              </div>\n              <div class=\"w3-display-topleft w3-padding w3-tiny w3-text-white text-center\" style=\"z-index: 2;top: 1px;left: 6%;\" >\n                <!--\n\n                <input type=\"checkbox\" style=\"margin: 0px!important\" class=\"w3-check w3-margin\" (click)=\"toggleFromTrash(item.id)\"  >\n                -->\n                <br>\n                <br>\n                <b>{{ item.paid_value }}</b>\n                <br>\n                <b>جنيه</b>\n              </div>\n\n            <div class=\"media-left\">\n                <a  >\n                  <img class=\"media-object w3-round\" [src]=\"item.image\"  style=\"width: 100px;\" >\n                </a>\n            </div>\n            <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{ item.name.substring(0, 15) }}..</h4>\n            <table class=\"table w3-tiny\" >\n              <tr>\n                <th>{{ \"level\" | trans }}</th>\n                <td>{{ item.level? item.level.name : '' }}</td>\n              </tr> \n              <tr>\n                <th>{{ \"academic_year\" | trans }}</th>\n                <td>{{ item.academic_year? item.academic_year.name : '' }}</td>\n              </tr>\n              <tr>\n                <th>{{ \"division\" | trans }}</th>\n                <td>{{ item.division? item.division.name : '' }}</td>\n              </tr> \n              <tr>\n                <th>{{ \"qualification\" | trans }}</th>\n                <td>{{ item.qualification? item.qualification.name : '' }}</td>\n              </tr>\n              <tr>\n                <th>{{ \"registeration_status\" | trans }}</th>\n                <td>{{ item.registeration_status? item.registeration_status.name : '' }}</td>\n              </tr>\n            </table>  \n            <div class=\"text-right\" > \n              <a href=\"#\" [routerLink]=\"['/student/', item.id]\" style=\"margin: 5px\" ><i class=\"material-shadow fa fa-edit btn btn-warning btn-sm\" ></i></a>\n              \n              <a href=\"#\" [routerLink]=\"['/student/show/', item.id]\" style=\"margin: 5px\" ><i class=\"material-shadow fa fa-desktop btn btn-success btn-sm\" ></i></a> \n              \n              <button (click)=\"showStudentPayments(item)\" style=\"margin: 5px\" class=\"material-shadow fa fa-money btn w3-indigo btn-sm\" > {{ \"student payments\" | trans }} </button> \n            </div>\n          </div>\n      </div>\n    </div>\n  </ng-container>\n  \n\n\n</div>\n<br>\n<div class=\"text-center w3-center\" >\n    <nav aria-label=\"Page navigation\">\n        <ul class=\"pagination\">\n          <li>\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.prev_page}\" (click)=\"loadResources(resources.prev_page)\" aria-label=\"Previous\">\n              <span aria-hidden=\"true\">&laquo;</span>\n            </a>\n          </li>\n          <li *ngFor=\"let item of resources.pages_arr\"  >\n            <a class=\"\" [ngClass]=\"{'active': resources.current_page == item}\"  (click)=\"loadResources(item)\">{{ item }}</a>\n          </li>  \n          <li>\n            <a   class=\"\" [ngClass]=\"{'disabled': !resources.next_page}\"  (click)=\"loadResources(resources.next_page)\" aria-label=\"Next\">\n              <span aria-hidden=\"true\">&raquo;</span>\n            </a>\n          </li>\n        </ul>\n      </nav>\n</div> \n\n \n<!-- remove modal -->\n<div class=\"w3-modal w3-block\" *ngIf=\"showRemoveModal\"  role=\"dialog\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">{{ \"remove applications\" | trans }}</h4>\n        </div>\n        <div class=\"modal-body text-center\">\n            <i class=\"fa fa-spinner fa-spin w3-jumbo w3-text-indigo w3-center\" ></i>\n            <br>\n            {{ trashList.size() }} - {{ \"removed\" | trans }} {{ trashList.size() + removed.length }}\n        </div>\n        <div class=\"modal-footer\"> \n        </div>\n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div><!-- /.modal -->\n \n \n<!-- student payments modal -->\n<app-student-payment [payments]=\"selectedItem.payment_details? selectedItem.payment_details : []\" ></app-student-payment>\n"

/***/ }),

/***/ "./src/app/student/components/student/student-index/student-index.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/student/components/student/student-index/student-index.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".student-list-item {\n  height: 220px;\n  margin: 5px !important; }\n\n.student-list-col {\n  padding: 5px !important; }\n\n.student-container {\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1pbmRleC9FOlxccHJvamVjdHNcXHNhbXNhXFxzYW1zYUZyb250RW5kL3NyY1xcYXBwXFxzdHVkZW50XFxjb21wb25lbnRzXFxzdHVkZW50XFxzdHVkZW50LWluZGV4XFxzdHVkZW50LWluZGV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFxQixFQUFBOztBQUd6QjtFQUNJLHVCQUFzQixFQUFBOztBQUcxQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zdHVkZW50L3N0dWRlbnQtaW5kZXgvc3R1ZGVudC1pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50LWxpc3QtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgbWFyZ2luOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3R1ZGVudC1saXN0LWNvbCB7XHJcbiAgICBwYWRkaW5nOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3R1ZGVudC1jb250YWluZXJ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/student/components/student/student-index/student-index.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/student/components/student/student-index/student-index.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StudentIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentIndexComponent", function() { return StudentIndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/angular-hashtable */ "./node_modules/angular-hashtable/fesm5/angular-hashtable.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");





var StudentIndexComponent = /** @class */ (function () {
    function StudentIndexComponent(studentService) {
        this.studentService = studentService;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"].doc;
        // Resources list
        this.resources = {};
        // init breadcrum
        this.breadcrumbList = [];
        // remove options
        this.showRemoveButton = false;
        this.showRemoveModal = false;
        this.trashList = new _node_modules_angular_hashtable__WEBPACK_IMPORTED_MODULE_2__["HashTable"]();
        this.removed = [];
        this.isLoad = false;
        this.selectedItem = {};
        // init breadcrum
        this.breadcrumbList = [
            { name: 'home', url: '/' },
            { name: 'students' }
        ];
    }
    StudentIndexComponent.prototype.toggleFromTrash = function (id) {
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
    StudentIndexComponent.prototype.removeResources = function () {
        var _this = this;
        this.showRemoveModal = true;
        var queue = this.trashList.getKeys();
        if (queue.length > 0) {
            var id_1 = queue.pop();
            this.studentService.destroy(id_1).subscribe(function () {
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
    StudentIndexComponent.prototype.prePagniation = function () {
        if (!this.resources.data)
            return;
        this.resources.prev_page = this.resources.prev_page_url ? this.resources.prev_page_url.replace(this.resources.path + '?page=', '') : null;
        this.resources.next_page = this.resources.next_page_url ? this.resources.next_page_url.replace(this.resources.path + '?page=', '') : null;
        this.resources.pages = Math.ceil(this.resources.total / this.resources.per_page);
        this.resources.pages_arr = [];
        for (var i = 0; i < this.resources.pages; i++)
            this.resources.pages_arr.push(i + 1);
    };
    StudentIndexComponent.prototype.loadResources = function (page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.isLoad = true;
        this.studentService.get(page).subscribe(function (res) {
            _this.resources = res;
            _this.prePagniation();
            _this.isLoad = false;
        });
    };
    StudentIndexComponent.prototype.setStudentContainerHeight = function () {
        //const height = window.innerHeight - 90;
        //this.doc.jquery('.student-container').css('height', height); 
    };
    StudentIndexComponent.prototype.ngOnInit = function () {
        this.setStudentContainerHeight();
        this.loadResources();
    };
    StudentIndexComponent.prototype.showStudentPayments = function (item) {
        this.selectedItem = item;
        this.doc.jquery('#studentPayments').modal('show');
    };
    StudentIndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-index',
            template: __webpack_require__(/*! ./student-index.component.html */ "./src/app/student/components/student/student-index/student-index.component.html"),
            styles: [__webpack_require__(/*! ./student-index.component.scss */ "./src/app/student/components/student/student-index/student-index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"]])
    ], StudentIndexComponent);
    return StudentIndexComponent;
}());



/***/ }),

/***/ "./src/app/student/components/student/student-show/student-show.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/student/components/student/student-show/student-show.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-10 col-md-10 col-sm-12\">\n      <div class=\"w3-white material-shadow safe-box\">\n        <div class=\"safe-box-header w3-xlarge\">\n          {{ \"show student\" | trans }}\n        </div>\n        <br>\n        <div class=\"border-bottom-dashed\" ></div>\n        <br>\n  \n        <div class=\"safe-box-body row\" >\n  \n          <div class=\"col-lg-3 col-md-3 col-sm-12\" >\n            <img [src]=\"student.image?  student.image : defaultImage\" class=\"w3-block w3-round border-gray\" >\n            <br> \n            <div class=\"custom-panel w3-display-container w3-round\" style=\"padding: 5px\" >\n  \n              <div   \n                class=\"alert alert-danger w3-block btn-margin-bottom text-center\" \n               >\n                {{ currentError }}\n              </div>\n\n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle(null)\"  >{{ \"all info\" | trans }}</button> \n              \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('student-info-panel')\"  >{{ \"student info\" | trans }}</button> \n             \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('military-info-panel')\"  >{{ \"military info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('parent-info-panel')\"  >{{ \"parent info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('additional-info-panel')\"  >{{ \"additional info\" | trans }}</button> \n               \n              <button class=\"btn btn-default w3-block small-shadow btn-margin-bottom\"  (click)=\"toggle('document-info-panel')\"  >{{ \"required documents\" | trans }}</button> \n               \n            </div>\n          </div>\n  \n          <div class=\"col-lg-9 col-md-9 col-sm-12\" >\n  \n             \n  \n            <!--\n\n        => student basic info\n        name\t                  email\t\n        academic_years_id\t      grade\t\n        registeration_date\t    phone_1\n        registration_status_id\tregistration_method_id\n        qualification_date\t    qualification_set_number\t\n        qualification_types_id\tqualification_id\t\n        level_id\t              case_constraint_id\n        national_id\t            password  \n        acceptance_code\t        acceptance_date\t\n        status\t                writen_by\t\n        \n      \n        => additional info\n        \t\t \n        nationality_id\t        gender\t\n        language_1_id\t          language_2_id\t\n        city_id\t                government_id\t \n        country_id\t            religion \n        address\t                birth_address\t\n        national_id_date\t      national_id_place\t \n\n        => military info\n        military_status_id\t    military_area_id \n        triple_number\n        \n        => parent info\n        parent_name\t            parent_national_id\t\n        parent_job_id\t          parent_address\t\n        parent_phone\t          relative_relation_id\n        \n        => personal image\n        personal_photo\t\n\n        => required document\n        \n            -->\n            <div class=\"custom-panel w3-display-container w3-round student-panel student-info-panel\">\n              <div class=\"custom-panel-title\" >{{ \"student basic info\" | trans }}</div>\n  \n              <div class=\"custom-panel-body\"  >\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block\" >\n                      <tr>\n                        <th>{{ \"student name\" | trans }} *</th>\n                        <td>\n                          <input readonly  \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"student.name\" >\n                        </td>\n                      </tr> \n                      <tr> \n                          <th>{{ \"email\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.email\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"academic_years\" | trans }} *</th>\n                        <td>\n                          <select readonly \n                          (change)=\"watchLevel()\"\n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"student.academic_years_id\">\n                            <option *ngFor=\"let item of studentSettings.ACADEMIC_YEARS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"grade\" | trans }} *</th>\n                          <td>\n                            <input readonly  \n                            (change)=\"watchLevel()\"\n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.grade\" >\n                            <p *ngIf=\"gradeError\" class=\"w3-text-red w3-tiny\"  >\n                              {{ gradeError }}\n                            </p>\n                          </td>\n                      </tr> \n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.registeration_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"registeration_date\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.registeration_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_status\" | trans }} *</th>\n                        <td>\n                          <select readonly \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"student.registration_status_id\">\n                            <option *ngFor=\"let item of studentSettings.REGISTERATION_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                        <th>{{ \"registration_method\" | trans }}</th>\n                        <td>\n                          <select readonly \n                          class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                          [(ngModel)]=\"student.registration_method_id\">\n                            <option *ngFor=\"let item of studentSettings.REGISTERATION_METHODS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                          </select>  \n                        </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"national_id\" | trans }} *</th>\n                          <td>\n                            <input readonly  \n                            type=\"text\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.national_id\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_date\" | trans }} *</th>\n                          <td>\n                            <input readonly  \n                            type=\"date\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.qualification_date\" >\n                          </td>\n                      </tr>\n                      <tr>\n                          <th>{{ \"qualification_set_number\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"number\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.qualification_set_number\" >\n                          </td>\n                      </tr>\n                    </table>\n                  </div>  \n\n                  <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                    <table class=\"table w3-block w3-block\" >\n                        <tr>\n                          <th>{{ \"qualification\" | trans }} *</th>\n                          <td>\n                            <select readonly \n                            (change)=\"watchLevel()\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.qualification_id\">\n                              <option *ngFor=\"let item of studentSettings.QUALIFICATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"qualification_types\" | trans }} *</th>\n                          <td>\n                            <select readonly \n                            (change)=\"watchLevel()\"\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.qualification_types_id\">\n                              <ng-container *ngFor=\"let item of studentSettings.QUALIFICATION_TYPES\">\n                                  <option *ngIf=\"item.qualification_id == student.qualification_id && item.academic_year_id == student.academic_years_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container>\n                              \n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"level\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"text\"\n                            readonly\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.level_name\" >\n                            <input readonly  \n                            type=\"hidden\"  \n                            [(ngModel)]=\"student.level_id\" >\n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"division\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"text\"\n                            readonly\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.division? student.division.name : student.division_id\" >\n                            \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"department\" | trans }}</th>\n                          <td>\n                            <input readonly  \n                            type=\"text\"\n                            readonly\n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.department? student.department.name : student.department_id\" >\n                            \n                          </td>\n                        </tr>\n                        <tr>\n                          <th>{{ \"case_constraint\" | trans }}</th>\n                          <td>\n                            <select readonly \n                            class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                            [(ngModel)]=\"student.case_constraint_id\">\n                              <option *ngFor=\"let item of studentSettings.CASE_CONSTRAINTS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                            </select>  \n                          </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"coordination_password\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"password\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.password\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_code\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.acceptance_code\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"acceptance_date\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"date\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.acceptance_date\" >\n                            </td>\n                        </tr>\n                        <tr>\n                            <th>{{ \"phone_1\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.phone_1\" >\n                            </td>\n                        </tr>\n\n                      \n                    </table>\n                  </div>\n                </div>\n              </div>\n  \n            </div>\n \n            <div class=\"custom-panel w3-display-container w3-round  student-panel military-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"military info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"military_status\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.military_status_id\">\n                                <option *ngFor=\"let item of studentSettings.MALITARY_STATUS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                          <tr>\n                            <th>{{ \"military_area\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.military_area_id\">\n                                <option *ngFor=\"let item of studentSettings.MALITARY_AREAS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" > \n                          <tr>\n                            <th>{{ \"triple_number\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              type=\"text\"\n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.triple_number\" >\n                            </td>\n                          </tr> \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n \n              <div class=\"custom-panel w3-display-container w3-round student-panel parent-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"parent info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block\" >\n                            <tr>\n                              <th>{{ \"parent_name\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.parent_name\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_national_id\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.parent_national_id\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_address\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.parent_address\" >\n                              </td>\n                            </tr>  \n                        </table>\n                      </div>  \n    \n                      <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                        <table class=\"table w3-block w3-block\" > \n                            <tr>\n                              <th>{{ \"parent_phone\" | trans }}</th>\n                              <td>\n                                <input readonly  \n                                type=\"text\"\n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.parent_phone\" >\n                              </td>\n                            </tr> \n                            <tr>\n                              <th>{{ \"parent_job\" | trans }}</th>\n                              <td>\n                                <select readonly \n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.parent_job_id\">\n                                  <option *ngFor=\"let item of studentSettings.PARENT_JOBS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>   \n                            <tr>\n                              <th>{{ \"relative_relation\" | trans }}</th>\n                              <td>\n                                <select readonly \n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.relative_relation_id\">\n                                  <option *ngFor=\"let item of studentSettings.RELATIVE_RELATIONS\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </select>  \n                              </td>\n                            </tr>  \n                        </table>\n                      </div>\n                    </div>\n                  </div>\n      \n                </div>\n\n            <div class=\"custom-panel w3-display-container w3-round student-panel additional-info-panel\">\n                <div class=\"custom-panel-title\" >{{ \"additional info\" | trans }}</div>\n    \n                <div class=\"custom-panel-body\"  >\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block\" >\n                          <tr>\n                            <th>{{ \"nationality\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.nationality_id\">\n                                <option *ngFor=\"let item of studentSettings.NATIONALITIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"gender\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.gender\">\n                                <option value=\"male\">{{ \"male\" | trans }}</option>\n                                <option value=\"female\">{{ \"female\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_1\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.language_1_id\">\n                                <option *ngFor=\"let item of studentSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"language_2\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.language_2_id\">\n                                <option *ngFor=\"let item of studentSettings.LANGUAGUES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"country\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.country_id\">\n                                <option *ngFor=\"let item of studentSettings.COUNTRIES\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"government\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.government_id\">\n                              <ng-container  *ngFor=\"let item of studentSettings.GOVERNMENTS\">\n                                  <option *ngIf=\"student.country_id == item.country_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                              </ng-container> \n                              </select>  \n                            </td>\n                          </tr>  \n                      </table>\n                    </div>  \n  \n                    <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                      <table class=\"table w3-block w3-block\" >\n                          <tr>\n                            <th>{{ \"city\" | trans }}</th>\n                            <td>\n                              <select readonly \n                                class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                                [(ngModel)]=\"student.city_id\">\n                                <ng-container  *ngFor=\"let item of studentSettings.CITIES\">\n                                    <option *ngIf=\"student.government_id == item.government_id\" value=\"{{ item.id }}\">{{ item.name }}</option>\n                                </ng-container> \n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"religion\" | trans }}</th>\n                            <td>\n                              <select readonly \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.religion\">\n                                <option value=\"muslim\">{{ \"muslim\" | trans }}</option>\n                                <option value=\"christian\">{{ \"christian\" | trans }}</option>\n                              </select>  \n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"address\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"birth_address\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.birth_address\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_date\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.national_id_date\" >\n                            </td>\n                          </tr> \n                          <tr>\n                            <th>{{ \"national_id_place\" | trans }}</th>\n                            <td>\n                              <input readonly  \n                              class=\"custom-input form-control input-sm w3-input border-bottom-dashed input-sm\" \n                              [(ngModel)]=\"student.national_id_place\" >\n                            </td>\n                          </tr> \n                        \n                      </table>\n                    </div>\n                  </div>\n                </div>\n    \n              </div>\n           \n              <div class=\"custom-panel w3-display-container w3-round student-panel document-info-panel\">\n                  <div class=\"custom-panel-title\" >{{ \"required documents info\" | trans }}</div>\n      \n                  <div class=\"custom-panel-body\"  >\n                    <div class=\"row\">\n                      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                        <div class=\"row w3-padding\" >\n                          <div class=\"w3-padding text-center\" style=\"float: right;min-width: 120px;\" *ngFor=\"let item of student.student_required_document\" >\n                              <a [href]=\"item.path_url\" target=\"_blank\"  >\n                                  <img [src]=\"item.path_url\"  class=\" w3-round material-shadow w3-center\" style=\"height: 100px;\" >\n                                  <br>\n                                  {{ item.required_document.name  }}\n                              </a>\n                          </div>\n                        </div> \n                      </div>   \n                    </div>\n                  </div>\n      \n                </div>\n   \n              <div class=\"custom-panel w3-display-container w3-round\">\n                  <div class=\"custom-panel-body\"  > \n                     \n                    <a href=\"#\" class=\"btn btn-default small-shadow w3-margin-left\"  routerLink=\"/student\" >{{ \"exit\" | trans }}</a>\n                  </div>\n      \n                </div>\n                  \n          </div>\n  \n  \n  \n        </div>\n      </div>\n    </div>\n  </div>\n   \n  \n  \n  "

/***/ }),

/***/ "./src/app/student/components/student/student-show/student-show.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/student/components/student/student-show/student-show.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".safe-box {\n  padding: 10px; }\n\n.border-bottom-dashed {\n  border-bottom: 2px dashed gray !important; }\n\n.border-dashed {\n  border: 2px dashed lightgray !important; }\n\n.btn-margin-bottom {\n  margin-bottom: 6px !important; }\n\n.custom-panel {\n  border: 2px dashed lightgray !important;\n  margin-bottom: 15px !important; }\n\n.custom-panel-title {\n  position: absolute !important;\n  right: 10px !important;\n  top: -13px !important;\n  width: auto !important;\n  background-color: white !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important; }\n\n.custom-panel-body {\n  padding: 10px !important; }\n\n.small-shadow {\n  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.3) !important; }\n\n.search-input {\n  min-width: 70% !important; }\n\n.border-gray {\n  border: 1px solid gray !important; }\n\n.custom-input {\n  min-width: 120px;\n  background-color: transparent !important; }\n\n.modal {\n  overflow: auto !important; }\n\n/*\r\n    custom button style\r\n  */\n\nselect, input[type=file] {\n  padding: 0px !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R1ZGVudC9jb21wb25lbnRzL3N0dWRlbnQvc3R1ZGVudC1zaG93L0U6XFxwcm9qZWN0c1xcc2Ftc2FcXHNhbXNhRnJvbnRFbmQvc3JjXFxhcHBcXHN0dWRlbnRcXGNvbXBvbmVudHNcXHN0dWRlbnRcXHN0dWRlbnQtc2hvd1xcc3R1ZGVudC1zaG93LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdHVkZW50L2NvbXBvbmVudHMvc3R1ZGVudC9zdHVkZW50LXNob3cvc3R1ZGVudC1zaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFDRixFQUFBOztBQUVBO0VBQ0UseUNBQXdDLEVBQUE7O0FBRzFDO0VBQ0UsdUNBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsNkJBQTRCLEVBQUE7O0FBRzlCO0VBQ0UsdUNBQXNDO0VBQ3RDLDhCQUE2QixFQUFBOztBQUkvQjtFQUNFLDZCQUE0QjtFQUM1QixzQkFBcUI7RUFDckIscUJBQW9CO0VBQ3BCLHNCQUFxQjtFQUNyQixrQ0FBaUM7RUFDakMsNkJBQTRCO0VBQzVCLDhCQUE2QixFQUFBOztBQUcvQjtFQUNFLHdCQUF1QixFQUFBOztBQUd6QjtFQUNFLHVEQUFtRCxFQUFBOztBQUdyRDtFQUNFLHlCQUF3QixFQUFBOztBQUcxQjtFQUNFLGlDQUFnQyxFQUFBOztBQUdsQztFQUNFLGdCQUFnQjtFQUNoQix3Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx5QkFBd0IsRUFBQTs7QUFFMUI7O0dDVkM7O0FEY0Q7RUFDRSx1QkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvY29tcG9uZW50cy9zdHVkZW50L3N0dWRlbnQtc2hvdy9zdHVkZW50LXNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FmZS1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweFxyXG4gIH1cclxuICBcclxuICAuYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBncmF5IWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1kYXNoZWQge1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXBhbmVsIHtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jdXN0b20tcGFuZWwtdGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHRvcDogLTEzcHghaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLXBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbWFsbC1zaGFkb3cge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IDBweCByZ2JhKDAsMCwwLDAuMykhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogNzAlIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlci1ncmF5IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWlucHV0IHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbCB7XHJcbiAgICBvdmVyZmxvdzogYXV0byFpbXBvcnRhbnQ7XHJcbiAgfSBcclxuICAvKlxyXG4gICAgY3VzdG9tIGJ1dHRvbiBzdHlsZVxyXG4gICovXHJcblxyXG4gIHNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gIH1cclxuICAgIiwiLnNhZmUtYm94IHtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uYm9yZGVyLWJvdHRvbS1kYXNoZWQge1xuICBib3JkZXItYm90dG9tOiAycHggZGFzaGVkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLWRhc2hlZCB7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGdyYXkgIWltcG9ydGFudDsgfVxuXG4uYnRuLW1hcmdpbi1ib3R0b20ge1xuICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLXBhbmVsIHtcbiAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB0b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuLmN1c3RvbS1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50OyB9XG5cbi5zbWFsbC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50OyB9XG5cbi5zZWFyY2gtaW5wdXQge1xuICBtaW4td2lkdGg6IDcwJSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItZ3JheSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDsgfVxuXG4uY3VzdG9tLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4ubW9kYWwge1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8qXHJcbiAgICBjdXN0b20gYnV0dG9uIHN0eWxlXHJcbiAgKi9cbnNlbGVjdCwgaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/student/components/student/student-show/student-show.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/student/components/student/student-show/student-show.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StudentShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentShowComponent", function() { return StudentShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/cache */ "./src/app/shared/cache.ts");
/* harmony import */ var _account_services_level_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../account/services/level.service */ "./src/app/account/services/level.service.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/student.service */ "./src/app/student/services/student.service.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");








var StudentShowComponent = /** @class */ (function () {
    function StudentShowComponent(studentService, route) {
        var _this = this;
        this.studentService = studentService;
        this.route = route;
        this.doc = _app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"].doc;
        /**
         * student object
         */
        this.student = {};
        this.studentSettings = _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_7__["ApplicationSettingService"];
        this.defaultImage = '/assets/img/avatar.png';
        this.isSubmitted = false;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id > 0) {
                _this.loadApplication(id);
            }
        });
    }
    StudentShowComponent.prototype.loadApplication = function (id) {
        var _this = this;
        this.studentService.load(id).subscribe(function (res) {
            _this.student = res;
            _this.setLevel();
        });
    };
    StudentShowComponent.prototype.toggle = function (selector) {
        if (selector) {
            this.doc.jquery('.student-panel').slideUp(500);
            this.doc.jquery('.' + selector).slideDown(500);
        }
        else {
            this.doc.jquery('.student-panel').slideDown(500);
        }
    };
    StudentShowComponent.prototype.setLevel = function () {
        var _this = this;
        var levels = _shared_cache__WEBPACK_IMPORTED_MODULE_2__["Cache"].get(_account_services_level_service__WEBPACK_IMPORTED_MODULE_3__["LevelService"].LEVEL_PREFIX);
        levels.forEach(function (element) {
            if (element.id == _this.student.level_id)
                _this.student.level_name = element.name;
        });
    };
    StudentShowComponent.prototype.ngOnInit = function () {
    };
    StudentShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student-show',
            template: __webpack_require__(/*! ./student-show.component.html */ "./src/app/student/components/student/student-show/student-show.component.html"),
            styles: [__webpack_require__(/*! ./student-show.component.scss */ "./src/app/student/components/student/student-show/student-show.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_student_service__WEBPACK_IMPORTED_MODULE_6__["StudentService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], StudentShowComponent);
    return StudentShowComponent;
}());



/***/ }),

/***/ "./src/app/student/services/student.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/student/services/student.service.ts ***!
  \*****************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/auth */ "./src/app/shared/auth.ts");




var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
    }
    /**
     * get services from api
     *
     */
    StudentService.prototype.get = function (page) {
        if (page === void 0) { page = 1; }
        return this.http.get('students?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken() + "&page=" + page);
    };
    /**
     * get services from api
     *
     */
    StudentService.prototype.load = function (id) {
        return this.http.get('students/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken());
    };
    /**
     * store new service
     */
    StudentService.prototype.store = function (data) {
        return this.http.post('students/store' + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * update service
     */
    StudentService.prototype.update = function (data) {
        return this.http.post('students/update/' + data.get('id') + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), data);
    };
    /**
     * remove service
     */
    StudentService.prototype.destroy = function (id) {
        return this.http.post('students/delete/' + id + '?api_token=' + _shared_auth__WEBPACK_IMPORTED_MODULE_3__["Auth"].getApiToken(), null);
    };
    StudentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/student/student-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/student/student-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StudentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentRoutingModule", function() { return StudentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/student/student-index/student-index.component */ "./src/app/student/components/student/student-index/student-index.component.ts");
/* harmony import */ var _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/student/student-create/student-create.component */ "./src/app/student/components/student/student-create/student-create.component.ts");
/* harmony import */ var _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/student/student-show/student-show.component */ "./src/app/student/components/student/student-show/student-show.component.ts");






var routes = [
    {
        path: '',
        component: _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_3__["StudentIndexComponent"]
    },
    {
        path: ':id',
        component: _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateComponent"]
    },
    {
        path: 'show/:id',
        component: _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_5__["StudentShowComponent"]
    },
    {
        path: 'create',
        component: _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_4__["StudentCreateComponent"]
    },
    /* {
       path: "settings",
       component: AdminisionComponent,
       children: [
         {
           path: 'required_documents',
           component: RequiredDocumentIndexComponent
         },
       ]
     },*/
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var StudentRoutingModule = /** @class */ (function () {
    function StudentRoutingModule() {
    }
    StudentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StudentRoutingModule);
    return StudentRoutingModule;
}());



/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <!-- navbar list -->\n    <div class=\"box box-primary material-shadow\">\n      <div class=\"box-body box-profile\">\n        <img class=\"profile-user-img img-responsive img-circle\" style=\"width: 60%!important\" src=\"/assets/img/account_settings.gif\" alt=\"User profile picture\">\n\n        <h3 class=\"profile-username text-center\">{{ \"adminision_settings\" | trans }}</h3>\n \n\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <a href=\"#\" routerLink='/adminision/settings/required_documents' >\n                <b>{{ \"required_documents\" | trans }}</b> \n                <a href=\"#\"  class=\"pull-left\">\n                  <i class=\"fa fa-newspaper-o\" ></i> \n                </a>\n            </a>\n          </li> \n        </ul> \n      </div>\n      <!-- /.box-body -->\n    </div>\n    <!-- /.box -->\n \n  </div>\n  <!-- /.col -->\n  <div class=\"col-md-9\"> \n      <router-outlet></router-outlet>\n  </div>\n  <!-- /.col -->\n</div>"

/***/ }),

/***/ "./src/app/student/student.component.scss":
/*!************************************************!*\
  !*** ./src/app/student/student.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnQvc3R1ZGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StudentComponent = /** @class */ (function () {
    function StudentComponent() {
    }
    StudentComponent.prototype.ngOnInit = function () {
    };
    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.scss */ "./src/app/student/student.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/student/student.module.ts":
/*!*******************************************!*\
  !*** ./src/app/student/student.module.ts ***!
  \*******************************************/
/*! exports provided: StudentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentModule", function() { return StudentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _student_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./student-routing.module */ "./src/app/student/student-routing.module.ts");
/* harmony import */ var _student_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/student/student-show/student-show.component */ "./src/app/student/components/student/student-show/student-show.component.ts");
/* harmony import */ var _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/student/student-create/student-create.component */ "./src/app/student/components/student/student-create/student-create.component.ts");
/* harmony import */ var _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/student/student-index/student-index.component */ "./src/app/student/components/student/student-index/student-index.component.ts");
/* harmony import */ var _adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../adminision/services/application-setting.service */ "./src/app/adminision/services/application-setting.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../account/account.module */ "./src/app/account/account.module.ts");












var StudentModule = /** @class */ (function () {
    function StudentModule(applicationSettingService) {
        this.applicationSettingService = applicationSettingService;
        this.applicationSettingService.loadSettings();
    }
    StudentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _student_component__WEBPACK_IMPORTED_MODULE_5__["StudentComponent"],
                _components_student_student_create_student_create_component__WEBPACK_IMPORTED_MODULE_7__["StudentCreateComponent"],
                _components_student_student_index_student_index_component__WEBPACK_IMPORTED_MODULE_8__["StudentIndexComponent"],
                _components_student_student_show_student_show_component__WEBPACK_IMPORTED_MODULE_6__["StudentShowComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _student_routing_module__WEBPACK_IMPORTED_MODULE_4__["StudentRoutingModule"],
                _account_account_module__WEBPACK_IMPORTED_MODULE_11__["AccountModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_3__["DataTablesModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_adminision_services_application_setting_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationSettingService"]])
    ], StudentModule);
    return StudentModule;
}());



/***/ })

}]);
//# sourceMappingURL=student-student-module.js.map