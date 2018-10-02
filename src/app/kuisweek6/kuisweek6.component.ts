import { Component, OnInit } from '@angular/core';
import {Kuis} from '../shared/kuisweek6';
@Component({
  selector: 'app-kuisweek6',
  templateUrl: './kuisweek6.component.html',
  styleUrls: ['./kuisweek6.component.css']
})
export class Kuisweek6Component implements OnInit {
formMahasiswa:Kuis[]=[];
nim='';
nama='';
kelas='';
Kuis;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.Kuis = new Kuis(this.nim,this.nama,this.kelas)
       this.formMahasiswa.push(this.Kuis);
       this.nim="";
       this.nama="";
       this.kelas="";
    
  }
  // tambahPegawai(){
  //   this.pegawai=new Pegawai(this.nama,this.nip,this.alamat,this.jk)
  //   this.daftarPegawai.push(this.pegawai);
  //   this.nama='';
  //   this.nip='';
  //   this.alamat='';
  //   this.jk='';  
    
  //   }

}
