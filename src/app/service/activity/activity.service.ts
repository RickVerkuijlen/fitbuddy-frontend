import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../auth/auth.service';
import { Activity } from 'src/app/model/activity';
import { Sport } from 'src/app/model/sport';
import { Link } from 'src/app/helpers/link';
import { LOCALE_ID } from '@angular/core';
import { getLocaleDateTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends AuthService{

  constructor(private http: HttpClient, public afAuth: AngularFireAuth) {
    super(afAuth, JSON.parse(localStorage.getItem("User")));
  }

  async getAllActivitiesFromUser(userUid: String) {
      let result = new Array();
      return await this.http.get<Activity[]>(this.baseUrl + "activity/user/" + userUid).toPromise()
      .then(res => {
        res.sort((a: Activity, b: Activity) => {
          return <any>new Date(a.date) - <any>new Date(b.date);
        }) 
        res.forEach(activity => {
          this.http.get<Sport>(activity.links.find(s => s.rel == "sport").href).toPromise()
          .then(s => {
            activity.sport = s;
            activity.sportedKCal = (activity.timeSportedInSeconds / 60) * s.kcalPerMinute;
          })
        })
        return res;
      });
  }

  submitActivity(activity) {
    console.log(activity);
    this.getTokenHeader()
    .then(res => {
      return this.http.post(this.baseUrl + "activity", JSON.stringify(activity), res).toPromise();
    })
  }
}
