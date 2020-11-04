import { AfterContentChecked, AfterViewChecked, Component, ContentChild, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-plan',
  templateUrl: './academic-plan.component.html',
  styleUrls: ['./academic-plan.component.scss']
})
export class AcademicPlanComponent implements OnInit  {

  public $: any = $;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.$('.select2').select2();
    }, 1500);
  }


}
