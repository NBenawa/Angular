import { Component } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataForm],
  templateUrl: './edit-listing-page.html',
  styleUrl: './edit-listing-page.css',
})
export class EditListingPage {}
