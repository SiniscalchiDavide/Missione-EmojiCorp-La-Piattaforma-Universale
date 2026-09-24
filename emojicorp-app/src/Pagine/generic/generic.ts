import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Emoji } from '../../app/emoji';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [],
  templateUrl: './generic.html',
  styleUrl: './generic.css'
})
export class Generic implements OnInit {
  categoryTitle: string = '';
  items: Emoji[] = [];

  // Mappa per formattare il titolo dell'intestazione come nelle pagine statiche
  titlesMap: { [key: string]: string } = {
    food: 'Cibo 🍕',
    vehicles: 'Veicoli 🚗',
    animals: 'Animali 🐾',
    fruits: 'Frutta 🍏'
  };

  database: { [key: string]: Emoji[] } = {
    food: [
      { name: 'Pizza', emoji: '🍕' },
      { name: 'Hamburger', emoji: '🍔' },
      { name: 'Taco', emoji: '🌮' },
      { name: 'Sushi', emoji: '🍣' }
    ],
    vehicles: [
      { name: 'Auto', emoji: '🚗' },
      { name: 'Aereo', emoji: '✈️' },
      { name: 'Razzo', emoji: '🚀' },
      { name: 'Bicicletta', emoji: '🚲' }
    ],
    animals: [
      { name: 'Leone', emoji: '🦁' },
      { name: 'Cane', emoji: '🐶' },
      { name: 'Gatto', emoji: '🐱' }
    ],
    fruits: [
      { name: 'Mela', emoji: '🍎' },
      { name: 'Banana', emoji: '🍌' },
      { name: 'Fragola', emoji: '🍓' }
    ]
  };
  // Costruttore: gestisce la Dependency Injection dei servizi necessari al componente
  constructor(
    // Inietta ActivatedRoute per accedere e leggere i parametri dall'URL (es. l'id in '/generic/:id')
    private route: ActivatedRoute,
    // Inietta ChangeDetectorRef per forzare il rinfresco grafico quando la rotta cambia dinamicamente
    private cdr: ChangeDetectorRef
  ) {}

  // Metodo del ciclo di vita di Angular eseguito una volta creato il componente
  ngOnInit(): void {
    // Si iscrive (subscribe) all'Observable paramMap della rotta:
    // ogni volta che il parametro nell'URL varia (es. passando da 'food' a 'vehicles'),
    // viene richiamata automaticamente la funzione getRouterParam per caricare i nuovi dati
    this.route.paramMap.subscribe(this.getRouterParam);
  }

// Funzione freccia (arrow function) per gestire i parametri della rotta (URL)
getRouterParam = (params: ParamMap): void => {
  // 1. Estrae il valore del parametro 'id' dall'URL corrente
  const id = params.get('id');

  // 2. Verifica se l'ID esiste e se è presente come chiave nel database
  if (id && this.database[id]) {
    // Imposta il titolo della categoria: usa la mappa dei titoli se esiste, altrimenti mette l'ID in maiuscolo
    this.categoryTitle = this.titlesMap[id] || id.toUpperCase();
    
    // Aggiorna gli elementi clonando l'array dal database con lo spread operator (...)
    this.items = [...this.database[id]];
  } else {
    // Gestione del caso in cui l'ID non è valido o non viene trovato nel database
    this.categoryTitle = 'Categoria non trovata';
    this.items = [];
  }

  // 3. Forza manualmente il rilevamento dei cambiamenti (Change Detector) di Angular per aggiornare la UI
  this.cdr.detectChanges();
};
}