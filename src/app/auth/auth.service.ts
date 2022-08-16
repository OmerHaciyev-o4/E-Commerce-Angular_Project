import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from './auth';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { User } from './user';
import { UserBase } from './userBase';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root"
})

export class AuthService {
    SIGN_UP = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + environment.API_KEY;
    SIGN_IN = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + environment.API_KEY;

    user = new BehaviorSubject<User>(null);
    userBase = new BehaviorSubject<UserBase>(null);

    constructor(private httpClient: HttpClient) { }


    register(email: string, password: string) {
        return this.httpClient.post<AuthResponse>(this.SIGN_UP, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap(response => {
            this.handleAuthentication(response.email,response.localId,response.idToken,+response.expiresIn, password);
            })
        );
    }
    
    login(email: string, password: string) {
        return this.httpClient.post<AuthResponse>(this.SIGN_IN, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(
            tap(response => {
                this.handleAuthentication(response.email,response.localId,response.idToken,+response.expiresIn, password);
            })
        );
    }
    
    
    autoLogin(){
        const user:User = JSON.parse(localStorage.getItem("user"));
        const userBase: UserBase = JSON.parse(localStorage.getItem("userBase"));
        
        if(!user && !userBase)
            return;
        
        const loadedUser=new User(
            user.email,
            user.id,
            user._token,
            new Date(user._tokenExpiration)
        );
    
        if(loadedUser.token && userBase){
            this.user.next(loadedUser);
            this.userBase.next(userBase);
        }
        
    }

    logout(){
        this.user.next(null);
        this.userBase.next(null);
        localStorage.removeItem("user");
        localStorage.removeItem("userBase");
    }

    handleAuthentication(email:string,userId:string,token:string,expiresIn:number, password: string){
        const expirationDate = new Date(new Date().getTime() + (Number(expiresIn) * 1000));

        const user = new User(email, userId, token, expirationDate);
        const userBase = new UserBase(email, password, "user");

        if(email == "omer04118102@gmail.com" || email == "elvincamalzade00@gmail.com")
            userBase.role = "admin";

        this.user.next(user);
        this.userBase.next(userBase);

        localStorage.setItem("user",JSON.stringify(user));
        localStorage.setItem("userBase",JSON.stringify(userBase));
    }
}