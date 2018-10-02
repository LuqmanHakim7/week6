import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
        .online {
            color:  white;
        }
    `]
})
export class Tugas3Component implements OnInit {
allownewServer=false;
  kampus='';
  arraykampus=[];

  constructor() { }

  ngOnInit() {
  }

  onCreationStatus() {
  if(this.allownewServer ==false){
    this.kampus = 'poltek joss';
    this.allownewServer=true; 
  }else{
    this.allownewServer=false;
    this.kampus=' ';
  }
   this.arrayfungsi();
  }
  arrayfungsi(){
    this.arraykampus.push(this.arraykampus.length+1);
  }

  onUpdateServerName(event: Event) {
    this.kampus = (<HTMLInputElement>event.target).value;
  }

}



