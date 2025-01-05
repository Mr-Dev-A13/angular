import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  template: "<form></form>",
})
export class FormComponent {
  form : FormGroup;

  constructor(
    public _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      login: ["", Validators.required],
      email: [""],
    })
  }
}
