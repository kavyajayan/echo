import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})
export class EchoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  commands = [];
  addCommand(newCommand: string) {
    if (newCommand) {
      this.commands.push(newCommand);
    }
  }
}
/*export class Prompt{
  commands = [];
  addCommand(newCommand: string) {
    if (newCommand) {
      this.commands.push(newCommand);
    }
  }
}*/
