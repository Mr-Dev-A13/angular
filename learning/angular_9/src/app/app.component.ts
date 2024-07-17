import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from "../base-services/services.component";
import { AppCounterService } from "../base-services/services/app-counter.service";
import { LocalCounterService } from "../base-services/services/local-counter.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServicesComponent],
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
