import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService, private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }
  redirection() {
    this.router.navigate(['editProduct']);
  }

  signout() {
    this.auth.logout();
  }

}
