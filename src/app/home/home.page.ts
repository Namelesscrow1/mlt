import { Component } from '@angular/core';
import { MultipleFinderService } from '../services/multiple-finder.service';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonLabel
  ],
  providers: [
    { provide: 'Firebase', useFactory: () => initializeApp(environment.firebase) },
    { provide: 'Firestore', useFactory: () => getFirestore() }
  ]
})
export class HomePage {
  inputNumber: number = 0;
  results: any[] = [];

  constructor(private multipleFinderService: MultipleFinderService) {}

  handleInput(event: any) {
    const value = event.detail.value;
    this.inputNumber = value !== '' ? Number(value) : 0;
  }

  findMultiples() {
    this.results = this.multipleFinderService.findMultiples(this.inputNumber);
    this.multipleFinderService.saveResult(this.inputNumber, this.results);
  }
}
