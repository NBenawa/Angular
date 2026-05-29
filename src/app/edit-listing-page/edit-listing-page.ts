import { Component } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataForm],
  templateUrl: './edit-listing-page.html',
  styleUrl: './edit-listing-page.css',
})
export class EditListingPage {
  constructor(private router: Router) {}

  updateListing() {
    alert('Listing updated!');
    this.router.navigate(['/my-listings']);
  }
}
