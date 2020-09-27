import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private service:UserProfileService) { }

  ngOnInit() {
    this.service.getuserData().subscribe((res:any) => {
      console.log(res);
      
    })
  }

}
