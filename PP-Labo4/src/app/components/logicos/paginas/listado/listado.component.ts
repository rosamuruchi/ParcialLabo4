import { Component, OnInit } from '@angular/core';
import { DataService } from "../../../../services/data.service";
import { Router } from "@angular/router";

interface Data{
  count: number;
  results: Array<any>;
  next: string;
  previous: string;
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  results = [];
  count: number;
  next: string;
  previous: string;
  spinner: boolean = false;

  constructor(private datos: DataService, private router: Router) { }

  ngOnInit(): void {
    this.spinner = true;
    setTimeout(() => {
      this.datos.getData()
      .subscribe((data: Data) => {
        this.results = data.results;
        this.count = data.count;
        this.next = data.next;
        this.previous = data.previous;
        this.spinner = false;

        

      });  
      
    }, 2000);
  }

  irDetalle(pokemon){
    this.router.navigate(["/detalle/" + pokemon])
    .catch(e => console.log(e));
  }

  irMovimientos(pokemon){
    this.router.navigate(["/movimientos/" + pokemon])
    .catch(e => console.log(e));
  }


  onPageChange(event){
    this.spinner = true;
    setTimeout(() => {
      if(event.previousPageIndex < event.pageIndex){
        this.datos.getData(this.next)
        .subscribe((data: Data) => {
          this.results = data.results;
          this.count = data.count;
          this.next = data.next;
          this.previous = data.previous;
          this.spinner = false;
        });
      }
      else{
        this.datos.getData(this.previous)
        .subscribe((data: Data) => {
          this.results = data.results;
          this.count = data.count;
          this.next = data.next;
          this.previous = data.previous;
          this.spinner = false;
        });
      }
    }, 2000);
  }
}
