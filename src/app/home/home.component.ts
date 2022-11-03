import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../model/Plat';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  platList: Plat[] = [];

  constructor(private auth: AuthService, private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllPlats();
  }

  getAllPlats() {
    this.data.getAllPlats().subscribe(res => {

      this.platList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })

    }, err => {
      alert('Error while fetching Plat data');
    })

  }

  deletePlat(plat: Plat) {
    if (window.confirm('Are you sure you want to delete this plate?')) {
      this.data.deletePlat(plat);
    }
  }


}
