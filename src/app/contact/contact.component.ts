import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { PhoneNumberFormat } from 'ngx-intl-tel-input';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact_form: FormGroup;
  success_message = false;
  loader = false;
  mobile_number = "";
  PhoneNumberFormat = PhoneNumberFormat;
  number_validation_msg = ""

  constructor(private formBuilder: UntypedFormBuilder, private contactService: ContactService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.initForm();
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
      return;
    } else {
      let form_data = {
        name: this.contact_form.value.name,
        email: this.contact_form.value.email,
        mobile: this.contact_form.value.mobile.number,
        feedback: this.contact_form.value.feedback,
      }
      this.loader = true;
      this.contactService.sendMessage(form_data).subscribe(data => {
        this.loader = false;
        this.contact_form.reset();
        this.mobile_number = " ";
        this.success_message = true;
        setTimeout(() => {
          this.success_message = false;
        }, 3000);
      });
    }
  }

}
