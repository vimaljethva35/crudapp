import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, throwError } from 'rxjs';
import { Products } from '../interfaces/products';
@Injectable({
providedIn: 'root'
})
export class DashboardService {
private _url: string
public _fetchUrl: string
public _createUrl: string
public _updateUrl: string
public _deleteUrl: string
constructor(private _http: HttpClient) {
this._url = "https://dac930am.onrender.com/"
this._fetchUrl = `${this._url}fetch`
this._createUrl = `${this._url}insert`
this._updateUrl = `${this._url}update`
this._deleteUrl = `${this._url}delete`
}
public getProducts(): Observable<Products[]> {
return this._http.get<Products[]>(this._fetchUrl)
.pipe(catchError(this.handleError))
}
public createProduct(obj: any): Observable<Products[]> {
return this._http.post<Products[]>(this._createUrl, obj)
.pipe(catchError(this.handleError))
}
public updateProduct(obj: any): Observable<Products[]> {
return this._http.post<Products[]>(this._updateUrl, obj)
.pipe(catchError(this.handleError))
}
public deleteProduct(obj: any): Observable<Products[]> {
return this._http.post<Products[]>(this._deleteUrl, obj)
.pipe(catchError(this.handleError))
}
private handleError(error: HttpErrorResponse) {
//https://angular.io/guide/http-handle-request-errors
if (error.status === 0) {
// A client-side or network error occurred. Handle it accordingly.
console.error('An error occurred:', error.error);
} else {
// The backend returned an unsuccessful response code.
// The response body may contain clues as to what went wrong.
console.error(
`Backend returned code ${error.status}, body was: `, error.error);
}
// Return an observable with a user-facing error message.
return throwError(() => new Error('Something bad happened; please try again later.'));
}
}