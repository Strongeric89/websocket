import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { ChartComponent } from './chart/chart.component';
import {LiftComponent} from './lift/lift.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, ChatService ]
})
export class AppComponent {

  flag = true;

  @ViewChild(ChartComponent) chart;
  @ViewChild(LiftComponent) lift;


	constructor() {
  
  }

  ngOnInit(){
    Observable
    .zip( this.lift.loadedState$, this.chart.loadedState$ ) //Add as many as you want here... 
    .subscribe(pair => {
      
      console.log('All child components loaded');
      this.flag = false;
    });
  }



 



  
  

}