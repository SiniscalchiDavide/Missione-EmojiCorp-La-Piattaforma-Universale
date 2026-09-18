import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [],
  templateUrl: './animals.html',
  styleUrl: './animals.css'
})
export class Animals {
  // Vettore di dati con nome ed emoji
  animals = [
    { name: 'Leone', emoji: '🦁' },
    { name: 'Cane', emoji: '🐶' },
    { name: 'Gatto', emoji: '🐱' },
    { name: 'Elefante', emoji: '🐘' },
    { name: 'Pinguino', emoji: '🐧' },
    { name: 'Scimmia', emoji: '🐒' }
  ];
}