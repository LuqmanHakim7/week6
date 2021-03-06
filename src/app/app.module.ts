import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from '../app/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TugasComponent } from './tugas/tugas.component';
import { Tugas3Component } from './tugas3/tugas3.component';
import { PegawaiComponent } from './pegawai/pegawai.component';
import { SharedComponent } from './shared/shared.component';
import { Kuisweek6Component } from './kuisweek6/kuisweek6.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TugasComponent,
    Tugas3Component,
    PegawaiComponent,
    SharedComponent,
    Kuisweek6Component,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
