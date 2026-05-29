import { Component } from '@angular/core';
import { fakeListings } from '../fake-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-detail-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './listing-detail-page.html',
  styleUrl: './listing-detail-page.css',
})
export class ListingDetailPage {
  listing: Listing | undefined;

  constructor(private route: ActivatedRoute) {    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
    }
}