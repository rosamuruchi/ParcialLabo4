import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/data.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {

  nombrePokemon: string = "";
  pokemon: any = {};
  spinner: boolean = false;
  fotos = new Array();
  movimientos = new Array();
  

  constructor(private route: ActivatedRoute, private datos: DataService) { }

  ngOnInit(): void {
    this.spinner = true;
    setTimeout(() => {
      this.nombrePokemon = this.route.snapshot.paramMap.get("pokemon");
      this.datos.getData("https://pokeapi.co/api/v2/pokemon/" + this.nombrePokemon)
      .subscribe(poke => {
        this.pokemon = poke;
        this.fotos.push(this.pokemon.sprites.front_default);

        /*this.pokemon.moves.forEach(hab => {
          this.movimientos.push(hab.move.move_learn_method);
          console.log(this.movimientos.push(hab.move.move_learn_method));
        });*/

        this.pokemon.moves.forEach(hab => {
          this.movimientos.push(hab.move.name);
        });
        
        
        this.spinner = false;
      });  
    }, 2000);
  }

}
