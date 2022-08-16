import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CardService {
    // url = 'https://e-commerce-2a651-default-rtdb.firebaseio.com/';
    url = 'https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/';
    constructor(private httpClient: HttpClient) { }
    
    ordering(order: any, userId: any): Observable<any>{
        var newURL = this.url + "/users/" + userId + "/list/" + order.product.id + ".json";
        return this.httpClient.post<any>(newURL, order).pipe(
            tap(() => {}),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log("Error : " + error.error.message);
        }
        else {
            switch (error.status) {
                case 404:
                    console.log("Not Found");
                    break;
                case 403:
                    console.log("Access Denied");
                    break;
                case 500:
                    console.log("Internal server");
                    break;
                default:
                    console.log("some unknow error happened");
            }
        }
        return throwError(() => new Error("some error happened"));
    }
}