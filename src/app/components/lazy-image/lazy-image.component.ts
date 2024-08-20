import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit {

  ngOnInit(): void {

    if (!this.url) throw new Error( 'URL property is required' )

  }

  public hasLoaded: boolean = false;

  @Input() public url!: string;
  @Input() public alt!: string;


  onLoad(){

    setTimeout(() => {
      this.hasLoaded = true;
      
    }, 1000);

    
  }

}
