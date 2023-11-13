import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { FormModel } from 'src/app/models/formModel'
import { ContactService } from 'src/app/services/contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({})
  formModel: FormModel = new FormModel()
  isLoading: boolean = false

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.populateContactForm(new FormModel())
  }

  onSubmit(): void {
    this.isLoading = true

    this.contactService.createContact(this.contactForm.value).subscribe(res => {
      this.isLoading = false
      this.populateContactForm(new FormModel())
      alert('Muito obrigado pelo seu contato')
    })
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
