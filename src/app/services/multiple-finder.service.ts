import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firebase

@Injectable({
  providedIn: 'root'
})
export class MultipleFinderService {    // Exporta la clase
  constructor(private firestore: Firestore) {} // Usa Firestore

  findMultiples(num: number) {
    const result = []; // Array vacio para guardar los resultados
    for (let i = 0; i <= num; i++) {  // Aqui se hace el calculo del numero ingresado para revirsar sus multiplos
      let color = 'grey';
      let multiples = [];

      if (i % 3 === 0) { // Se hace la division para revisar si es multiplo del 3
        color = 'green';
        multiples.push(3);
      }
      if (i % 5 === 0) { // Se hace la division para revisar si es multiplo del 5
        color = color === 'grey' ? 'red' : color;
        multiples.push(5);
      }
      if (i % 7 === 0) { // Se hace la division para revisar si es multiplo del 7
        color = color === 'grey' ? 'blue' : color;
        multiples.push(7);
      }

      result.push({ number: i, color, multiples });
    }
    return result;
  }

  saveResult(input: number, result: any[]) {
    const resultsCollection = collection(this.firestore, 'results'); // Usa collection para acceder a la colección y guardarse en la db
    return addDoc(resultsCollection, {
      input,
      result,
      timestamp: new Date()
    });
  }
}
