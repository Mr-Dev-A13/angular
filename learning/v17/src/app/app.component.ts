import { Component } from '@angular/core'
// import { AuthService } from "./routing/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modal = false;

  constructor(
    // protected auth: AuthService
  ) {}
}

