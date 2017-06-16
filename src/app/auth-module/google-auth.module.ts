import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import { GoogleLoadApiService } from './google-load-api.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [],
  exports: [ CommonModule ],
  providers: [ GoogleLoadApiService, GoogleAuthenticationService ]
})
export class GoogleAuthModule { }
