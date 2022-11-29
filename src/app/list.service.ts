import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  btnclick(){
    const back = document.getElementById('container');
    back!.style.backgroundColor = 'red'
  }

}
