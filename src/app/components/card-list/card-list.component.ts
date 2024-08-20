import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

  @Input() gifs: Gif[] = []

}
