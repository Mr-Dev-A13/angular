import {AbstractControl, FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidator {
  static restrictedEmails (control: FormControl): {[key: string]: boolean} | null {

    if (["a@gmail.com", "asd@gmail.com"].includes(control.value)) {
      return { restrictedEmail: true }
    }

    return null;
  }

  static uniqEmailAsync (control: AbstractControl): Promise<{[key: string]: boolean} | null> | Observable<{[key: string]: boolean} | null> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === "a13@gmail.com") {
          resolve ({uniqEmail: true})
        } else {
          resolve(null)
        }
      }, 3000)
    })

  }
}
