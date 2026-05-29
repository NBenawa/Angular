import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  imports: [FormsModule],
  templateUrl: './listing-data-form.html',
  styleUrl: './listing-data-form.css',
})
export class ListingDataForm {
  @Input() submitButtonText!: string;
  @Input() currentName: string = '';
  @Input() currentDescription: string = '';
  @Input() currentPrice: number = 0;

  @Output() sendEventToParent = new EventEmitter<Listing>();

  name: string = '';
  description: string = ''
  price: string = '';

  constructor(private router: Router) {}

  createListing() {
    this.sendEventToParent.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
  }

  ngOnInit() {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice.toString();
  }
}
