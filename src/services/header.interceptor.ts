// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse,
//   HttpErrorResponse
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { tap } from "rxjs/operators";

// @Injectable()
// export class HeaderInterceptor implements HttpInterceptor {
//    loggedUser = JSON.parse(sessionStorage.getItem('loggedUser')!)

//   constructor() {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const authReq = request.clone({
//       headers: request.headers.set('Bearer', this.loggedUser.token).append('Access-Control-Allow-Origin', '*')
//     })
//     return next.handle(authReq)tap((event: HttpEvent<any>) => {
//       if (event instanceof HttpResponse) {
//         // do stuff with response if you want
//       }
//     }, (response: HttpErrorResponse) => { });
//   }
//   }
// }
