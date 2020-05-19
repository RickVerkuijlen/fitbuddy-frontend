import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/model/user';
import { SportService } from 'src/app/service/sport/sport.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends FirebaseService implements OnInit {

  userProfile: User = new User();
  sports: string[];

  constructor(public afAuth: AngularFireAuth, public rest: SportService) {
    super(afAuth, JSON.parse(localStorage.getItem("User")));
  }

  ngOnInit(): void {
    console.log("Hij is bij profile");
    this.userProfile = JSON.parse(localStorage.getItem("User"));
    this.rest.getSportsFromUser(this.userProfile.uid).then(res => {
      this.sports = res;
    });
    
  }

}