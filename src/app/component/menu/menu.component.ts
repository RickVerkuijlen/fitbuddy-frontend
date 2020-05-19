import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends FirebaseService implements OnInit {

  constructor(private router: Router, public afAuth: AngularFireAuth) {
    super(afAuth, null)
   }

  ngOnInit(): void {
  }

}
