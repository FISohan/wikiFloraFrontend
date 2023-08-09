import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { FloraService } from 'src/app/Services/flora.service';
import { Flora } from 'src/app/models/flora.model';

@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css']
})
export class DescriptionPageComponent implements OnInit {

  flora!: Flora;
  constructor(private route:ActivatedRoute,private floraService:FloraService) { }

  ngOnInit(): void {
    this.getFloraByName();
  }

  getFloraByName(){
    const name = this.route.snapshot.paramMap?.get('name');
    this.floraService.getFloraByName(name ?? "").subscribe(d => this.flora = d);
  }
}
