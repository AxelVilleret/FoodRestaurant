import { Component, OnInit } from '@angular/core';
import { Command } from '../model/command';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  commands : Command[] = 
  [
    {
      products : [
        {
          id : "1",
          restaurant : "McDonalds",
          name : "Pizza",
          price : 10,
          description : "It's a Pizza",
          categories : 1,
          ingrediants : "Pizza",
        },
        {
          id: "1",
          restaurant: "McDonalds",
          name: "Pizza",
          price: 10,
          description: "It's a Pizza",
          categories: 1,
          ingrediants: "Pizza",
        }
      ],
      total : 20,
      status : "paid",
      id : "1",
      table : 1
    },
    {
      products: [
        {
          id: "2",
          restaurant: "McDonalds",
          name: "Tacos",
          price: 8,
          description: "It's a Tacos",
          categories: 1,
          ingrediants: "Frites",
        },
        {
          id: "1",
          restaurant: "McDonalds",
          name: "Pizza",
          price: 10,
          description: "It's a Pizza",
          categories: 1,
          ingrediants: "Pizza",
        }
      ],
      total: 18,
      status: "paid",
      id: "2",
      table: 4
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
