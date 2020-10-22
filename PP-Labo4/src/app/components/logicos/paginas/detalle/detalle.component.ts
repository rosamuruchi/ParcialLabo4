import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/data.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  nombrePokemon: string = "";
  pokemon: any = {};
  fotos = new Array();
  habilidades = new Array();
  peso = new Array();
  altura = new Array();
  order = new Array();
  spinner: boolean = false;

  constructor(private route: ActivatedRoute, private datos: DataService) { }

  ngOnInit(): void {
    this.spinner = true;
    setTimeout(() => {
      this.nombrePokemon = this.route.snapshot.paramMap.get("pokemon");
      this.datos.getData("https://pokeapi.co/api/v2/pokemon/" + this.nombrePokemon)
      .subscribe(poke => {
        this.pokemon = poke;
        this.fotos.push(this.pokemon.sprites.front_default);
        this.fotos.push(this.pokemon.sprites.back_default);
        this.fotos.push(this.pokemon.sprites.front_shiny);
        this.fotos.push(this.pokemon.sprites.back_shiny);
        this.pokemon.abilities.forEach(hab => {
          this.habilidades.push(hab.ability.name);
        });
        this.peso =this.pokemon.weight;
        this.altura=this.pokemon.height;
        this.order =this.pokemon.order;
        
        console.log(this.altura);
        this.spinner = false;
      });  
    }, 2000);
  }

}
