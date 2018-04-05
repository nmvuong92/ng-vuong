import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  const routes: Routes = [
    { path: 'heroes', component: HeroesComponent }
  ];
  heroes=HEROES;
  constructor() { 
    
   
  }

  ngOnInit() {
   
  }
}
