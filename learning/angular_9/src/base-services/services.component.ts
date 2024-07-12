import { Component } from '@angular/core';
import { AppCounterService } from "./services/app-counter.service";
import {LocalCounterService} from "./services/local-counter.service";

@Component({
  selector: 'app-base-services',
  standalone: true,
  providers: [LocalCounterService],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(
    protected appCounterServices: AppCounterService,
    protected localCounterServices: LocalCounterService
  ) {

  }
}
