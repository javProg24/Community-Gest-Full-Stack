import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(),
    provideRouter(routes),
    provideToastr({
      positionClass: 'toast-top-right', // Posición de la notificación
      timeOut: 3000, // Tiempo de duración en milisegundos
      preventDuplicates: true, // Evita mensajes repetidos
    }), provideAnimationsAsync(),
    provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
