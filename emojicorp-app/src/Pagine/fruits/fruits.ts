import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  standalone: true,
  imports: [],
  templateUrl: './fruits.html',
  styleUrl: './fruits.css'
})
export class Fruits {
  fruits = [
    { name: 'Mela', emoji: '🍎' },
    { name: 'Banana', emoji: '🍌' },
    { name: 'Fragola', emoji: '🍓' },
    { name: 'Anguria', emoji: '🍉' },
    { name: 'Limone', emoji: '🍋' }
  ];
}