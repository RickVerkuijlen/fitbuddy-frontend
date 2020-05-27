import { TestBed } from '@angular/core/testing';

import { SportService } from './sport.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { mockAngularFireAuth } from 'src/app/mock/firebaseMock';

describe('SportService', () => {
  let service: SportService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: SportService, useValue: SportService},
        {provide: AngularFireAuth, useValue: mockAngularFireAuth}
      ],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SportService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
