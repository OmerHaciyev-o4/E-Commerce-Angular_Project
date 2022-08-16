import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { Brand } from './brand';

@Injectable({providedIn: 'root'})
export class BrandService {
    // url = 'https://e-commerce-2a651-default-rtdb.firebaseio.com/';
    url = 'https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/';
    constructor(private httpClient: HttpClient) { }

    getBrands(): Observable<Brand[]>{
        var newURL = this.url + 'brands.json';
        return this.httpClient.get<Brand[]>(newURL)
        .pipe(
            map(response => {
                const brands: Brand[] = [];
                for (const key in response) {
                    brands.push({ ...response[key], id: key });
                }
                return brands;
            }),
            tap(data => {}),
            catchError(this.handleError),
            delay(30)
        );
    }
    
    createBrand(brand: any): Observable<any>{
        var newURL = this.url + 'brands.json';
        return this.httpClient.post<any>(newURL, brand)
        .pipe(
            tap(data => {}),
            catchError(this.handleError)
        )
    }

    deleteBrand(brand?: any): Observable<any>{
        const newURL = this.url + "brands" + (brand ? ("/" + brand.toString()) : "") + ".json";
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