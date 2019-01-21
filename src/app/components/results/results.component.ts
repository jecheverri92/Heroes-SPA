import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  heroesArr:Heroe[];
  termino:string;

  constructor(private _heroesService: HeroesService,
              private activatedRouted: ActivatedRoute) {  }

  ngOnInit() {

    this.activatedRouted.params.subscribe( params => {
      this.termino = params['termino']
      this.heroesArr = this._heroesService.buscarHeroes(params['termino'])
    })
  }

}
