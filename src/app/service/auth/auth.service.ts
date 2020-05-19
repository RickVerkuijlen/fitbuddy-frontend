import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends FirebaseService{

  public readonly baseUrl = environment.fitbuddyUrl;
  public standardHeaders = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
  })};

  constructor(public afAuth: AngularFireAuth, public user: User) { 
    super(afAuth, user)
  }

  getTokenHeader() {
    return this.afAuth.auth.currentUser.getIdToken()
    .then(token => {
      console.log(token);
      let tokenHeader = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'FB_TOKEN': token
      })};
      return tokenHeader;
    })
  }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
