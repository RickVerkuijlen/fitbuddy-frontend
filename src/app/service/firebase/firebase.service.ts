import { Injectable, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnInit {

  constructor(public afAuth: AngularFireAuth, public User: User) {
  }

  ngOnInit() {
    this.User = JSON.parse(localStorage.getItem("User"));
  }

  logOut() {
    console.log("Uitloggen");
    localStorage.removeItem("User");
    this.afAuth.auth.signOut();
    this.User = null;
    window.location.reload();
  }

  public initializeUser(): User {
    this.User = new User();
    this.User.email = this.afAuth.auth.currentUser.email;
    this.User.name = this.afAuth.auth.currentUser.displayName;
    this.User.refreshToken = this.afAuth.auth.currentUser.refreshToken;
    this.User.uid = this.afAuth.auth.currentUser.uid;
    this.User.picture = this.afAuth.auth.currentUser.photoURL;
    
    return this.User;
  }
}
