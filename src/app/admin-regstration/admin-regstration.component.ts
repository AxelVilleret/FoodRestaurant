import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-admin-regstration',
  templateUrl: './admin-regstration.component.html',
  styleUrls: ['./admin-regstration.component.css']
})
export class AdminRegstrationComponent implements OnInit {
  email : string = '';
  password  : string = '';
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    
  }
  //register method
  register(){
    if(this.email == '' || this.password == ''){
      console.log(this.email);
      console.log(this.password);
      alert('please enter email and password');
      return;
    }
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }

}
