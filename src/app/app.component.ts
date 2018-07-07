import { Component, OnInit, OnChanges } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WebsocketService, ChatService ]
})
export class AppComponent implements OnChanges {

  public flag = true;
	constructor(private chatService: ChatService) {
    this.ngOnChanges()
  }
  
ngOnChanges(){

  this.chatService.messages.subscribe(msg => {
    if(msg.flag){
      console.log(msg.flag)
      this.flag = false; 
    }
  });

}

	

}