import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string = '{{My Personal Web Page}}';
  fragmentSelected: string | null =  null;

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
    this.route.fragment.subscribe({
      next: (fragment)=>{
        this.fragmentSelected = fragment;
      }
    })
  }

  activeRoute(fragment: string){
    return this.fragmentSelected === fragment;
  }
}
