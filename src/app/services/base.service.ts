import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  constructor(private http: HttpClient) { }

  getPokeDetails(offset:any,limit:number)
  {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`);
  }

  getNextPokeDetails(name : string)
  {
    return this.http.get(`${this.baseUrl}${name}`);
  }
}
