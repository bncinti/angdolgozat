/*
* File: login.components.ts
* Author: Bán Cintia
* Copyright: 2022, Bán Cintia
* Group: Szoft II/N
* Date: 2022-02-24
* Github: https://github.com/bncinti/
* Licenc: GNU GPL
*/


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor() { }

  
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        name: new FormControl('', Validators.pattern('^[a-zA-Z0-9+]+$'))
      });

  }

}
