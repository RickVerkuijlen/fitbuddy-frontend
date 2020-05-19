import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends AuthService {

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
    super(afAuth, JSON.parse(localStorage.getItem("User")));
  }

  addUser(user: User): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.baseUrl + 'user', JSON.stringify(user), this.standardHeaders).pipe(
      tap((user) => console.log('User added with email ' + user.email)),
      catchError(this.handleError<any>('addUser'))
    );
  }

  getUserById(id): Promise<User> {
    return this.getTokenHeader()
      .then(tokenOptions => {
        return this.http.get<User>(this.baseUrl + "user/" + id, tokenOptions).toPromise()
      })
  }
}
