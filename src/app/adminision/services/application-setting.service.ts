import { Injectable } from '@angular/core';
import { Request } from 'src/app/shared/request';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Auth } from '../../shared/auth';

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingService {

  public static NATIONALITIES: any = [];
  public static CASE_CONSTRAINTS: any = [];
  public static ACADEMIC_YEARS: any = [];
  public static QUALIFICATION_TYPES: any = [];
  public static QUALIFICATIONS: any = [];
  public static REGISTERATION_STATUS: any = [];
  public static REGISTERATION_METHODS: any = [];
  public static LANGUAGES: any = [];
  public static CITIES: any = [];
  public static GOVERNMENTS: any = [];
  public static COUNTRIES: any = [];
  public static MILITARY_STATUS: any = [];
  public static MILITARY_AREAS: any = [];
  public static PARENT_JOBS: any = [];
  public static RELATIVE_RELATIONS: any = [];
  public static REQUIRED_DOCUMENTS: any = [];
  public static DEPARTMENTS: any = [];
  public static REGSITERATIN_STATUS_DOCUMENTS: any = [];
  public static DIVISIONS: any = [];
  public static SETTINGS: any = [];

  public static LOADED: any = false;

  public requestQueue =  [];

  constructor(private http: HttpClient) {
    this.queueRequests();
  }

  queueRequests() {
    Request.addToQueue({observer: this.getCaseConstraints(), action: (res)=>{ ApplicationSettingService.CASE_CONSTRAINTS = res; }});
    Request.addToQueue({observer: this.getNationalities(), action: (res)=>{ ApplicationSettingService.NATIONALITIES = res; }});
    Request.addToQueue({observer: this.getAcademicYears(), action: (res)=>{ ApplicationSettingService.ACADEMIC_YEARS = res; }});
    Request.addToQueue({observer: this.getQualificationTypes(), action: (res)=>{ ApplicationSettingService.QUALIFICATION_TYPES = res; }});
    Request.addToQueue({observer: this.getQualifications(), action: (res)=>{ ApplicationSettingService.QUALIFICATIONS = res; }});
    Request.addToQueue({observer: this.getRegisterationStatus(), action: (res)=>{ ApplicationSettingService.REGISTERATION_STATUS = res; }});
    Request.addToQueue({observer: this.getRegisterationMethods(), action: (res)=>{ ApplicationSettingService.REGISTERATION_METHODS = res; }});
    Request.addToQueue({observer: this.getLanguages(), action: (res)=>{ ApplicationSettingService.LANGUAGES = res; }});
    Request.addToQueue({observer: this.getCities(), action: (res)=>{ ApplicationSettingService.CITIES = res; }});
    Request.addToQueue({observer: this.getGovernments(), action: (res)=>{ ApplicationSettingService.GOVERNMENTS = res; }});
    Request.addToQueue({observer: this.getCountries(), action: (res)=>{ ApplicationSettingService.COUNTRIES = res; }});
    Request.addToQueue({observer: this.getMilitaryStatus(), action: (res)=>{ ApplicationSettingService.MILITARY_STATUS = res; }});
    Request.addToQueue({observer: this.getMilitaryAreas(), action: (res)=>{ ApplicationSettingService.MILITARY_AREAS = res; }});
    Request.addToQueue({observer: this.getParentJobs(), action: (res)=>{ ApplicationSettingService.PARENT_JOBS = res; }});
    Request.addToQueue({observer: this.getRelativeRelations(), action: (res)=>{ ApplicationSettingService.RELATIVE_RELATIONS = res; }});
    Request.addToQueue({observer: this.getRequiredDocuments(), action: (res)=>{ ApplicationSettingService.REQUIRED_DOCUMENTS = res; }});
    Request.addToQueue({observer: this.getDepartments(), action: (res)=>{ ApplicationSettingService.DEPARTMENTS = res; }});
    Request.addToQueue({observer: this.getRegisterationStatusDocuments(), action: (res)=>{ ApplicationSettingService.REGSITERATIN_STATUS_DOCUMENTS = res; }});
    Request.addToQueue({observer: this.getDivisions(), action: (res)=>{ ApplicationSettingService.DIVISIONS = res; }});
    Request.addToQueue({observer: this.getSettings(), action: (res)=>{ ApplicationSettingService.SETTINGS = res; }});


  }

  public load() {
    let firstElement = this.requestQueue.pop();

    if (firstElement) {
      if (ApplicationSettingService[firstElement.object].length <= 0) {
        firstElement.request.subscribe(
          (res) => {
            ApplicationSettingService[firstElement.object] = res;
            console.log(firstElement.object);
            //
            //console.log(this.requestQueue.length);
            //console.log(ApplicationSettingService[firstElement.object]);
            this.loadSettings();
          },
          (error)=> {
            this.loadSettings();
          },
          () => {
            this.loadSettings();
          }
        );
      }
    }
  }

  public loadSettings() {
    Request.fire();
  }

  public getDivisions() {
    return this.http.get('account/divisions?api_token=' + Auth.getApiToken());
  }

  public getRegisterationStatusDocuments() {
    return this.http.get('adminision/get_registeration_status_document?api_token=' + Auth.getApiToken());
  }

  public getDepartments() {
    return this.http.get('adminision/get_departments?api_token=' + Auth.getApiToken());
  }

  public getRequiredDocuments() {
    return this.http.get('adminision/required_documents?api_token=' + Auth.getApiToken());
  }

  public getCaseConstraints() {
    return this.http.get('adminision/get_case_constraints?api_token=' + Auth.getApiToken());
  }

  public getRelativeRelations() {
    return this.http.get('adminision/get_relative_relations?api_token=' + Auth.getApiToken());
  }

  public getNationalities() {
    return this.http.get('adminision/get_nationality?api_token=' + Auth.getApiToken());
  }

  public getAcademicYears() {
    return this.http.get('adminision/get_academic_years?api_token=' + Auth.getApiToken());
  }

  public getQualificationTypes() {
    return this.http.get('adminision/get_qualification_types?api_token=' + Auth.getApiToken());
  }

  public getQualifications() {
    return this.http.get('adminision/get_qualifications?api_token=' + Auth.getApiToken());
  }

  public getRegisterationStatus() {
    return this.http.get('adminision/get_registeration_status?api_token=' + Auth.getApiToken());
  }

  public getRegisterationMethods() {
    return this.http.get('adminision/get_registration_methods?api_token=' + Auth.getApiToken());
  }

  public getLanguages() {
    return this.http.get('adminision/get_languages?api_token=' + Auth.getApiToken());
  }

  public getCities() {
    return this.http.get('adminision/get_cities?api_token=' + Auth.getApiToken());
  }

  public getGovernments() {
    return this.http.get('adminision/get_governments?api_token=' + Auth.getApiToken());
  }

  public getCountries() {
    return this.http.get('adminision/get_countries?api_token=' + Auth.getApiToken());
  }

  public getMilitaryStatus() {
    return this.http.get('adminision/get_military_status?api_token=' + Auth.getApiToken());
  }

  public getMilitaryAreas() {
    return this.http.get('adminision/get_military_areas?api_token=' + Auth.getApiToken());
  }

  public getParentJobs() {
    return this.http.get('adminision/get_parent_jobs?api_token=' + Auth.getApiToken());
  }

  public updateSetting(data) {
    return this.http.post('adminision/update_setting?api_token=' + Auth.getApiToken(), data);
  }

  public getSettings() {
    return this.http.get('adminision/get_settings?api_token=' + Auth.getApiToken());
  }


}
