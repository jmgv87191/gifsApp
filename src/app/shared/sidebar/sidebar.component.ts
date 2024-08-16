import { Component,  } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {

  constructor( private gifService: GifsService ){
  }
  
  get tags(){
    return  this.gifService.tagHistory;
  }

  

}
