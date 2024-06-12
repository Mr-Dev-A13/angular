import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPostComponent } from './ng-post.component';

describe('NgPostComponent', () => {
  let component: NgPostComponent;
  let fixture: ComponentFixture<NgPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
