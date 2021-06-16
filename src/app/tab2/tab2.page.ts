import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lista:string[];
  constructor() {
    this.inicializar();
  }

  inicializar(){
    this.lista =[
      'pollo',
      'pastas',
      'sopas',
      'Carne',
      'salteados',
       ];
  }

  Busqueda(ev: any){
    this.inicializar();

    const val = ev.target.value;

    if (val && val.trim() !== '') {
      this.lista = this.lista.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      } );
    }
  }
}
