import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SearchBoxComponent, CardListComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor( 
    private gifService: GifsService
  ){}


  get gifs():Gif[] {
    return this.gifService.gifList;
  }

}
