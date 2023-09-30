import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact_form: UntypedFormGroup;
  success_message = false;
  loader = false;
  mobile_number = "";

  constructor(private formBuilder: UntypedFormBuilder, private contactService: ContactService) { }

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

  submitForm() {
    if (this.contact_form.invalid) {
      return;
    } else {
      let form_data = {
        name: this.contact_form.value.name,
        email: this.contact_form.value.email,
        mobile: this.contact_form.value.mobile,
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
