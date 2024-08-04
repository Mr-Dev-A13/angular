import {ApplicationConfig, Provider, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";

import { routes } from './app.routes';
import {AuthInterceptor} from "../base-http-client/interceptors/auth.interceptor";

const INTERCEPTORS_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    INTERCEPTORS_PROVIDER
  ]
};
