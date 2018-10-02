import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowNewUsername = false;
  usernameCreationStatus = 'Tidak ada username baru!';
  username = '';

  constructor() {
    // () => {} adalah arrow function atau lamda --> fitur ES6 javascript
    setTimeout(()=> {
      this.allowNewUsername = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreationStatus() {
    this.usernameCreationStatus = 'Server telah dibuat!';
  }

  onUpdateServerName(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.username='';
  }

}
