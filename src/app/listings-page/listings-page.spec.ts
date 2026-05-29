import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPage } from './listings-page';

describe('ListingPage', () => {
  let component: ListingsPage;
  let fixture: ComponentFixture<ListingsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ListingsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
