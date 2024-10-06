import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({"projectId":"multple-88036","appId":"1:882055117326:web:b523d6b975289ae200da5f","storageBucket":"multple-88036.appspot.com","apiKey":"AIzaSyAcuCFrHghVL_XDwhUVDFhzuy4TDDvy02M","authDomain":"multple-88036.firebaseapp.com","messagingSenderId":"882055117326"})), provideFirestore(() => getFirestore()),
  ],
});
