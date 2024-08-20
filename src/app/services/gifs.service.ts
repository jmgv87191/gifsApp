import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagHistory:string[] = []
  private apiKey: string = "YUDb7YNb56Pdc54Av2nUrN5DtZcQenHX"
  private api: string = 'https://api.giphy.com/v1/gifs/search?api_key=YUDb7YNb56Pdc54Av2nUrN5DtZcQenHX&q='


  constructor( private http: HttpClient ) { 
    this.loadLocalStorage()
  }


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
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{
    localStorage.setItem( 'history',JSON.stringify (this._tagHistory) );
  }
  private loadLocalStorage(): void {
    if (typeof window !== 'undefined' && localStorage.getItem('history')) {
      this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    
      if (this._tagHistory.length > 0) {
        this.searchTag(this.tagHistory[0]);
      }
    }
  }

searchTag( tag: string ):void{

  if (tag.length === 0)return;
  this.organizeHistory(tag)


  this.http.get<SearchResponse>( `${this.api}${tag}&limit=10`  ).subscribe( resp  => {

    this.gifList = resp.data;

    console.log( {gifs: this.gifList} )

  } )
}



}
