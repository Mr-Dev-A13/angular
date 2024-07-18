import { FormControl } from "@angular/forms";

export class CustomValidator {
  static restrictedEmails (control: FormControl): {[key: string]: boolean} | null {

    if (["a@gmail.com", "asd@gmail.com"].includes(control.value)) {
      return { restrictedEmail: true }
    }

    return null;
  }
}
