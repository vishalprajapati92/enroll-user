import { Component, OnInit } from '@angular/core';
import { EnrollUserService } from '../enroll-user.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enroll-user-info',
  templateUrl: './enroll-user-info.component.html',
  styleUrls: ['./enroll-user-info.component.css']
})
export class EnrollUserInfoComponent implements OnInit {

  userInfo : any = [];
  paramsData : string;
  editValue : boolean = false; 
  activationStatus : boolean;
  title : string;

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
        this.activationStatus = this.userInfo.active;
        console.log("user Info", this.userInfo)
      }
    });

    this.title = "Enroll User Information";
  }

  backWindow() {
    this._router.navigate([`/listUserInfo`]);
  }

  editData() {
    this.title = "Edit Enroll User Information";
    this.editValue = true
  }

  withoutSave() {
    this.editValue = false
  }

  onClickSubmit(formData) {
    // console.log("formData", formData);
    this._enrollUserListService.updateEnrollUserInfo(this.paramsData, formData).subscribe((data)=>{  
      if(data){
        this.userInfo = data;
        // this.successFullUpdate = true;
        this.editValue = false
        this.activationStatus = this.userInfo.active;
        console.log("user Info", this.userInfo)
      }
    });
  }

  

}
