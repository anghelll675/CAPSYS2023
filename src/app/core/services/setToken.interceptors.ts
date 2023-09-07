import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ResponseData } from "../models/response-data.model";
import { Router } from "@angular/router";
import { AlertsService } from "src/app/shared/alerts/alerts.service";
import { environment } from "src/environments/environment";

@Injectable()
export class SetTokenInterceptors {
//   options = {
//     autoClose: false,
//     keepAfterRouteChange: false
// };
  constructor(private toaster: AlertsService, private _router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem(environment.LOCALSTORAGENAME);
    return next.handle(
      req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + authToken
        })
      })
    ).pipe(tap(
      (event: HttpEvent<ResponseData<any>>) => {
        if (event instanceof HttpResponse) {

          switch(event.status) {
            case 200: {
              if(event.body?.showMessage === true) {
              }
              break;
            }
          }
        }
      }
    ), catchError((error: HttpErrorResponse) => {

      switch(error.status) {
        case 401: {
          if(error?.error?.message?.length > 0) {
            // this.toaster.error(error?.error?.message);
          } else {
            // this.toaster.error('Usuario no autorizado');
          }
          this.handleAuthError();
          break;
        }
        case 500: {
          // this.toaster.error('Error Interno');
          break;
        }
        default: {
          if(error.statusText === "Unknown Error") {
            // this.toaster.error('Error Interno');
          }
          else {
            if(error.error.title === "One or more validation errors occurred.") {
              Object.keys(error.error.errors).forEach(x => {
                // this.toaster.error(error.error.errors[x], 'Error conect Web Api');
              });
            } else {
              // this.toaster.error(error.error.message);
            }
          }
          break;
        }
      }
      return throwError(error);
    }));
  }

  private handleAuthError() {
    localStorage.removeItem('tokenCAPSYS2023');
    this._router.navigateByUrl('login');
  }

}
