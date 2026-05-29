import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listing-data-form',
  imports: [FormsModule],
  templateUrl: './listing-data-form.html',
  styleUrl: './listing-data-form.css',
})
export class ListingDataForm {
  @Input() submitButtonText!: string;
  name: string = '';
  description: string = ''
  price: string = '';

  constructor(private router: Router) {}

  createListing() {
    alert('Listing created!'); // Placeholder for actual implementation
    this.router.navigate(['/my-listings']);
  }
}
