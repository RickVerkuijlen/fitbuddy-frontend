import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsComponent } from './sports.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { SportService } from 'src/app/service/sport/sport.service';
import { mockAngularFireAuth } from 'src/app/mock/firebaseMock';
import { AuthService } from 'src/app/service/auth/auth.service';
import { SportServiceMock } from 'src/app/service/sport/sport.service.mock';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsComponent ],
      providers: [
        { provide: AngularFireAuth, useValue: mockAngularFireAuth},
        { provide: SportService, useValue: SportServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
