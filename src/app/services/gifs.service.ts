import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _tagHistory:string[] = []
  private apiKey: string = "YUDb7YNb56Pdc54Av2nUrN5DtZcQenHX"
  private api: string = 'https://api.giphy.com/v1/gifs/search?api_key=YUDb7YNb56Pdc54Av2nUrN5DtZcQenHX&q=valorant&limit=10'

  constructor( private http: HttpClient ) { }

  get tagHistory(){
    return [...this._tagHistory]
  }

  private organizeHistory( tag: string){
    tag = tag.toLowerCase()

    if (this._tagHistory.includes(tag)) {
      
      this._tagHistory = this._tagHistory.filter( oldTag => oldTag!== tag )
    }

    this._tagHistory.unshift( tag )
    this._tagHistory = this._tagHistory.splice(0,10)

  }

searchTag( tag: string ):void{

  if (tag.length === 0)return;
  this.organizeHistory(tag)


  this.http.get( this.api ).subscribe( resp => {
    console.log( resp )
  } )

}

}
