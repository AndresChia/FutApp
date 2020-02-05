import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from "./login-routing.module";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatGridListModule
     ],
  declarations: [LoginComponent]
})
export class LoginModule { }
