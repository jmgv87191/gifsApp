import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../components/search-box/search-box/search-box.component';
import { CardListComponent } from '../../components/card-list/card-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ SearchBoxComponent, CardListComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
