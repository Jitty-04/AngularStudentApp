import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  name=""
  rollNumber=""
  admissionNumber=""
  mobileNumber=""
  college=""
  parentName=""
  parentMobileNumber=""
  userName=""
  password=""
  
  readValues=()=>
  {
    let data:any={"name":this.name,"rollNumber":this.rollNumber,"admissionNumber":this.admissionNumber,"mobileNumber":this.mobileNumber,"college":this.college,"parentName":this.parentName,"parentMobileNumber":this.parentMobileNumber,"userName":this.userName,"password":this.password}
  console.log(data)
  }



}
