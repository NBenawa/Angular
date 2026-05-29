import { Component } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';
@Component({
  selector: 'app-new-listing-page',
  imports: [ListingDataForm],
  templateUrl: './new-listing-page.html',
  styleUrl: './new-listing-page.css',
})
export class NewListingPage {
}
