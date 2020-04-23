import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  errorMessage = '';
  constructor(private router: Router) { }

  public handleError(error: HttpErrorResponse) {
    if (error.status === 500){ this.handle500Error(error); }
    else if (error.status === 404){ this.handle404Error(error); }
    else if (error.status === 401){ return this.handle401Error(error); }
    else {this.handleOtherError(error); }
  }

  private handle404Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/not-found']);
  }

  private handle401Error(error: HttpErrorResponse ) {
    this.createErrorMessage(error);
    this.router.navigate(['/not-authorized']);
  }

  private handle500Error(error: HttpErrorResponse) {
    this.createErrorMessage(error);
    this.router.navigate(['/internal-error']);
  }
  private handleOtherError(error: HttpErrorResponse) {
    this.errorMessage = error.error ? error.error.errors : error.statusText;
  }
  private createErrorMessage(error: HttpErrorResponse){
    this.errorMessage = error.error ? error.error : error.statusText;
  }

}
