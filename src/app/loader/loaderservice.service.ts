import { Injectable } from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {LoaderState} from "./loadermodel";
import loader from "@angular-devkit/build-angular/src/webpack/plugins/single-test-transform";

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {

private loaderSubject=new Subject<LoaderState>();
loaderState=this.loaderSubject.asObservable();
  constructor() { }
  show():void{
    this.loaderSubject.next(
    {
      show:true
    }
    )
  }
  hide():void{
    this.loaderSubject.next(
      {
        show:false
      }
    )
  }

}

