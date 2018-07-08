import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ChatService} from '../services/chat.service'
import { AsynchronouslyInitialisedComponent } from '../asynchronously-initialised/asynchronously-initialised.component';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent extends AsynchronouslyInitialisedComponent implements OnInit {

  public rows = [];
  public cols = [];
  public chartFlag: boolean;

  constructor(private chatSerivice:ChatService) { 
    super()
  }

  ngOnInit() {
    this.chatSerivice.messages.subscribe(data =>{

      //getting data from the websocket - chat service
        console.log(data.message['sample'])
        this.rows = data.message['sample']['rows']
        this.cols = data.message['sample']['columns']
        this.chartFlag = true;

        this.componentLoaded();

        
    });

    

  
  

}



}
