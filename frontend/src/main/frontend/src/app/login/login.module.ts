import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Login } from './login';
//import { LoginService } from './login.service';


@NgModule({
    imports: [ FormsModule, BrowserModule ],
    bootstrap: [ Login ],
    declarations: [ Login ]
//    providers: [ LoginService ]
})
export class LoginModule { }
