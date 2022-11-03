import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-admin-authen',
  templateUrl: './admin-authen.component.html',
  styleUrls: ['./admin-authen.component.css']
})
export class AdminAuthenComponent implements OnInit {
  email : string = '';
  password  : string = '';
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  //login method
  login(){
    if(this.email == '' || this.password == ''){
      alert('please enter email and password');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
