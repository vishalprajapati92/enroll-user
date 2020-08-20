import { Component, OnInit } from '@angular/core';
import { EnrollUserService } from '../enroll-user.service';
import { Router, Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enroll-user-info',
  templateUrl: './enroll-user-info.component.html',
  styleUrls: ['./enroll-user-info.component.css']
})
export class EnrollUserInfoComponent implements OnInit {

  userInfo : any = [];
  paramsData : string;

  constructor(private _enrollUserListService : EnrollUserService, private _router : Router, private _activeRouter : ActivatedRoute) { }

  ngOnInit(): void {
    // Get the paramater from url
    this._activeRouter.params.subscribe((params: Params)=>{
      this.paramsData = params["id"];
      console.log("params", params["id"]);
    });

    //Get the detail of enroll user
    this._enrollUserListService.getEnrollesUserDetails(this.paramsData).subscribe((data)=>{  
      if(data){
        this.userInfo = data;
        console.log("user Info", this.userInfo)
      }
    });
  }

  backWindow() {
    this._router.navigate([`/listUserInfo`]);
  }

}
