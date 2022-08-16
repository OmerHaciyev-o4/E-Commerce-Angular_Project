import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { Category } from './category';

@Injectable({
    providedIn: "root"
})
export class CategoryService {
    // url = 'https://e-commerce-2a651-default-rtdb.firebaseio.com/';
    url = 'https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/';
    constructor(private httpClient: HttpClient) { }

    getCategories(): Observable<Category[]>{
        var newURL = this.url + 'categories.json';
        return this.httpClient.get<Category[]>(newURL)
        .pipe(
            map(response => {
                const categories: Category[] = [];
                for (const key in response) {
                    categories.push({ ...response[key], id: key });
                }
                return categories;
            }),
            tap(data => {}),
            catchError(this.handleError),
        );
    }
    
    createCategory(category: any): Observable<any>{
        var newURL = this.url + 'categories.json';
        return this.httpClient.post<any>(newURL, category)
        .pipe(
            tap(data => {}),
            catchError(this.handleError)
        )
    }

    deleteCategory(category?: any): Observable<any>{
        const newURL = this.url + "categories" + (category ? ("/" + category.toString()) : "") + ".json";
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