import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  @Input() heroe!: Heroe

  constructor(private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

   this.ActivatedRoute.params
   .subscribe ( ({id})=> console.log(id))



  }

}
