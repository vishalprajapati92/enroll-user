import { Component, OnInit } from '@angular/core';
import { EnrollUserService } from '../enroll-user.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-enroll-user',
  templateUrl: './update-enroll-user.component.html',
  styleUrls: ['./update-enroll-user.component.css']
})
export class UpdateEnrollUserComponent implements OnInit {

  userInfo : any = [];
  paramsData : string;
  successFullUpdate : boolean;

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

  onClickSubmit(formData) {
    if(formData.active === "" || formData.active === "status") {
      formData["active"] = true;
    } if(formData.name === "" || formData.name === undefined) {
      formData["name"] = this.userInfo.name ;
    } if(formData.dateOfBirth === "" || formData.dateOfBirth === undefined) {
      formData["name"] = this.userInfo.dateOfBirth ;
    }
    formData["active"] = JSON.parse(formData["active"]);
    console.log("formData", formData);
  
    this._enrollUserListService.updateEnrollUserInfo(this.paramsData, formData).subscribe((data)=>{  
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
