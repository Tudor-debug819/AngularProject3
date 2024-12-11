import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formSubmitted = false;
  onSubmit() {
    this.formSubmitted = true;
  }

}
