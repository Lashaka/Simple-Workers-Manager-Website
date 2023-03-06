import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRandomPageComponent } from './create-random-page.component';

describe('CreateRandomPageComponent', () => {
  let component: CreateRandomPageComponent;
  let fixture: ComponentFixture<CreateRandomPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRandomPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRandomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
