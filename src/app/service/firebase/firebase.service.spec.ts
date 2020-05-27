import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { mockAngularFireAuth } from 'src/app/mock/firebaseMock';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: FirebaseService, useValue: FirebaseService},
        {provide: AngularFireAuth, useValue: mockAngularFireAuth}
      ],
    });

    service = TestBed.get(FirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
