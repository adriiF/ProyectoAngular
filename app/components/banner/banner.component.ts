import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
@Input() nombre:string;
@Input() size:string;
  constructor() {

    this.nombre="";
    this.size="small";
   }
  

  ngOnInit(): void {
  }

}
