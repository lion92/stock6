import { Component, OnInit } from '@angular/core';
import {LoaderserviceService} from "./loaderservice.service";
import {Subscription} from "rxjs";
import {LoaderState} from "./loadermodel";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
public show=false;
  public  subscription:Subscription|undefined;
  constructor(public loaderService:LoaderserviceService) { }

  ngOnInit(): void {
    this.subscription=this.loaderService.loaderState.subscribe((state:LoaderState)=>{
      this.show=state.show;
    })
  }

  ngOnDestroy():void{
    this.subscription?.unsubscribe();
  }

}
