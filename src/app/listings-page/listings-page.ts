  import { Component } from '@angular/core';
  import { Listing } from '../types';
  import { fakeListings } from '../fake-data';
  import { RouterLink } from '@angular/router';
  import { CommonModule } from '@angular/common';

  @Component({
    selector: 'app-listings-page',
    imports: [RouterLink, CommonModule],
    templateUrl: './listings-page.html',
    styleUrl: './listings-page.css',
  })
  export class ListingsPage {
    listings: Listing[] = [];

    constructor() {
    }
    
    ngOnInit() {
      this.listings = fakeListings;
    }
  }
