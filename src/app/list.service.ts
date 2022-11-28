import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  btnclick(){
    console.log("You are in Home component")
  }

}
