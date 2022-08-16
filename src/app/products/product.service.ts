import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import { Product } from './product';


@Injectable({
    providedIn: "root"
})
export class ProductService {
    // url="https://e-commerce-2a651-default-rtdb.firebaseio.com/";
    url="https://e-commerce-angular-df9dd-default-rtdb.firebaseio.com/";

    constructor(private httpClient: HttpClient) { }
    
    getProducts(brandId?: number): Observable<Product[]>{
        var newURL = this.url + "products.json";
        return this.httpClient.get<Product[]>(newURL)
        .pipe(
            map(response => {
                const products: Product[] = [];
                for (const key in response) {
                    if (brandId) {
                        if (brandId.toString() == response[key].brandId) {
                            products.push({ ...response[key], id: key });
                        }
                    }
                    else {
                        products.push({ ...response[key], id: key });
                    }
                }
                return products;
            }),
            tap(data => {}),
            catchError(this.handleError),
            delay(118)
        );
    }

    createProduct(product: any): Observable<any>{
        return this.httpClient.post(this.url + 'products.json', product)
        .pipe(
            tap(data => {}),
            catchError(this.handleError)
        );
    }

    updateProduct(product: any): Observable<any>{
        var newURL = this.url + 'products/' + product.id + '.json';
        return this.httpClient.put<any>(newURL, product).pipe(
            tap(data => {}),
            catchError(this.handleError)
        );
    }

    deleteProduct(productId: any): Observable<any>{
        var newURL = this.url + "products/" + productId + ".json";
        return this.httpClient.delete(newURL).pipe(
            tap(() => {}),
            catchError(this.handleError)
        );
    }

    getProductById(productId: string): Observable<Product> {
        return this.httpClient.get<Product>(this.url + "products/" + productId + ".json")
            .pipe(
                map(response => {
                    const product: Product = ({ ...response, id: productId });
                    return product;
                }),
                tap((data) => {}),
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