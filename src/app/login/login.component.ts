import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidationManager } from 'ng2-validation-manager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.form = new ValidationManager({
      'email': 'required|email',
      'password': 'required'
    });
  }
  save() {
    if (this.form.isValid()) {
      var data = this.form.getData();
      let promise = new Promise((resolve, reject) => {
        let apiURL = 'http://localhost:8000/profile/login';
        this.http.post(apiURL, data)
          .toPromise()
          .then(
            res => {
              console.log('------this.patientHealthInfo------', res)
              this.router.navigateByUrl('profile');
            }
          )
          .catch((err) => {
            throw err;
          });
      });

    }
  }

}
