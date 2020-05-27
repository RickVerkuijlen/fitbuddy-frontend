import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { User } from 'src/app/model/user';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Link } from 'src/app/helpers/link';
import { Sport } from 'src/app/model/sport';

@Injectable({
  providedIn: 'root'
})
export class SportServiceMock extends AuthService {

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
    super(afAuth, JSON.parse(localStorage.getItem("User")))
   }

  getSportsFromUser(userUid: String) {
    return new Sport();
  }

  subscibeToSport(userUid: String, sportId: number) {
    const body = {
      userUid: userUid,
      sportId: sportId
    }
    console.log(body);
    this.getTokenHeader()
    .then(res => {
      return this.http.post(this.baseUrl + "subscribedsport/subscribe", JSON.stringify(body), res).toPromise();
    })
  }

  unsubscribeFromSport(userUid: string, sportId: number) {
    this.http.delete(this.baseUrl + "subscribedsport/unsubscribe/" + userUid + "/"+ sportId).subscribe();
  }

  getAllSports() {
    return this.http.get<Sport>(this.baseUrl + "sport").toPromise()
  }

  private getSportByUrl(url: string) {
    return this.http.get<string>(url).toPromise();
  }
}
