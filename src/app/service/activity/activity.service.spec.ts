import { TestBed } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { mockAngularFireAuth } from 'src/app/mock/firebaseMock';

describe('ActivityService', () => {
  let service: ActivityService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ActivityService, useValue: ActivityService},
        {provide: AngularFireAuth, useValue: mockAngularFireAuth}
      ],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ActivityService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
