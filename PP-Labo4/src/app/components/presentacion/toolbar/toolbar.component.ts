import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  
  menuItems: MenuItem[] = [
    {
      texto: "Inicio",
      ruta: ""
    },
    {
      texto: "Listado de Pokemones",
      ruta: "listado"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
