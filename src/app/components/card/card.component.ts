import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs';
import { LazyImageComponent } from '../lazy-image/lazy-image.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [LazyImageComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  ngOnInit(): void {

    if (!this.item) throw new Error('Gif property is required')
      
  }

  @Input() public item!: Gif;

}
