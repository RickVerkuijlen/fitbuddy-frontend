import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserComponent } from './new-user.component';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

describe('NewUserComponent', () => {
  let component: NewUserComponent;
  let fixture: ComponentFixture<NewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserComponent ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(NewUserComponent);
      component = fixture.componentInstance;
    });
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
