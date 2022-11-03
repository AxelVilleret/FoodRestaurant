import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plat } from '../model/Plat';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id!: string;
  plat!: Plat;

  constructor(private route: ActivatedRoute, private auth: AuthService, private data: DataService, private router: Router) {
    this.id = this.route.snapshot.queryParams['id'];
   }

  ngOnInit(): void {
    this.getPlatById();
  }

  getPlatById() {
    this.data.getPlatById(this.id).subscribe(res => {
      this.plat = res.data() as Plat;
      this.plat.id = res.id;
    }, err => {
      alert('Error while fetching Plat data');
    })
  }

  updatePlat(plat: Plat) {
    this.data.updatePlat(plat);
    this.router.navigate(['home']);
  }

}
