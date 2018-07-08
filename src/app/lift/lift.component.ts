import { Component, OnInit } from '@angular/core';
import {ChatService} from '../services/chat.service'
import { AsynchronouslyInitialisedComponent } from '../asynchronously-initialised/asynchronously-initialised.component';


@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent extends AsynchronouslyInitialisedComponent implements OnInit {

  public rows = [];
  public cols = [];
  public liftFlag: boolean;

  constructor(private chatService:ChatService) { 
    super()
  }

  public parseLift(data){
    this.rows = data['rows']
        this.cols = data['columns']
        this.liftFlag = true;
      

    
        this.componentLoaded();

  }

  ngOnInit() {
    
    
        this.chatService.messages.subscribe(data =>{

          //getting data from the websocket - chat service
            console.log(data.message['Lift'])
            this.parseLift(data.message['Lift'])
          
        });

      
}//end ngOnInit

}//end class
