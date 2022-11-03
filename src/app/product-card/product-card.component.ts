import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../model/Plat';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public plat!: Plat;

  constructor(private auth: AuthService, private data: DataService, private router : Router) { }

  ngOnInit(): void {
  }

  deletePlat(plat: Plat) {
    if (window.confirm('Are you sure you want to delete this plate?')) {
      this.data.deletePlat(plat);
    }
  }

  redirection(plat: Plat){
    this.router.navigate(['edit'], { queryParams: { id: plat.id } });
  }

  affiche(nb: number) {
    if (nb == 0) {
      return "Entrée";
    } else if (nb == 1) {
      return "Plat principal";
    }
    else {
      return "Dessert";
    }
  }

}
