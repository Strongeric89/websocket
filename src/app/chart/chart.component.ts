import { Component, OnInit} from '@angular/core';
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

  constructor(private chatService:ChatService) { 
   super()
  }

  public parseSample(data){
   
    this.rows = data['rows']
        this.cols = data['columns']
        this.chartFlag = true;

    
          this.componentLoaded();
     



  }

  ngOnInit() {

 
    this.chatService.messages.subscribe(data =>{
      //getting data from the websocket - chat service
        console.log(data.message['sample'])
        this.parseSample(data.message['sample'])
      
    });

  
}//end ngOnInit

}//end class
