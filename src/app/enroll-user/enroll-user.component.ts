import { Component, OnInit } from '@angular/core';
import { EnrollUserService } from '../enroll-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-enroll-user',
  templateUrl: './enroll-user.component.html',
  styleUrls: ['./enroll-user.component.css']
})
export class EnrollUserComponent implements OnInit {

  pageTitle : string  = "Welcome product page";
  userInfo : any = [];
  showAndHide : boolean = true;
  filterBy :string;

  constructor(private _enrollUserListService : EnrollUserService, private _router : Router ) { }

  ngOnInit(): void {
    this._enrollUserListService.getUserInfo().subscribe((data)=>{  
      if(data){
        this.userInfo = data;
        console.log("user Info", this.userInfo)
      }
    });
  }

  viewDetail(data) {
    console.log("data", data);
    this._router.navigate([`/viewEnrollUser/${data.id}`]);
  }

  updateDetail(data){
    this._router.navigate([`/updateUser/${data.id}`]);
  }

}
