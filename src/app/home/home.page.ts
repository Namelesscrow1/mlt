import { Component } from '@angular/core';
import { MultipleFinderService } from '../services/multiple-finder.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '@environments/environment';

@Component({ 
  selector: 'app-home', // Se añaden las selecciones de los archivos "basicos", como el html y el css
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ // Se importan las librerias o los modulos que seran usados en la aplicacion
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  providers: [ // Se configura las dependencias para firebase y firestore
    { provide: 'Firebase', useFactory: () => initializeApp(environment.firebase) },
    { provide: 'Firestore', useFactory: () => getFirestore() }
  ]
})
export class HomePage {
  inputNumber: number = 0; // Aqui se guarda el numero que el usuario ingresa para calcular los multiplos
  results: any[] = []; // Aqui se guardan los multiplos calculados

  constructor(private multipleFinderService: MultipleFinderService) {} 

  findMultiples() {
    this.results = this.multipleFinderService.findMultiples(this.inputNumber);
    this.multipleFinderService.saveResult(this.inputNumber, this.results);
  }
}