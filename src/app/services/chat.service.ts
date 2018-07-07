import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { delay } from '../../../node_modules/rxjs-compat/operator/delay';

const CHAT_URL = 'ws://localhost:8081'; //This is a test websocket sending the json data

export interface Message {
	message: string,
	flag:boolean;
}

@Injectable()
export class ChatService {
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.delay(2000)
			.map((response: MessageEvent): Message => {
				let data = JSON.parse(response.data);
				
				console.log(data.message)
				
			
				return {
					message: data.message,
					flag:true
				}
			});
	}
}