import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgIf, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-forms-and-validation',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  templateUrl: './forms-and-validation.component.html',
  styleUrl: './forms-and-validation.component.scss'
})

export class FormsAndValidationComponent implements OnInit {
  form!: FormGroup;

  ngOnInit (): void {
    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ])
    });
  }

  submit (): void {
    console.log("Form submitted ", this.form);
    const formData = {...this.form.value};
    console.log(formData);
  }

}
