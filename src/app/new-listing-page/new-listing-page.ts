import { Component } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listing-page',
  imports: [ListingDataForm],
  templateUrl: './new-listing-page.html',
  styleUrl: './new-listing-page.css',
})
export class NewListingPage {
  constructor(private router: Router) {}

  createListing() {
    alert('Listing created!');
    this.router.navigate(['/my-listings']);
  }
}
