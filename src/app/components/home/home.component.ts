import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  ingredient: string;
  valueB: string;
  ingredients: any;

  constructor() {
    this.title = 'Ingredientes';
    this.ingredients = []; // Inicializar el arreglo que se declaró como tipo any
  }

  ngOnInit() {
  }

  addIngredient() {
    this.ingredients.push(this.ingredient);
  }

}
