import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echo',
  templateUrl: './echo.component.html',
  styleUrls: ['./echo.component.css']
})
export class EchoComponent implements OnInit {

  text: string="";
  constructor() { }

  newCommand: string = "";

  ngOnInit() {
  }
  commands=[];
  addCommand() {
    var obj = new CommandTerminal();
    if (this.newCommand) {
      obj.usercommand=this.newCommand;
      obj.output="loading...";
      this.commands.push(obj);
      var commandjson = {command : obj.usercommand};
      /*http
        .post('endpoint',commandjson);
        .subscribe(){
          console.log(data);
          /*obj=this.commands[this.commands.length-1];
          obj.output="output";
        }*/
        this.newCommand = "";
    }
  }
  pressSubmit(){
    /*if(this.text){
      var codejson = {string : this.text};
        http
          .post('endpointsubmit', codejson);
          .subscribe(){
          }
    }*/
  }
}
class CommandTerminal{
  usercommand: string;
  output : string;
}
