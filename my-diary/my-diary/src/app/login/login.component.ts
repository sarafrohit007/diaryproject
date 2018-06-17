import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

    onfbSigninStatus(resp) {
        console.log("Getting Response in AppComp:: ", resp.response);
    }
     
    ngOnInit() {}

}

