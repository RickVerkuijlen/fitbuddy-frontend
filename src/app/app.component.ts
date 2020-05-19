import { Component } from '@angular/core';
import { FirebaseService } from './service/firebase/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { UserService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends FirebaseService {
  title = 'Fitbuddy';

  constructor(public afAuth: AngularFireAuth, private router: Router, public userService: UserService) {
    super(afAuth, null);
  }

  successCallback(signInSuccessData: FirebaseUISignInSuccessWithAuthResult) {
    this.User = this.initializeUser();

    if(signInSuccessData.authResult.additionalUserInfo.isNewUser) {
      console.log("Nieuwe user");
      localStorage.setItem("User", JSON.stringify(this.User));
      this.router.navigateByUrl('/newUser');
    } else {
      console.log("Oude user");
      this.userService.getUserById(this.User.uid).then(res => {
        localStorage.setItem("User", JSON.stringify(res))
      })
      this.router.navigateByUrl("");
    }
   
  }



}
