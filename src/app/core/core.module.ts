import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericService } from './services/generic.service';
import { SetTokenInterceptors } from './services/setToken.interceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    GenericService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SetTokenInterceptors,
      multi: true,
    }
  ],
  exports: [HttpClientModule]
})
export class CoreModule { }
