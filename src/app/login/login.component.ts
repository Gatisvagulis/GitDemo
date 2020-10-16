import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    if(username != null && username.length>2)
    this.router.navigateByUrl("home");
    else
    sessionStorage.clear();

  }


  admins={
    login:"admin",
    parole:"admin"
  }

  page={
    showError:false,
    errorMessage:"Parole vai logins nav pareiz"
  }

  methods ={
    onLoginClick:()=>{
      //this.piemers = "qwertyuiowertyuiowertyuiop";

      let logins = (document.getElementById("loginId") as HTMLInputElement).value;
      let parole = (document.getElementById("paroleId") as HTMLInputElement).value;
      if (logins != this.admins.login || parole != this.admins.parole) {
        this.page.showError = true;
      } else {
        this.page.showError = false;
        sessionStorage.setItem("username", logins);
        this.router.navigateByUrl("/home");
      }
    }
  } 

}
