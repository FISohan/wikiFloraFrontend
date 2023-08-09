import { Component, Input, OnInit } from '@angular/core';
import { Flora } from 'src/app/models/flora.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor() { }
  @Input() floraInfo!:Flora;
  ngOnInit(): void {
  }

}
