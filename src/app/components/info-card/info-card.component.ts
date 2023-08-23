import { Component, Input, OnInit } from '@angular/core';
import { Flora } from 'src/app/models/flora.model';
import { Photo } from 'src/app/models/photo.model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor() { }
  coverPhoto?:Photo;
  @Input() floraInfo!:Flora;
  
  ngOnInit(): void {
    this.coverPhoto =  this.floraInfo.photos.find(e => e.isCoverPhoto);
  }

}
