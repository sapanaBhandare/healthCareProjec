import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';

import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  patientHealthInfo: any;
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getPatientHealthInfo();
  }

  getPatientHealthInfo() {
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'http://localhost:8000/profile/getPatientHealthInfo';
      this.http.get(apiURL)
        .toPromise()
        .then(
          res => {
            this.patientHealthInfo = res
            console.log('------this.patientHealthInfo------', this.patientHealthInfo)

          }
        );
    });
    return promise;
  }
}
