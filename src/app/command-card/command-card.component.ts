import { Component, Input, OnInit } from '@angular/core';
import { Command } from '../model/command';

@Component({
  selector: 'app-command-card',
  templateUrl: './command-card.component.html',
  styleUrls: ['./command-card.component.css']
})
export class CommandCardComponent implements OnInit {
  @Input() 
  command!: Command;

  valide: string = "Validated";
  
  constructor() { }

  ngOnInit(): void {
  }

  valid() {
    this.command.status = "Validated";
  }

}
