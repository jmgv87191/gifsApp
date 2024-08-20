import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input() gifs: Gif[] = []

}
