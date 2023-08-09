import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  gradientAmount = 50;
  ngOnInit(): void {
    this.onMouseMove()
  }
  onMouseMove(){
    window.addEventListener('mousemove',(e)=>{
      this.gradientAmount = (e.clientX/window.innerWidth)*100      
    })
  }
}
