import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-listing-page',
  imports: [FormsModule],
  templateUrl: './new-listing-page.html',
  styleUrl: './new-listing-page.css',
})
export class NewListingPage {
  name: string = '';
  description: string = ''
  price: string = '';

  constructor(private router: Router) {}

  createListing() {
    alert('Listing created!'); // Placeholder for actual implementation
    this.router.navigate(['/my-listings']);
  }
}
