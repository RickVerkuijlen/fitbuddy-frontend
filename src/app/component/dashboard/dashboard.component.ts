import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/service/activity/activity.service';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faBurn} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AuthService implements OnInit {

  activities;
  faStopwatch = faStopwatch;
  faDumbbell = faDumbbell;
  faBurn = faBurn;

  constructor(public afAuth: AngularFireAuth, public router: Router, public rest: ActivityService){
    super(afAuth, JSON.parse(localStorage.getItem("User")));
  }

  ngOnInit(): void {
    console.log("Hij is bij dashboard");
    this.rest.getAllActivitiesFromUser(this.User.uid).then(res => {
      res.forEach(element => {
        element.timeSported = this.convertTime(element.timeSportedInSeconds);
      })
      this.activities = res.reverse();
      console.log(res);
    })
    
  }

  private convertTime(time: number): string {
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);

    var hDisplay = h > 0 ? h + " uur " + (m != 0 ? " & " : "")  : "";
    var mDisplay = m > 0 ? + m  + (m == 1 ? " minuut " : " minuten "): "";
    return hDisplay + mDisplay;
  }
}
