import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { registerLocaleData } from '@angular/common';
 
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NewUserComponent } from './component/new-user/new-user.component';
import { MenuComponent } from './component/menu/menu.component';
import { ProfileComponent } from './component/profile/profile.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { SportsComponent } from './component/sports/sports.component';
import { ActivityComponent } from './component/activity/activity.component';
import localeNL from '@angular/common/locales/nl';
import { SortByPipe } from './helpers/sort-by.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(localeNL);

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  //tosUrl: '<your-tos-link>',
  //privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.NONE
};

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    MenuComponent,
    ProfileComponent,
    DashboardComponent,
    SportsComponent,
    ActivityComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'nl-NL'
  }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
