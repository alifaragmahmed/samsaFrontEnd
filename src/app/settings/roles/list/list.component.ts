import { Component, OnInit } from '@angular/core';
import { RolesService } from '../services/roles.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service:RolesService) { }

  ngOnInit() {
    this.service.getItemById('1').subscribe((res)=>{
console.log(res);

    });
  }

}
