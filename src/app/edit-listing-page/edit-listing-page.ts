import { Component } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';
import { Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataForm, CommonModule],
  templateUrl: './edit-listing-page.html',
  styleUrl: './edit-listing-page.css',
})
export class EditListingPage {
  constructor(private router: Router, private route: ActivatedRoute) {}

  listing!: Listing;

  updateListing() {
    alert('Listing updated!');
    this.router.navigate(['/my-listings']);
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeMyListings.find((l) => l.id === id)!;
  }
}
