import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgIf, NgFor, JsonPipe} from "@angular/common";
import {CustomValidator} from "./validators/custom.validator";

@Component({
  selector: 'app-forms-and-validation',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, JsonPipe],
  templateUrl: './forms-and-validation.component.html',
  styleUrl: './forms-and-validation.component.scss'
})

export class FormsAndValidationComponent implements OnInit {
  form!: FormGroup;

  ngOnInit (): void {
    this.form = new FormGroup({
      email: new FormControl("", [
        Validators.email,
        Validators.required,
        CustomValidator.restrictedEmails
      ], CustomValidator.uniqEmailAsync),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('am'),
        city: new FormControl("", Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit (): void {
    if (this.form.valid) {
      const formData = {...this.form.value};
      console.log(formData);
    }

    this.form.reset();
  }

  setCapital (): void {
    const cityMap: {[key: string]: string} = {
      am: "Yerevan",
      en: "London",
      fr: "Paris"
    };

    const cityKey = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey];
    this.form.patchValue({address: {city}});
  }

  addSkill (): void {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }

  getControls () {
    return this.form.get('skills') as FormArray;
  }

}
