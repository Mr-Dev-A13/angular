import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  log (text: string): void {
    console.log(`This is log: ${text}`);
  }
}
