import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SportService } from 'src/app/service/sport/sport.service';
import { ActivityService } from 'src/app/service/activity/activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent extends AuthService implements OnInit {

  activityForm;
  activity;
  followedSports;
  showLater;
  isFitness;
  dateChosen = false;

  constructor(public afAuth: AngularFireAuth, private formBuilder: FormBuilder, public sportRest: SportService, public activityRest: ActivityService) { 
    super(afAuth, JSON.parse(localStorage.getItem("User")));
    this.activityForm = this.formBuilder.group({
      date: null,
      sportId: '',
      timeSported: null,
      userId: this.user.uid
    })
  }

  ngOnInit(): void {
    this.sportRest.getSportsFromUser(this.User.uid).then(res => {
      console.log(res);
      this.followedSports = res;
    })
    this.showLater = false;
  }

  onSubmit(activityData) {
    activityData.timeSportedInSeconds = this.convertTime(activityData.timeSported);
    this.activityRest.submitActivity(activityData);
  }

  showKCal(sport) {
    this.isFitness = sport == 3; 
    console.log(sport);
  }

  isToday(givenDate) {
    this.dateChosen = true;
    if(new Date(givenDate) > new Date()) {
      console.log("Eerder dan vandaag");
      this.showLater = false;
    } else {
      console.log("Later dan vandaag");
      this.showLater = true;
    }
  }

  private convertTime(time): number {
    var a = time.split(':'); // split it at the colons

  // minutes are worth 60 seconds. Hours are worth 60 minutes.
    return  (+a[0]) * 60 * 60 + (+a[1]) * 60;
  }
}
