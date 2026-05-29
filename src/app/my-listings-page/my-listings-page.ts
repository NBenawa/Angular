import { Component } from '@angular/core';
import { fakeMyListings } from '../fake-data';
import { Listing } from '../types';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-listings-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './my-listings-page.html',
  styleUrl: './my-listings-page.css',
})
export class MyListingsPage {
  fakeMyListings: Listing[] = [];

  constructor(
  ){}

  ngOnInit() {
    this.fakeMyListings = fakeMyListings;
  }

  deleteListing(id: string) {
    alert(`Delete listing with id: ${id}`);
  }
}
