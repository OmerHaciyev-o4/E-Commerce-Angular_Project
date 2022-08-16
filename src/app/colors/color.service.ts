import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Color } from './color';
import { Observable, map, tap, catchError, delay, throwError } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class ColorService {
    // url = 'https://e-commerce-2a651-default-rtdb.firebaseio.com/';
    url = 'https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/';

    constructor(private httpClient: HttpClient) { }


    getColors(): Observable<Color[]>{
        var newURL = this.url + 'colors.json';
        return this.httpClient.get<Color[]>(newURL)
        .pipe(
            map(response => {
                const colors: Color[] = [];
                for (const key in response) {
                    colors.push({ ...response[key], id: key });
                }
                return colors;
            }),
            tap(data => {}),
            catchError(this.handleError),
        );
    }   
    
    createColor(color: any): Observable<any>{
        var newURL = this.url + 'colors.json';
        return this.httpClient.post<any>(newURL, color)
        .pipe(
            tap(data => {}),
            catchError(this.handleError)
        )
    }

    deleteColor(color?: any): Observable<any>{
        const newURL = this.url + "colors" + (color ? ("/" + color.toString()) : "") + ".json";
        return this.httpClient.delete(newURL);
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