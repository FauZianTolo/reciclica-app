import { LoginState } from './../../../store/login/LoginState';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/store/AppState';
import { take, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<AppState>, private router: Router) { }

  canLoad() : Observable<boolean> {
    return this.store.select('login').pipe(
      take(1),
      switchMap(LoginState => {
        if (LoginState.isLoggedIn){
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }

}
