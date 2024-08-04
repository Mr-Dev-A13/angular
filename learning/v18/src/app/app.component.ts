import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "../base-services/services.component";
import { AppCounterService } from "../base-services/services/app-counter.service";
import { LocalCounterService } from "../base-services/services/local-counter.service";
import { FormsAndValidationComponent } from "../base-forms-and-validation/forms-and-validation.component";
import { BaseHttpClientComponent } from "../base-http-client/base-http-client.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ServicesComponent,
    FormsAndValidationComponent,
    BaseHttpClientComponent
  ],
  providers: [LocalCounterService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_9';

  constructor(
    protected appCounterServices: AppCounterService,
    protected localCounterServices: LocalCounterService
  ) {

  }
}
