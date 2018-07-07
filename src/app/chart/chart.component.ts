import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public rows = [];
  public cols = [];

  constructor(private chatSerivice:ChatService) { }

  ngOnInit() {
    this.chatSerivice.messages.subscribe(data =>{

      //getting data from the websocket - chat service
        console.log(data.message['sample'])
        this.rows = data.message['sample']['rows']
        this.cols = data.message['sample']['columns']

    });
  

}

}
