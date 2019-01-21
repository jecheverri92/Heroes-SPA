import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  heroesArr:Heroe[] = []
  constructor(private reouter:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    
    this.reouter.navigate(['/buscar',termino]);
    return false;
    
  }

}