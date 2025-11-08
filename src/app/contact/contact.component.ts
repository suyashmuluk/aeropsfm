import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { NgxIntlTelInputModule, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, NgxIntlTelInputModule, CommonModule, MatInputModule, MatSnackBarModule]
})
export class ContactComponent implements OnInit {
  contact_form: FormGroup;
  success_message = signal(false);
  loader = signal(false);
  mobile_number = "";
  PhoneNumberFormat = PhoneNumberFormat;
  number_validation_msg = "";
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactService);
  snackbar = inject(MatSnackBar);

  ngOnInit(): void {
    this.initForm();
  }

  routeToHome() {
    this.router.navigate([""]);
  }

  initForm() {
    this.contact_form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      feedback: ['', Validators.required],
    });
  }

  get formControls() {
    return this.contact_form.controls;
  }

  phoneControlValidation() {
    const mobile_field = this.contact_form.get('mobile');
    if (mobile_field?.errors !== null && mobile_field?.errors?.required) {
      this.number_validation_msg = "Please enter mobile number";
      return;
    } else {
      this.number_validation_msg = ""
    }

    if (mobile_field?.errors !== null && !mobile_field.errors?.validatePhoneNumber?.valid) {
      this.number_validation_msg = "Please enter valid mobile number";
      return;
    } else {
      this.number_validation_msg = ""
    }
  }

  submitForm() {
    if (this.contact_form.invalid) {
      this.snackbar.open('Please fill all required fields', 'OK');
      return false;
    } else {
      let form_data = {
        name: this.contact_form.value.name,
        email: this.contact_form.value.email,
        mobile: this.contact_form.value.mobile.number,
        feedback: this.contact_form.value.feedback,
      }
      this.loader.set(true);
      this.contactService.sendMessage(form_data).subscribe(data => {
        this.loader.set(false);
        this.contact_form.reset();
        this.mobile_number = " ";
        this.success_message.set(true);
        setTimeout(() => {
          this.success_message.set(false);
        }, 3000);
      });
    }
  }

}
