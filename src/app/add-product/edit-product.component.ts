import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../model/Plat';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  platObj: Plat = {
    id: '',
    restaurant: '',
    name: '',
    price: 0,
    description: '',
    categories: 0,
    ingrediants: '',
    image: '',
    calories: '',
    time: ''
  };
  restaurant: string = '';
  name: string = '';
  price: string = '';
  description: string = '';
  categories: string = '';
  ingrediants: string = '';
  image: string = '';
  calories: string = '';
  time: string = '';

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addPlat() {
    
    if (this.categories == '' || this.ingrediants == '' || this.image == '' || this.calories == '' || this.time == '' || this.description == '' || this.price == '' || this.name == '' || this.restaurant == '') {
      alert('Please fill in all the fields');
      return;
    }

    this.platObj.restaurant = this.restaurant;
    this.platObj.name = this.name;
    this.platObj.price = +this.price;
    this.platObj.description = this.description;
    this.platObj.categories = +this.categories;
    this.platObj.ingrediants = this.ingrediants;
    this.platObj.image = this.image;
    this.platObj.calories = this.calories;
    this.platObj.time = this.time;

    this.data.addPlat(this.platObj)
    this.router.navigate(['home']);

  }


}
