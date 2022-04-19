import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-aside-blog',
  templateUrl: './aside-blog.component.html',
  styleUrls: ['./aside-blog.component.css']
})
export class AsideBlogComponent implements OnInit {
  public searchString: String;
  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { 

    this.searchString="";
  }

  ngOnInit(): void {
  }

  goSearch(){
    /*alert(this.searchString);*/
    this._router.navigate(['/buscar', this.searchString]);
  }

}
