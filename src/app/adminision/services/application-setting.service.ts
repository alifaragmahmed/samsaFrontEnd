import { Injectable } from '@angular/core';
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

  public static LOADED: any = false;

  constructor(private http: HttpClient) {
    //
  }

  public loadSettings() {
    if (ApplicationSettingService.LOADED)
      return;

    this.getCaseConstraints().subscribe((r)=>{ ApplicationSettingService.CASE_CONSTRAINTS = r; });
    this.getNationalities().subscribe((r)=>{ ApplicationSettingService.NATIONALITIES = r; });
    this.getAcademicYears().subscribe((r)=>{ ApplicationSettingService.ACADEMIC_YEARS = r; });
    this.getQualificationTypes().subscribe((r)=>{ ApplicationSettingService.QUALIFICATION_TYPES = r; });
    this.getQualifications().subscribe((r)=>{ ApplicationSettingService.QUALIFICATIONS = r; });
    this.getRegisterationStatus().subscribe((r)=>{ ApplicationSettingService.REGISTERATION_STATUS = r; });
    this.getRegisterationMethods().subscribe((r)=>{ ApplicationSettingService.REGISTERATION_METHODS = r; });
    this.getLanguages().subscribe((r)=>{ ApplicationSettingService.LANGUAGES = r; });
    this.getCities().subscribe((r)=>{ ApplicationSettingService.CITIES = r; });
    this.getGovernments().subscribe((r)=>{ ApplicationSettingService.GOVERNMENTS = r; });
    this.getCountries().subscribe((r)=>{ ApplicationSettingService.COUNTRIES = r; });
    this.getMilitaryStatus().subscribe((r)=>{ ApplicationSettingService.MILITARY_STATUS = r; });
    this.getMilitaryAreas().subscribe((r)=>{ ApplicationSettingService.MILITARY_AREAS = r; });
    this.getParentJobs().subscribe((r)=>{ ApplicationSettingService.PARENT_JOBS = r; });
    this.getRelativeRelations().subscribe((r)=>{ ApplicationSettingService.RELATIVE_RELATIONS = r; });
    this.getRequiredDocuments().subscribe((r)=>{ ApplicationSettingService.REQUIRED_DOCUMENTS = r; });
    this.getDepartments().subscribe((r)=>{ ApplicationSettingService.DEPARTMENTS = r; });
    this.getRegisterationStatusDocuments().subscribe((r)=>{ ApplicationSettingService.REGSITERATIN_STATUS_DOCUMENTS = r; });
    this.getDivisions().subscribe((r)=>{ ApplicationSettingService.DIVISIONS = r; });
    ApplicationSettingService.LOADED = true;
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




}
