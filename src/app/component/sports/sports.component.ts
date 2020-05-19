import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { SportService } from 'src/app/service/sport/sport.service';
import { Sport } from 'src/app/model/sport';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent extends AuthService implements OnInit{

  sports;
  userSports;

  constructor(public afAuth: AngularFireAuth, public rest: SportService) {
    super(afAuth, JSON.parse(localStorage.getItem("User")));
  }

  ngOnInit(): void {
    console.log("Hij is bij sports");
    this.rest.getSportsFromUser(this.user.uid).then(res => {
      this.userSports = res;
      console.log(this.userSports)
    })
    this.rest.getAllSports().then(res => {
      this.sports = res;
      console.log(this.sports);
    })
  }

  doesUserFollowSport(sport): boolean {
    return !this.userSports.some((item) => item.id == sport.id);
  }

  followSport(sportId: number): void {
    this.rest.subscibeToSport(this.user.uid, sportId)
    console.log(sportId);
    window.location.reload();
  }

  unfollowSport(sportId: number): void {
    this.rest.unsubscribeFromSport(this.user.uid, sportId);
    console.log(sportId);
  }

}
