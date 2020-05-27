import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { User } from 'src/app/model/user';
import { EventEmitter } from 'protractor';
import { Gender } from '../../helpers/gender';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  newUser: User;
  registerForm;
  bmi: number;


  constructor(private formBuilder: FormBuilder, public userService: UserService, public router: Router) { 
    this.newUser = JSON.parse(localStorage.getItem("User"));
    console.log(this.newUser);
    this.registerForm = this.formBuilder.group({
      name: this.newUser.name,
      gender: [Gender, Validators.requiredTrue],
      length: ['', Validators.requiredTrue],
      weight: ['', Validators.requiredTrue]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(registerForm) {
    this.newUser.name = registerForm.name;
    this.newUser.gender = registerForm.gender;
    this.newUser.length = registerForm.length;
    this.newUser.weight = registerForm.weight;
    this.newUser.bmi = this.bmi.toFixed(2);
    if(this.newUser.picture == null) {
      this.newUser.picture = "default";
    }
    localStorage.setItem("User", JSON.stringify(this.newUser));
    console.log(this.newUser);
    this.userService.addUser(this.newUser).subscribe((result) => {
      this.router.navigate(['/profile']);
    }, (err) => {
      console.log(err);
    });
  }

  determineBMI(event: EventEmitter) {
    let weight = this.registerForm.get('weight').value;
    let lengthInMeter = this.registerForm.get('length').value / 100
    this.bmi = weight / (lengthInMeter * lengthInMeter)
  }

}
