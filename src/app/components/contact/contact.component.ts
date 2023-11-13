import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FormModel } from 'src/app/models/formModel'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({})
  formModel: FormModel = new FormModel()

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.populateContactForm(new FormModel())
  }

  onSubmit(): void {
    console.log(this.contactForm.value)
  }

  populateContactForm(contactForm: FormModel): void {
    this.contactForm = this.formBuilder.group({
      name: [contactForm.name, Validators.required],
      lastname: [contactForm.lastname, Validators.required],
      email: [contactForm.email, [
        Validators.required,
        Validators.email,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
      ]],
      about: [contactForm.about, Validators.required],
      description: [contactForm.description, Validators.required],
    })
  }
}
