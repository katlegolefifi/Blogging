import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-Contact',
  templateUrl: './Contact.component.html',
  styleUrls: ['./Contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = new FormGroup({
    // : ['', [ Validators.required,
    //   Validators.pattern("^[0-9]*$"),
    //   Validators.minLength(10), Validators.maxLength(10)]]



  })

  constructor() { }

  ngOnInit() {
  }
  get f(){
    return this.contactForm.controls;
   }

}
